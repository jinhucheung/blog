
## <a name="ch1">概述</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>

### <a name="ch1.1">宗旨</a>
Markdown的目标是实现「易读易写」。

可读性，无论如何，都是最重要的。一份使用Markdown格式撰写的文件应该可以直接以纯文本发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括[Setext](http://docutils.sourceforge.net/mirror/setext.html),[atx](http://www.aaronsw.com/2002/atx/),[Textile](http://textism.com/tools/textile/),[reStructuredText](http://docutils.sourceforge.net/rst.html),[Grutatext](http://www.triptico.com/software/grutatxt.html)和[EtText](http://ettext.taint.org/doc/),而最大灵感来源其实是纯文本电子邮件的格式。

总之， Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

### <a name="ch1.2">兼容HTML</a>
Markdown 语法的目标是：成为一种适用于网络的**书写**语言。

Markdown 不是想要取代 HTML，甚至也没有要和它相近，它的语法种类很少，只对应 HTML 标记的一小部分。Markdown 的构想**不是**要使得 HTML 文档更容易书写。在我看来， HTML 已经很容易写了。Markdown 的理念是，能让文档更容易读、写和随意改。HTML 是一种**发布**的格式，Markdown 是一种**书写**的格式。就这样，Markdown 的格式语法只涵盖纯文本可以涵盖的范围。

不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。不需要额外标注这是 HTML 或是Markdown；只要直接加标签就可以了。

要注意的只有一些 HTML 区块元素――比如 \<div>、\<table>、\<pre>、\<p> 等标签，必须在前后加上空行与其它内容区隔开，还要求它们的开始标签与结尾标签不能用制表符或空格来缩进。Markdown 的生成器有足够智能，不会在 HTML 区块标签外加上不必要的 \<p> 标签。

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


<a>你好</a>
