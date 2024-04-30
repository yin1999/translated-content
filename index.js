//
// This script uses mdast to parse the markdown files and check if the URLs
// are pointing to the correct locale.
// You can also use the --fix option to fix the URL locale errors.
//
// Usage:
// node scripts/check-url-locale.js [files...]
// node scripts/check-url-locale.js --fix [files...]

"use strict";

import fs from "node:fs/promises";
import * as path from "node:path";
import { fdir } from "fdir";
import ora from "ora";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fromMarkdown } from "mdast-util-from-markdown";
import { visit } from "unist-util-visit";

const spinner = ora().start();

/**
 *
 * @param {string} rawContent
 * @returns {Set<string>}
 */
function findUrlInText(rawContent) {
  const urls = new Set();
  for (const match of rawContent.matchAll(/href=['"]([^'"]+)['"]/g)) {
    urls.add(match[1]);
  }
  return urls;
}

/**
 *
 * @param {string} content
 * @returns {Set<string>}
 */
function findUrlInMarkdown(content) {
  const tree = fromMarkdown(content);
  const urls = new Set();
  visit(tree, ["link", "html"], (node) => {
    if (node.type === "link") {
      urls.add(node.url);
    } else {
      // html
      const urlsInHtml = findUrlInText(node.value);
      for (const url of urlsInHtml) {
        urls.add(url);
      }
    }
  });
  return urls;
}

const wikiCache = new Map();

/**
 *
 * @param {string} content
 */
async function checkWikiLink(content) {
  const urls = findUrlInMarkdown(content);
  for (const url of urls) {
    // check if the URL is a wiki link
    if (!url.includes("wikipedia.org")) {
      continue;
    }
    if (wikiCache.has(url)) {
      continue;
    }
    try {
      const response = await fetch(url, { method: "HEAD" });
      wikiCache.set(url, response.ok);
    } catch (e) {
      wikiCache.set(url, false);
    }
  }
}

async function main() {
  const { argv } = yargs(hideBin(process.argv)).command(
    "$0 [files..]",
    "Check the url locales of the given files",
    (yargs) => {
      yargs
        .positional("files", {
          describe:
            "The files to check (relative to the current working directory)",
          type: "string",
          array: true,
          default: ["./files/"],
        })
        .option("fix", {
          describe: "Fix the URL locale errors",
          type: "boolean",
          default: false,
        });
    },
  );

  const files = [];

  spinner.text = "Crawling files...";

  for (const fp of argv.files) {
    const fstats = await fs.stat(fp);

    if (fstats.isDirectory()) {
      files.push(
        ...new fdir()
          .withBasePath()
          .filter((path) => path.endsWith(".md"))
          .crawl(fp)
          .sync(),
      );
    } else if (fstats.isFile()) {
      files.push(fp);
    }
  }

  for (const i in files) {
    const file = files[i];

    spinner.text = `${i}/${files.length}: ${file}...`;

    const relativePath = path.relative(process.cwd(), file);
    const parts = relativePath.split(path.sep);
    if (parts.length < 2 || parts[0] !== "files") {
      spinner.warn(`File "${file}" is not in the files directory!`);
      spinner.start();
      continue;
    }

    try {
      const originContent = await fs.readFile(relativePath, "utf8");

      await checkWikiLink(originContent);
    } catch (e) {
      spinner.fail(`${file}: ${e}`);
      spinner.start();
    }
  }

  spinner.stop();

  for (const [url, ok] of wikiCache) {
    if (!ok) {
      console.log(`- ${url}`);
    }
  }
}

await main();
