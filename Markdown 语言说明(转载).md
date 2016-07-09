## <a name="index">Index</a>


## <a name="ch1">概述</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>

### <a name="ch1.1">宗旨</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
Markdown的目标是实现「易读易写」。

可读性，无论如何，都是最重要的。一份使用Markdown格式撰写的文件应该可以直接以纯文本发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括[Setext](http://docutils.sourceforge.net/mirror/setext.html),[atx](http://www.aaronsw.com/2002/atx/),[Textile](http://textism.com/tools/textile/),[reStructuredText](http://docutils.sourceforge.net/rst.html),[Grutatext](http://www.triptico.com/software/grutatxt.html)和[EtText](http://ettext.taint.org/doc/),而最大灵感来源其实是纯文本电子邮件的格式。

总之， Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

### <a name="ch1.2">兼容HTML</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
Markdown 语法的目标是：成为一种适用于网络的**书写**语言。

Markdown 不是想要取代 HTML，甚至也没有要和它相近，它的语法种类很少，只对应 HTML 标记的一小部分。Markdown 的构想**不是**要使得 HTML 文档更容易书写。在我看来， HTML 已经很容易写了。Markdown 的理念是，能让文档更容易读、写和随意改。HTML 是一种**发布**的格式，Markdown 是一种**书写**的格式。就这样，Markdown 的格式语法只涵盖纯文本可以涵盖的范围。

不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。不需要额外标注这是 HTML 或是Markdown；只要直接加标签就可以了。

要注意的只有一些 HTML 区块元素――比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行与其它内容区隔开，还要求它们的开始标签与结尾标签不能用制表符或空格来缩进。Markdown 的生成器有足够智能，不会在 HTML 区块标签外加上不必要的 `<p>` 标签。

例子如下，在 Markdown 文件里加上一段 HTML 表格：
```
这是一个普通段落。

<table>
    <tr>
        <td>Foo</td>
   </tr>
</table>

这是另一个普通段落。
```
请注意，在 HTML 区块标签间的 Markdown 格式语法将不会被处理。比如，你在 HTML 区块内使用 Markdown 样式的`*强调*`会没有效果。

HTML 的区段（行内）标签如 `<span>`、`<cite>`、`<del> `可以在 Markdown 的段落、列表或是标题里随意使用。依照个人习惯，甚至可以不用 Markdown 格式，而直接采用 HTML 标签来格式化。举例说明：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图像标签语法。

和处在 HTML 区块标签间不同，Markdown 语法在 HTML 区段标签间是有效的。

### <a name="ch1.3">特殊字符自动转换</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&` 。 < 符号用于起始标签，& 符号则用于标记 HTML 实体，如果你只是想要显示这些字符的原型，你必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。

`&` 字符尤其让网络文档编写者受折磨，如果你要打「`AT&T`」 ，你必须要写成「`AT&amp;T`」。而网址中的 `&` 字符也要转换。比如你要链接到：

```
http://images.google.com/images?num=30&q=larry+bird
```

你必须要把网址转换写为：
```
http://images.google.com/images?num=30&amp;q=larry+bird
```
才能放到链接标签的 `href` 属性里。不用说也知道这很容易忽略，这也可能是 HTML 标准检验所检查到的错误中，数量最多的。

Markdown 让你可以自然地书写字符，需要转换的由它来处理好了。如果你使用的 `&` 字符是 HTML 字符实体的一部分，它会保留原状，否则它会被转换成 `&amp;`。

所以你如果要在文档中插入一个版权符号<code>&copy;</code>,你可以这样写：
```
&copy;
```
Markdown 会保留它不动。而若你写：
```
AT&T
```
Markdown 就会将它转为：
```
AT&amp;T
```
类似的状况也会发生在 `< `符号上，因为 Markdown 允许 [兼容 HTML](#ch1.2) ，如果你是把` < `符号作为 HTML 标签的定界符使用，那 Markdown 也不会对它做任何转换，但是如果你写：
```
4<5
```
Markdown 将会把它转换为：
```
4 &lt; 5
```
不过需要注意的是，code 范围内，不论是行内还是区块， `<` 和 `& `两个符号都**一定**会被转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML code （和 HTML 相对而言， HTML 语法中，你要把所有的 `<` 和 `&` 都转换为 HTML 实体，才能在 HTML 文件里面写出 HTML code。）

---------------------------------------


## <a name="ch2">区块元素</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a> 

### <a name="ch2.1">段落和换行</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。

「由一个或多个连续的文本行组成」这句话其实暗示了 Markdown 允许段落内的强迫换行（插入换行符），这个特性和其他大部分的 text-to-HTML 格式不一样（包括 Movable Type 的「Convert Line Breaks」选项），其它的格式会把每个换行符都转成 `<br />` 标签。

如果你**确实**想要依赖 Markdown 来插入 `<br />` 标签的话，在插入处先按入两个以上的空格然后回车。

的确，需要多费点事（多加空格）来产生 `<br />` ，但是简单地「每个换行都转换为 `<br />`」的方法在 Markdown 中并不适合， Markdown 中 email 式的 [区块引用](#ch2.3) 和多段落的 [列表](#ch2.4) 在使用换行来排版的时候，不但更好用，还更方便阅读。

### <a name="ch2.2">标题</a> <a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
Markdown 支持两种标题的语法，类 [Setext](http://docutils.sourceforge.net/mirror/setext.html) 和类 [atx](http://www.aaronsw.com/2002/atx/) 形式。
类 Setext 形式是用底线的形式，利用 `=` （最高阶标题）和 `-` （第二阶标题），例如：
```
This is an H1
=============

This is an H2
-------------
```
任何数量的 `=` 和 `-` 都可以有效果。

类 Atx 形式则是在行首插入 1 到 6 个 `#` ，对应到标题 1 到 6 阶，例如：
```
# 这是 H1

## 这是 H2

###### 这是 H6
```
你可以选择性地「闭合」类 atx 样式的标题，这纯粹只是美观用的，若是觉得这样看起来比较舒适，你就可以在行尾加上 `#`，而行尾的 `#` 数量也不用和开头一样（行首的井字符数量决定标题的阶数）：
```
# 这是 H1 #

## 这是 H2 ##

### 这是 H3 ######
```

### <a name="ch2.3">区块引用 Blockquotes</a> <a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
Markdown 标记区块引用是使用类似 email 中用 `>` 的引用方式。如果你还熟悉在 email 信件中的引言部分，你就知道怎么在 Markdown 文件中建立一个区块引用，那会看起来像是你自己先断好行，然后在每行的最前面加上 `>` ：
```
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```
Markdown 也允许你偷懒只在整个段落的第一行最前面加上 > ：
```
>his is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
```
区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的 `>` ：
```
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```
引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：
```
> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");
```
任何像样的文本编辑器都能轻松地建立 email 型的引用。例如在 BBEdit 中，你可以选取文字后然后从选单中选择**增加引用阶层**。

### <a name="ch2.4">列表</a> <a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
Markdown 支持有序列表和无序列表。

无序列表使用星号、加号或是减号作为列表标记：
```
*   Red
*   Green
*   Blue
```
等同于:
```
+   Red
+   Green
+   Blue
```
也等同于:
```
-   Red
-   Green
-   Blue
```
有序列表则使用数字接着一个英文句点：
```
1. Bird
2. McHale
3. Parish
```
很重要的一点是，你在列表标记上使用的数字并不会影响输出的 HTML 结果，上面的列表所产生的 HTML 标记为：
```
<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
```
如果你的列表标记写成：
```
1.  Bird
1.  McHale
1.  Parish
```
或甚至是：
```
3. Bird
1. McHale
8. Parish
```
你都会得到完全相同的 HTML 输出。重点在于，你可以让 Markdown 文件的列表数字和输出的结果相同，或是你懒一点，你可以完全不用在意数字的正确性。

如果你使用懒惰的写法，建议第一个项目最好还是从 1. 开始，因为 Markdown 未来可能会支持有序列表的 start 属性。

列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。

要让列表看起来更漂亮，你可以把内容用固定的缩进整理好：
```
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.
```
但是如果你懒，那也行：
```
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
```
如果列表项目间用空行分开，在输出 HTML 时 Markdown 就会将项目内容用 <p> 标签包起来，举例来说：
```
*   Bird
*   Magic
```
会被转换为：
```
<ul>
<li>Bird</li>
<li>Magic</li>
</ul>
```
但是这个：
```
*   Bird

*   Magic
```
会被转换为：
```
<ul>
<li><p>Bird</p></li>
<li><p>Magic</p></li>
</ul>
```
列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空格或是 1 个制表符：
```
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```
如果你每行都有缩进，看起来会看好很多，当然，再次地，如果你很懒惰，Markdown 也允许：
```
*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.
```
如果要在列表项目内放进引用，那 `>`就需要缩进：
```
*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
```
如果要放代码区块的话，该区块就需要缩进**两次**，也就是 8 个空格或是 2 个制表符：
```
*   一列表项包含一个列表区块：
        <代码写在这>
```
当然，项目列表很可能会不小心产生，像是下面这样的写法：
```
1986. What a great season.
```
换句话说，也就是在行首出现**数字-句点-空白**，要避免这样的状况，你可以在句点前面加上反斜杠。
```
1986\. What a great season.
```

### <a name="ch2.5">代码区块</a> <a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
和程序相关的写作或是标签语言原始码通常会有已经排版好的代码区块，通常这些区块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 `<pre>` 和 `<code>` 标签来把代码区块包起来。

要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以，例如，下面的输入：
```
这是一个普通段落：

    这是一个代码区块。
```
Markdown 会转换成：
```
<p>这是一个普通段落：</p>

<pre><code>这是一个代码区块。
</code></pre>
```
这个每行一阶的缩进（4 个空格或是 1 个制表符），都会被移除，例如
```
Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell
```
会被转换为：
```
<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
    beep
end tell
</code></pre>
```
一个代码区块会一直持续到没有缩进的那一行（或是文件结尾）。
在代码区块里面， `&` 、 `<` 和 `>` 会自动转成 HTML 实体，这样的方式让你非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制贴上，再加上缩进就可以了，剩下的 Markdown 都会帮你处理，例如：
```
<div class="footer">
        &copy; 2004 Foo Corporation
    </div>
```
会被转换为：
```
<pre><code>&lt;div class="footer"&gt;
    &amp;copy; 2004 Foo Corporation
&lt;/div&gt;
</code></pre>
```
代码区块中，一般的 Markdown 语法不会被转换，像是星号便只是星号，这表示你可以很容易地以 Markdown 语法撰写 Markdown 语法相关的文件。

### <a name="ch2.6">分隔线</a> <a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
```
* * *

***

*****

- - -

---------------------------------------
```

---------------------------------------


