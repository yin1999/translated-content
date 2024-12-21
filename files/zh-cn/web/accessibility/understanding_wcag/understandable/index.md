---
title: 可理解性
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

本文提供了有关如何编写网页内容以符合 Web 内容无障碍指南（WCAG）2.0 和 2.1 中**可理解性**（understandable）原则的成功标准的实用建议。可理解性表明信息和用户界面的操作必须易于理解。

> [!NOTE]
> 要了解 W3C 对可理解性及其准则和成功标准的定义，请参阅[原则 3：可理解性 - 信息和用户界面操作必须是可理解的](https://www.w3.org/Translations/WCAG21-zh/#understandable)。

## 准则 3.1——可读性：使文本内容可读，可理解

该准则重点关注文本内容的可理解性。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">成功标准</th>
      <th scope="col">如何符合标准</th>
      <th scope="col">实用资源</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.1.1 网页语言（A）</td>
      <td>
        每个网页的默认人类语言可以编程式确定。这对于确保读者访问以适合他们的语言编写的页面等目的至关重要。实现这一目标的最简单方法是在页面的 {{htmlelement("html")}} 元素上设置 <a href="/zh-CN/docs/Web/HTML/Global_attributes#lang">lang</a> 属性，并为其赋予最能代表页面所写语言的语言代码值。
      </td>
      <td>
        参见<a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#为文档设定主语言"
          >为文档设定主语言</a
        >。
      </td>
    </tr>
    <tr>
      <td>3.1.2 局部语言（AA）</td>
      <td>
        <p>
          如果页面内容包含与主要语言不同的单词或短语，请使用包装术语的元素（例如，如果没有可用的语义元素，则使用 {{htmlelement("span")}}）上的
          <a href="/zh-CN/docs/Web/HTML/Global_attributes#lang">lang</a> 属性来为其设置适当的语言。
        </p>
        <p>
          你不需要为对于不同语言具有相同写法的单词或短语（例如专有名称、不属于特定语言的技术术语）设置不同的语言。
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 特殊单词（AAA）</td>
      <td>
        Where technical terms, jargon, or idioms/slang are used, definitions
        should be provided for such phrases/words. Your site should provide a
        glossary that contains definitions of such words/terms that you can then
        link to when they appear, or at the very least provide definitions
        somewhere in the surrounding text, or in a
        <a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#description_lists"
          >description list</a
        >
        at the bottom of the page.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 缩写（AAA）</td>
      <td>
        <p>
          Where abbreviations are used, you should provide an expansion of them,
          or a definition as required.
        </p>
        <p>
          The {{htmlelement("abbr")}} element is often thought of as
          the preferred way to provide an expansion for an abbreviation — it
          takes a <a href="/zh-CN/docs/Web/HTML/Global_attributes#title">title</a> attribute that contains the
          expansion, and this appears when the acronym is moused over. However,
          the title contents are not accessible via keyboard, nor are they
          reliably read out by screen readers. A better way to handle this is to
          again provide links to glossary pages containing the acronym expansion
          and explanation, or at the very least include them in the surrounding
          text in context.
        </p>
      </td>
      <td>
        See
        <a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations"
          >Abbreviations</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 阅读水平（AAA）</td>
      <td>
        <p>
          If text is provided that requires a higher reading level that lower
          secondary education level (typically children around 11-14 years old),
          provide supplementary explainer material to help people who can't read
          it, or provide an alternative version that is written at lower
          secondary level.
        </p>
        <p>
          This doesn't mean that all subject matter should be understood by
          everyone, but that the style of writing should be accessible by
          everyone. It is better to just write all content at lower secondary
          level, even technical documentation like programming tutorials, unless
          there is a good reason not to (e.g. an alternative style for poetic
          effect), or they have to be written in a strict style (e.g. W3C
          specs).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 发音（AAA）</td>
      <td>
        <p>
          A mechanism should be provided to give users access to pronunciation
          of words where they are is needed to understand the content fully.
        </p>
        <p>
          The HTML {{htmlelement("audio")}} element can be used to
          create a control that allows the reader to play back an audio file
          containing the correct pronunciation, and it also makes sense to
          include a textual pronunciation guide after difficult words, in the
          same way that you find in dictionary entries.
        </p>
      </td>
      <td>
        See
        <a
          href="/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content"
          >Video and audio content</a
        >, and
        <a
          href="http://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Pronunciation Guide for English Dictionary</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 3.1 Readable: Make text content readable and understandable](https://www.w3.org/TR/WCAG21/#readable).

## 准则 3.2——可预测性：让网页以可预见的方式呈现和操作

This guideline focuses on making user interfaces intuitive and understandable.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Success criteria</th>
      <th scope="col">How to conform to the criteria</th>
      <th scope="col">Practical resource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.2.1 焦点（A）</td>
      <td>
        <p>
          When a control or other page feature receives focus, it should not
          change the context in a way that may confuse or disorientate the user.
        </p>
        <p>
          This is a matter of sensible design — people don't want interfaces to
          surprise them; they want things to be intuitive and behave as
          expected. For example, focusing a navigation menu option should not
          change the displayed page — it should be activated before the display
          changes.
        </p>
      </td>
      <td>
        {{domxref("Element.focus_event")}} contains some
        useful information. Also see
        <a
          href="/zh-CN/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Building keyboard accessibility back in</a
        >
        for some useful implementation ideas.
      </td>
    </tr>
    <tr>
      <td>3.2.2 输入（A）</td>
      <td>
        <p>
          When data is inputted into a control, or a setting is changed, context
          should not be changed unexpectedly. The user should be warned/advised
          of the impending change before it occurs.
        </p>
        <p>
          Again, sensible design should be implemented. For example, if pressing
          a button causes the application to exit the current view, the user
          should be asked to confirm this action, save their work if
          appropriate, etc.
        </p>
      </td>
      <td>
        The {{domxref("Element/input_event", "input")}} event is useful here.
      </td>
    </tr>
    <tr>
      <td>3.2.3 一致性导航（AA）</td>
      <td>
        <p>
          Navigation menu/control style and positioning should be consistent
          between different pages or views of a web page, and the existing items
          should appear in the same order, even if for example new items are
          added. If the user has initiated a change, e.g. choosing a different
          color scheme or position for the navigation, their choice should be
          respected across all pages.
        </p>
        <p>
          Again, sensible design — make the navigation controls the same across
          all pages or views.
        </p>
      </td>
      <td>
        See
        <a href="/zh-CN/docs/Learn/Accessibility/HTML#page_layouts"
          >Page layouts</a
        >
        for information on modern markup for layouts. See also
        <a
          href="/zh-CN/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons"
          >Styling links as buttons</a
        >
        for a useful accessible navigation menu example.
      </td>
    </tr>
    <tr>
      <td>3.2.4 一致性标识（AA）</td>
      <td>
        <p>
          Controls or components that have the same functionality should be
          identified in the same way across different pages or views. A currency
          converter appearing on every page of a world travel site for example
          should be exactly the same, semantically and in terms of labels.
        </p>
        <p>Again, sensible design!</p>
      </td>
      <td>
        "Labels" can refer to descriptive information in text content, or HTML
        form labels. See
        <a href="/zh-CN/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Meaningful text labels</a
        >
        for more information.
      </td>
    </tr>
    <tr>
      <td>3.2.5 请求变化（AAA）</td>
      <td>
        <p>
          Changes in context that could possibly confuse or disorient users
          should only occur only when requested by the user, OR the user should
          be able to turn them off.
        </p>
        <p>
          If you need to have something that significantly changes the current
          view (e.g. content or controls), let the user control when they want
          that change to occur (e.g. what page to show, when to advance to the
          next photo in the gallery...)
        </p>
        <p>
          If you need to have something like a carousel on a page, provide an
          option to stop it automatically advancing. Better to avoid such
          functionality if possible.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 持续帮助（A）</td>
      <td> <p> Web pages that contain help mechanisms, including self-help options and human contact details, that are repeated on multiple web pages, need to place those mechanisms in the same order on all pages, unless a change is initiated by the user.</p>
      <td> <p> Check out the <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">consistent help documentation</a> for this standard to learn more. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways](https://www.w3.org/TR/WCAG21/#predictable).

## 准则 3.3——辅助输入：帮助用户避免和纠正错误

This guideline centers around helping users enter correct information when required with the minimum of mistakes.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Success criteria</th>
      <th scope="col">How to conform to the criteria</th>
      <th scope="col">Practical resource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.3.1 错误标识（A）</td>
      <td>
        <p>
          When a user is filling out a form or choosing between options, any
          error that is detected should be clearly reported to the user, along
          with the form control that the error relates to.
        </p>
        <p>
          It is advisable to implement client-side error detection and handling,
          via HTML form validation features, and/or JavaScript, whatever is
          best for your situation. When an error is detected, an intuitive error
          message should be shown next to the form input that is at fault to
          help the user correct their inputs. For screen reader users, you can
          use aria live regions to alert the user to a change on the page.
        </p>
        <div class="note">
          <p>
            <strong>备注</strong>：Server-side validation should *always* be
            used alongside client-side validation. Client-side validation is too
            easy to turn off or otherwise get around, so it can't be relied on
            alone.
          </p>
        </div>
      </td>
      <td>
        See
        <a href="/zh-CN/docs/Learn/Forms/Form_validation"
          >Form data validation</a
        >
        for comprehensive validation information, and
        <a
          href="/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamic content updates</a
        >
        for information on live regions.
      </td>
    </tr>
    <tr>
      <td>3.3.2 标签或说明（A）</td>
      <td>
        <p>
          Clear instructions should be provided when data input is required.
          When a simple instruction or prompt is required, you can use
          {{htmlelement("label")}} elements for single inputs like name
          or age, a combination or {{htmlelement("label")}}s and
          {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s
          for multiple inputs that go together (like the elements of a date of
          birth or postal address).
        </p>
        <p>
          When more complex explanation is required, you can always include
          explanatory paragraphs too, or maybe you need to try to make your
          forms more intuitive.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/zh-CN/docs/Learn/Accessibility/HTML#meaningful_text_labels"
              >Meaningful text labels</a
            >
          </li>
          <li>
            <a href="/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form"
              >How to structure an HTML form</a
            >
          </li>
          <li>
            <a
              href="/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names"
              >Text labels and names</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 错误建议（AA）</td>
      <td>
        <p>
          When an error is detected and suggestions for correction are known,
          provide these to the user (e.g. suggesting alternatives when the user
          is choosing a user name and has selected one that is already taken),
          unless doing so would cause a security issue (e.g. when entering a
          password) or context problem (e.g. they are trying to answer a
          question in a quiz app).
        </p>
        <p>
          In such cases, when this is appropriate, you'll probably use a
          combination of JavaScript and server-side functionality to check if
          the entry is correct, and if not, what viable suggestions can be given
          to the user. Such suggestions should be displayed usefully in context,
          just like error messages (see 3.3.1).
        </p>
      </td>
      <td>No tutorial suggestions yet.</td>
    </tr>
    <tr>
      <td>3.3.4 错误预防（法律、金融、数据）（AA）</td>
      <td>
        <p>
          In the case of forms involved with entry of sensitive data (such as
          legal agreements, e-commerce transactions, or personal data), at least
          one of the following should be true:
        </p>
        <ul>
          <li>Submissions are reversible.</li>
          <li>
            Data is checked for errors, and the user is given an opportunity to
            correct them.
          </li>
          <li>
            A mechanism is available for confirming and correcting information
            before final submission.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Reversible</strong> — for any view where data can be entered,
          provide an equivalent view that allows you to edit or even delete an
          entry, as appropriate (for example, see
          <a href="/zh-CN/docs/Learn/Server-side/Django">Django web framework</a
          >).
        </p>
        <p>
          <strong>Checking data</strong> — as covered in 3.3.1, a combination of
          client-side and server-side validation should be used to detect errors
          and display helpful messages to the user to allow them to correct
          their inputs.
        </p>
        <p>
          <strong>Confirm and correct</strong> — where appropriate, after
          filling in a series of form fields to perform a task (such as buying a
          product), the user should be shown a confirmation screen where they
          can review their inputs and correct anything that doesn't look right.
          This pattern is commonly used on e-commerce sites like Amazon.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 上下文相关的帮助是可用的（AAA）</td>
      <td>
        Provide instructions and other appropriate cues in context to aid form
        completion and submission.
      </td>
      <td>
        This really just builds on 3.3.1 and other similar criteria but requires
        more thorough contextual help information and services, e.g. providing a
        dedicated link to a help page or service on each page, providing
        examples showing what successful completion should look like.
      </td>
    </tr>
    <tr>
      <td>3.3.6 错误预防（全部）（AAA）</td>
      <td>
        This principle builds on 3.3.4, extending its requirements to all user
        input situations, not just ones involving sensitive data.
      </td>
      <td>Again, see 3.3.4.</td>
    </tr>
    <tr>
      <td>3.3.7 冗余条目（A）</td>
      <td>
        Information that is required that was previously entered or provided by the user in the same process or user flow is either auto-populated or made selectable to the user from a list of options, unless re-entering the information is essential or required for security reasons, or if the information is no longer valid.
      </td>
      <td>Check out <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Understanding redundant entry</a> to learn more.</td>
    </tr>
    <tr>
      <td>3.3.8 无障碍身份验证（最低）（AA）</td>
      <td>
        Cognitive function tests, like remembering a password, are not required for any step in an authentication process unless an alternative is provided, such as an object or personal content (e.g., images, videos, and audio) recognition, or a mechanism to assist (e.g., copy and paste and autosave passwords).
      </td>
      <td>Check out the <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum"> accessible authentication documentation</a> for this standard to learn more.</td>
    </tr>
    <tr>
      <td>3.3.9 无障碍身份验证（增强）（AAA）</td>
      <td>
        A cognitive function test, like remembering a password, must not be required for any step in an authentication process without providing an alternative that does not rely on a cognitive function test or provides a mechanism to assist the user in completing the cognitive function test. Authentication tests that require the user to recognize objects or identify non-text content the user provided to the website are allowed.
      </td>
      <td>Check out the <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">enhanced accessible authentication documentation (AAA)</a> to learn more.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 参见 WCAG 对[准则 3.3 辅助输入：帮助用户避免和纠正错误](https://www.w3.org/Translations/WCAG21-zh/#input-assistance)的描述。

## 参见

- [WCAG](/zh-CN/docs/Web/Accessibility/Understanding_WCAG)

  1. [可感知性](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [可操作性](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. 可理解性
  4. [鲁棒性](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Robust)
