# CSS3大杀器——变形

css3我觉得最有用的地方在于变形和动画，这里先讲一讲它的变形。

变形主要有以下几种

- 旋转rotate()

- 扭曲skew()

- 缩放scale()

- 位移translate()

- 矩阵matrix()

- 原点transform-origin

  ​

## 正确变形的方法

```css
  -webkit-transform: ?;
  -moz-transform: ?;
  transform:?;
```

## 旋转rotate(Xdeg)

顾名思义就是可以把图形进行一定的旋转，`X`代表角度：

- `X>0` 为顺时针旋转
- `X<0`为逆时针旋转
- **注意：**内联元素要转块级元素才能旋转


### 代码

html:

```html
<div class="wrapper">
 <div><span>我没旋转</span></div>
</div>
```

  

css:

```css
.wrapper {
  margin: 100px auto;
  width:  200px;
  height: 200px;
  border: 2px dashed blue;
}

.wrapper div{
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: #f60;
  color: #fff;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform:rotate(-20deg);
}
.wrapper span {
  display:block;
 -webkit-transform: rotate(20deg);
 -moz-transform: rotate(20deg);
  transform:rotate(20deg);
 }
```



### 效果

  ![your text](http://o7bk1ffzo.bkt.clouddn.com/1486992964931)



## 扭曲skew()

skew的基本形态是skew(x,y)单位是deg，如果只填一个参数，默认y=0

**skew()具有三种情况：**

1、`skew(30deg,10deg)`使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值进行扭曲变形）；

![img](http://img.mukewang.com/533913260001d2d003590222.jpg)

第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则值为0，也就是Y轴方向上无斜切。

2、`skewX(30deg)`仅使元素在水平方向扭曲变形（X轴扭曲变形）；

![img](http://img.mukewang.com/533913750001e21603680209.jpg)

3、`skewY(10deg)`仅使元素在垂直方向扭曲变形（Y轴扭曲变形）

![img](http://img.mukewang.com/533913920001d78d03670208.jpg)





## 缩放

缩放主要是缩放的倍数关系，所以scale(x,y)没有单位，直接是倍数

缩放 scale 具有三种情况：

1、 `scale(X,Y)`使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）

![img](http://img.mukewang.com/53391aff000181f703520211.jpg)

例如：

```
div:hover {
  -webkit-transform: scale(1.5,0.5);
  -moz-transform:scale(1.5,0.5)
  transform: scale(1.5,0.5);
}

```

**注意**：Y是一个可选参数，如果没有设置Y值，则表示X，Y两个方向的缩放倍数是一样的。

2、`scaleX(x)`元素仅水平方向缩放（X轴缩放）

![img](http://img.mukewang.com/53391b0b00016a7002920170.jpg)

3、`scaleY(y)`元素仅垂直方向缩放（Y轴缩放）

![img](http://img.mukewang.com/53391b14000169cf03280183.jpg)



## 位移 translate()

**translate()函数**可以将元素向指定的方向移动，类似于position中的**relative**。或以简单的理解为，使用translate()函数，可以把元素从原来的位置移动，而不影响在X、Y轴上的任何Web组件。

**translate我们分为三种情况：**

1、`translate(x,y)`水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）

![img](http://img.mukewang.com/53391c640001709503850257.jpg)

2、`translateX(x)`仅水平方向移动（X轴移动）

![img](http://img.mukewang.com/53391c920001420703810201.jpg)

3、`translateY(Y)`仅垂直方向移动（Y轴移动）

![img](http://img.mukewang.com/53391ca70001da5e03570211.jpg)



## 矩阵 matrix()

**matrix() **是一个含六个值的(a,b,c,d,e,f)变换矩阵，用来指定一个2D变换，相当于直接应用一个[a b c d e f]变换矩阵。基本就是上面所学内容的汇总，这里把abcdef翻译一下大家就能看懂了：

`matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())`

不过这里要注意的是，这里的skewY和skewX的参数不是角度了，而是cos的值



html:

```html
<div class="wrapper">
  <div></div>
```

css:

```css
.wrapper {
  width: 300px;
  height: 200px;
  border: 2px dotted red;
  margin: 40px auto;
}

.wrapper div {
  width:300px;
  height: 200px;
  background: orange;
  -webkit-transform: matrix(1,20,20,1,100,100);
  transform: matrix(0.5,0.5,1,0.5,100,100);
}
```



## 效果

![your text](http://o7bk1ffzo.bkt.clouddn.com/1486994712603)



## 原点 transform-origin

任何一个元素都有一个中心点，默认情况之下，其中心点是居于元素X轴和Y轴的50%处。如下图所示：

![img](http://img.mukewang.com/53391e740001b03d03330333.jpg)

在没有重置transform-origin改变元素原点位置的情况下，CSS变形进行的旋转、位移、缩放，扭曲等操作都是**以元素自己中心位置进行变形**。



但很多时候，我们可以通过**transform-origin**来对元素进行原点位置改变，使元素原点不在元素的中心位置，以达到需要的原点位置。

transform-origin取值和元素设置背景中的background-position取值类似，如下表所示：

![img](http://img.mukewang.com/53391ea500013e4706860384.jpg)



### 代码

我们还是旋转一个方形，不过这次把原点移动到左上角

html:

```html
<div class="wrapper">
  <div>我修改原点之后在进行45度的旋转</div>
```



css:

```css
.wrapper {
  width: 300px;
  height: 300px;
  float: right;
  margin: 100px;
  border: 2px dotted red;
  line-height: 300px;
  text-align: center;
}
.wrapper div {
  background: orange;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wrapper div {
  -webkit-transform-origin: left top;
  transform-origin: left top;
}
```



## 效果

![your text](http://o7bk1ffzo.bkt.clouddn.com/1486995085271)