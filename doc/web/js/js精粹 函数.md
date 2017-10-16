# 函数

作者说，js设计的最出色的地方就在函数，这也是作者着重笔墨描写的地方。



## 函数对象

- Javascript中**函数就是对象**，函数对象连接到`Function.prototype`上
- 和`Obejct`不一样，每个函数在创建时会附加上两个隐藏属性：`函数的上下文`和`函数行为的代码`
- 每个函数对象创建的时候，会有一个`prototype`属性，它是有用`constructor`属性**且值为该函数对象**。这和隐藏连接到`Function.prototype`完全不同。
- 函数是对象，所以它可以拥有**方法**
- 函数与众不同在于，可以被**调用**

## 函数字面量

- 函数字面量**可以出现在任何允许表达式出现的地方**
- 能**自由的访问**把它嵌套在其中的**父函数的参数与变量**（闭包基础）

## 调用

- 每个函数可以接收两个附加参数`this`和`arguments`

- this：取值取决于调用模式

### 方法调用
当函数是一个对象的属性时

this绑定到`当前对象`（比如提取操作）

### 函数调用模式

如果函数并非是一个对象的属性时，this绑定到`全局变量`

- 这是一个设计的巨大失误，如果在函数内部创建函数，它将得不到父函数的this
- 我们通常使用`that`来绑定`this`

### 构造器调用模式

如果函数之前加上`new`来调用，那背地会创建一个**连接到该函数**的`prototype`

this绑定到**新对象上**

- 构造器函数一般用**全大写**
- 如果构造器函数没用new，可能会产生巨大的问题！
- **不推荐使用这种方式**


### Apply调用模式

允许我们选择this的值

```
apply(this,array)
```

apply第一个参数传入的就是`this`的值（可以为null，就为函数调用模式）

第二个参数是`参数数组`



## 参数

- js对参数**不会进行任何的类型检查**，任何类型的值都可以被传给任何参数
- js允许`实参`和`形参`**数目不一致**，多了被忽略，少了`为undefined`



### arguments

函数自带了一个参数arguments，保存所有的参数。

- 它**不是真正数组**，没有`Array`的方法！！
- 它有`length`，可以用`[]`取值



## 返回

- 一个函数总会返回一个值，如果没有，就返回`undefined`


- 可以返回`this`，以便链式调用（json）



## 异常

### throw

抛出异常，它是一个`exception`对象，包含`name`和`message`属性（也可以添加其他属性）

```javascript
throw {
	name: 'TypeError',
	message: 'add needs nunbers'
};

```

### try catch

对于抛出异常的函数，可以用try catch捕捉异常

```javascript
try {
  add('sevent');
} catch(e){
  document.writeln(e.name + ': ' + e.message);
}
```



## 扩充类型

js允许给基本类型进行扩充，可以**极大的提高语言的表现力**

- 我们可以给`Function.prototype`增加`method`方法，**用来扩充基本类型**

  ```javascript
  Function.prototype.method = function (name,func){
    this.prototype[name] = func;
    return this;
  }
  ```

  因为**原型是公用结构**，为了避免覆盖之前的方法，保险做法是在确定该方法没有的情况再添加。

```javascript
Function.prototype.method = function (name,func){
	if(!this.prototype[name]){
      this.prototype[name] = func;
    }
  return this;
}
```

比如给函数增加**取整方法**：(根据数字的正负判断使用Math.ceiling还是Math.floor)

```javascript
Number.method('integer',function(){
  return Math[this < 0: 'ceil':'floor'](this);
});
```



## 递归

javascript**没有提供尾递归优化**！



## 作用域

之前说过，javascript**没有提供块级作用域**

所以，**延迟声明变量**对于js来说是一个**糟糕的建议**

（js有变量提升的特点

## 闭包

- 闭包可以实现**变量私有化**

```javascript
var myObejct = (function(){
  var value = 0;
  return {
    increment : function (inc){
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function (){
      return value;
    }
  };
}());
```

注意最后的`()`，这里，value就对外不可见，只能通过`increment`和`getValue`来访问

- 闭包内部函数拥有比外部函数更长的生命周期


- 闭包**切忌在闭包内创建函数！**，如果要使用，可以先构造辅助函数绑定变量值
- ​
