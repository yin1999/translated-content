---
title: 概要
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
original_slug: Web/SVG/Tutorial/Introduction
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

[SVG](/ja/docs/Web/SVG) は [XML](/ja/docs/Web/XML) 言語の一種で、 [XHTML](/ja/docs/Glossary/XHTML) に似た、下に示すようなベクターグラフィックの描画に用いる言語です。必要なすべての線や 図形を指定したり、すでにあるラスター画像を変更したり、あるいはその両方を結合したりして、画像を作成するために使用することができます。また、画像とその部品を座標変換したり、互いに合成したり、フィルタリングしたりして、その見た目を完全に変えることもできます。

![Mozilla dino ロゴ](dino.svg)

SVGは、いくつかの競合する形式が [W3C](https://www.w3.org) に申請され、完全に承認されなかった後、 1999 年に決まりました。 SVG は主要なすべての[ブラウザー](https://caniuse.com/#search=svg)で対応しています。欠点は SVG の読み込みが遅いことです。 SVG には、 [DOM インターフェイス](/ja/docs/Web/API)が利用可能であること、サードパーティによる拡張が要求されないことなどの利点が挙げられます。 SVG を使用するかどうかは、ふつうは具体的な用途に依存します。

## 基本的な構成要素

[HTML](/ja/docs/Web/HTML) はヘッダー、段落、テーブルなどを定義する要素を提供します。同様に SVG は円、長方形、単純あるいは複雑な曲線などの要素を提供します。シンプルな SVG 文書は {{ SVGElement('svg') }} ルート要素およびグラフィックを構成するいくつかの基本的な図形のみから成ります。加えて {{ SVGElement('g') }} があり、これでいくつかの基本的な図形をグループ化します。

ここから始めて、 SVG 画像を複雑にしていくことができます。SVG はグラデーション、回転、フィルター効果、アニメーション、JavaScript との連携などに対応しています。しかし、言語のこれらすべての追加機能は、グラフィック領域を定義するこの比較的小さな要素セットに頼っています。

## 始める前に

無料で SVG をネイティブファイル形式として使用することができる描画アプリケーションは、 [Inkscape](https://inkscape.org/) など、数多くあります。しかし、このチュートリアルは信頼できる XML エディターかテキストエディターを（お好みで）使っています。この考えは SVG を理解したい人に SVG の内部構造を学んでもらうことであり、それはマークアップで手を汚すことによって行うのが最善です。しかし、最終的な目標に注意してください。 SVG ビューアーはすべて同じではないので、あるアプリで書いたものが別のアプリでまったく同じように表示されない可能性は十分にあります。なぜなら、 SVG 仕様書や、 SVG と一緒に使用している別の仕様（つまり、 [JavaScript](/ja/docs/Web/JavaScript) や [CSS](/ja/docs/Web/CSS)）で対応しているレベルが異なるからです。

SVG は現行のすべてのブラウザーで対応しており、場合によっては 2、3 バージョン前のブラウザーでも対応しています。かなり完全なブラウザーの対応表は [Can I use](https://caniuse.com/svg) で得られます。 Firefox は バージョン 1.5 からいくつかの SVG コンテンツに対応しており、それ以降リリースされるたびに対応レベルは上がっています。ここのチュートリアルと共に、 MDN が開発者が Gecko と他の主要な実装の違いを把握する手助けになることを期待しています。

始める前に、XML もしくは HTML のような他のマークアップ言語の基本を理解するべきです。もし、XML に馴染みがないのであれば、以下に心にとめておく指針があります。

- SVG 要素および属性は、XML が (HTML とは異なり) 大文字小文字を区別するため、ここで示したとおりに入力しなければなりません。
- SVG の属性値は、たとえ数値でも引用符で囲まれなければなりません。

SVG は巨大な仕様です。このチュートリアルは基本に応じたものです。慣れることができたら、[要素リファレンス](/ja/docs/Web/SVG/Reference/Element)と[インターフェイスリファレンス](/ja/docs/Web/API/Document_Object_Model#svg_のインターフェイス)を使用して、他に必要なことを探すことができるはずです。

## SVG の種類

2003 年に勧告が成立して以降、最新の「完全な」 SVG バージョンは 1.1 です。これは SVG 1.0 の上に構築したものですが、実装を容易にするためにモジュール化が進みました。 [SVG 1.1 第 2 版](https://www.w3.org/TR/SVG/)は 2011 年に勧告となりました。「完全な」 SVG 1.2 は SVG の次のメジャーリリースを意味していました。これは現在開発が進められている [SVG 2.0](https://www.w3.org/TR/SVG2/) のために破棄されたもので、これは構成要素をいくつかの緩く結合した仕様に分割する、CSS 3 と似た手法をとっています。

完全な SVG 勧告からは離れて、W3C のワーキンググループは 2003 年に SVG Tiny と SVG Basic を導入しました。これら 2 つのプロファイルは、主にモバイル端末を対象にしています。 SVG Tiny は、性能が低い小型端末向けに基本的な図形を提供します。 SVG Basic は完全な SVG が持つ機能の多くを提供しますが、実装が難しい機能や描画負荷の高い機能（アニメーションなど）は含みません。 2008 年に、 SVG Tiny 1.2 が W3C 勧告になりました。

過去には SVG 印刷の仕様の計画があり、これは複数のページや高度なカラーマネージメントの対応を追加する予定でした。この作業は中止になりました。

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}
