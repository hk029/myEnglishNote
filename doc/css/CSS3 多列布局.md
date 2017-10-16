# CSS3 多列布局

## columns

为了能在Web页面中方便实现类似报纸、杂志那种多列排版的布局，W3C特意给CSS3增加了一个**多列布局模块**（CSS Multi Column Layout Module）。它主要应用在文本的**多列布局**方面，这种布局在报纸和杂志上都使用了几十年了，但要在Web页面上实现这样的效果还是有相当大的难度，庆幸的是，CSS3的多列布局可以轻松实现。

### 用法

```css
columns：<column-width> || <column-count>
```

举例：要显示2栏显示，每栏宽度为200px，代码为：

```css
columns: 200px 2;
```



当然，你也可以分开控制，如果只设置一个，则一个有其他属性来自动设置。

```css
column-width：auto | <length>
```

```css
column-count：auto | <integer>
```

![img](http://img.mukewang.com/5360c4c70001336f04870257.jpg)



### 列间距

column-gap主要用来设置列与列之间的**间距**，默值为1em（如果你的字号是px，其默认值为你的font-size值）

```css
column-gap: normal || <length>
```

### 列边框

column-rule主要是用来定义列与列之间的**边框宽度、边框样式**和**边框颜色**。简单点说，就有点类似于常用的border属性。但column-rule是**不占用任何空间位置**的，在列与列之间改变其宽度不会改变任何列的位置。**这个列边框特别好，不用再像以前用浮动一样，还得把第一个或最后一个的边框样式清除**



```
column-rule:<column-rule-width>|<column-rule-style>|<column-rule-color>
```

取值说明：

| 属性值               | 属性值说明                                    |
| ----------------- | ---------------------------------------- |
| column-rule-width | 类似于border-width属性，主要用来定义列边框的宽度，其默认值为“medium”，column-rule-width属性接受任意浮点数，但不接收负值。但也像border-width属性一样，可以使用关键词：medium、thick和thin。 |
| column-rule-style | 类似于border-style属性，主要用来定义列边框样式，其默认值为“none”。column-rule-style属性值与border-style属值相同，包括none、hidden、dotted、dashed、solid、double、groove、ridge、inset、outset。 |
| column-rule-color | 类似于border-color属性，主要用来定义列边框颜色，其默认值为前景色color的值，使用时相当于border-color。column-rule-color接受所有的颜色。如果不希望显示颜色，也可以将其设置为transparent(透明色) |



![your text](http://o7bk1ffzo.bkt.clouddn.com/1487510581165)



### 跨列显示

有时候，我们需要对某些元素进行跨列操作（比如标题），那么可以用这个轻松实现

```css
column-span: none | all
```

all表示横跨所有列。



![your text](http://o7bk1ffzo.bkt.clouddn.com/1487510801470)



