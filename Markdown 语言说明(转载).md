
## <a name="ch1">概述</a><a style="float:right;text-decoration:none;" href="#index"> [TOP] </a>

### <a name="ch1.1">宗旨</a>
Markdown的目标是实现「易读易写」。

可读性，无论如何，都是最重要的。一份使用Markdown格式撰写的文件应该可以直接以纯文本发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括[Setext](http://docutils.sourceforge.net/mirror/setext.html),[atx](http://www.aaronsw.com/2002/atx/),[Textile](http://textism.com/tools/textile/),[reStructuredText](http://docutils.sourceforge.net/rst.html),[Grutatext](http://www.triptico.com/software/grutatxt.html)和[EtText](http://ettext.taint.org/doc/),而最大灵感来源其实是纯文本电子邮件的格式。

总之， Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

### <a name="ch1.2">兼容HTML</a>
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

### <a name="ch1.3">特殊字符自动转换</a>
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

<hr/>

