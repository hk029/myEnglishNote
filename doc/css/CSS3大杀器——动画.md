# CSS3大杀器——动画



## 基本变化

一个动画的基本元素是：变化效果+过渡时间。所以理论上满足这两个条件就能做出动画。

**transition-duration** : 过渡时间（s）

**transition-delay** : 延迟（s）

**transition-timing-function**: 到时间的处理函数

常用的

| 函数                       | 功能         | 贝赛尔                                |
| ------------------------ | ---------- | ---------------------------------- |
| ease                     | 默认，两端慢，中间快 | cubic-bezier(0.25, 0.1, 0.25, 1.0) |
| linear                   | 线性         | cubic-bezier(0.0, 0.0, 1.0, 1.0)   |
| ease-in                  | 渐显，速度越来越快  | cubic-bezier(0.42, 0, 1.0, 1.0)    |
| ease-out                 | 渐隐，速度越来越慢  | cubic-bezier(0, 0, 0.58, 1.0       |
| ease-in-out              | 两端慢，中间快    | cubic-bezier(0.42, 0, 0.58, 1.0)   |
| cubic-bezier(a, b, c, d) | 自定义        |                                    |
​    

推荐一个网站去查看各种贝塞尔曲线的效果http://yisibl.github.io/cubic-bezier/



**transition-property** : 需要修改的动画特性（大小，颜色，字体，边框……基本就是所有的css属性）

![img](http://img.mukewang.com/5344eca300010a8005510421.jpg)

### 简化形式

要写这么多属性，累死了，有没有简化形式，当然是有的，就是`transition`

```css
transition: property [funtion] duration [delay]
transition: border-radius ease 1s .2s;
```

## 逐帧动画

如果上面的不能满足你的要求，那么你可以自己定制自己的动画效果。比如说我想让图形从红变黄变蓝变绿可以实现吗？当然可以的这里就引入关键帧技术：



`Keyframes`被称为**关键帧**，其类似于Flash中的关键帧。在CSS3中其主要以“`@keyframes`”开头，后面紧跟着是动画名称加上一对花括号“{…}”，括号中就是一些不同时间段样式规则。

```css
@keyframes changecolor{
  0%{
   background: red;
  }
  100%{
    background: green;
  }
}
```

在每个“@keyframes”中的样式规则可以由多个百分比构成的，如在“0%”到“100%”之间创建更多个百分比，分别给每个百分比中给需要有动画效果的元素加上不同的样式，从而达到一种在不断变化的效果。（注：如果只是0%和100%可以用from和to代替）

```css
@keyframes changecolor{
  0%{
   background: red;
  }
   40%{
   background: yellow;
  }
   70%{
   background: blue;
  }
  100%{
    background: green;
  }
}
```



### 使用关键帧

这里要用`animation-`,基本用法和`transition-`一样，只是这里要用`animation-name`指定变化的关键帧。当然，还是有一些不一样的地方比如：

### 播放次数

animation可以通过`animation-iteration-count`设置动画播放的次数！这是与transition很不同的地方。默认是1，设置为**infinite**可以实现动画的**无限播放!!**，可以用来实现一些**循环播放的动画**



### 播放方向

`animation-direction` 属性定义是否应该轮流反向播放动画。默认是**normal**。

如果 animation-direction 值是 "**alternate**"，则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）向后播放。

**注**：如果把动画设置为只播放一次，则该属性没有效果。



### 播放状态

`animation-play-state`属性主要用来控制元素动画的**播放状态**。这也是一个实用的属性，等于是给了动画一个**暂停**功能。它有两个属性`paused`和`running`，paused的时候，动画会停止，当属性改成running的时候，会从当前状态**继续**播放，可以配合`:hover`来实现**鼠标移动到动画上动画才继续的效果**。



### 时间外属性

`animation-fill-mode`属性定义在动画开始之前和结束之后发生的操作。主要具有四个属性值：**none、forwards、backwords**和**both**。其四个属性值对应效果如下：

| 属性值       | 效果                                       |
| --------- | ---------------------------------------- |
| none      | 默认值，表示动画将按预期进行和结束，在动画完成其最后一帧时，动画会反转到初始帧处 |
| forwards  | 表示动画在结束后继续应用最后的关键帧的位置，**不回初始帧**          |
| backwards | 会在向元素应用动画样式时迅速应用动画的初始帧，**直接从第一帧开始**      |
| both      | 元素动画同时具有forwards和backwards效果             |

注：这里的backwards可能不好理解，如果一个动画时间短可能看不出区别，但是如果时间很长，就会发现区别了，如果一个黑色的方块其第一帧是红色，设置了backwards就会直接从红色开始。不然会先有本色（黑）的显示。

## 其他

要想真正发挥css3动画的威力，是需要把**动画**和之前的**变化**一起使用！！可以把`transform`加入关键帧，实现旋转，移动，缩放等特效。



**注意：做一个圆角变换的时候要注意border-radius的取值。**

理论上圆的border-radius: 为50%就行了。因为正方形四个角都以边长的一半去倒角即是圆形。也就是说写成51% 以上都是都是圆形，跟50%的效果是相同的。动画是从圆变成方，即倒角由50%减到0。如果写成border-radius: 100%; 那么动画是由100%减到0, 而100%先减到50%，需要0.5秒（动画时间1秒+延迟0.2秒 ），这段过程圆没变化，50%减到0，圆变成方，需要0.5秒。这样延迟就显得很长，动画变得很快，让人感觉很不舒服。

改为 border-radius: 50%;  那么动画是由50%减到0, 动画时间1秒，0.2秒的延迟，这样就好多啦！











