# htm5 新表单

通过学习本章这个简单应用实例可以学到以下内容:

- 如何利用data-*属性把数据绑定到新的HTML元素上
- 如何通过一约束验证API特性创建自定义的验证测试





订单四个部分：

- 联系方式细节
- 登录细节
- 支付细节
- 订单细节



表单输入类型：email和tel

虽然看上去他们和普通的文本输入一样，但是当使用手机的时候，他们会出现不同的虚拟键盘，而且对于输入错误，并且会有不同的错误提示





输入属性：

autofocus : 加载的时候自动获取焦点

required： 要求必须要有输入

placeholder : 为空的时候显示文本



这里，我们让Address部分出现使用占位符，来提示用户输入的信息

号码部分使用tel类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script src="modernizr.js"></script>
</head>
<body>
     <form name="order" method="post" action="/submit">
         <h1>Order Form</h1>
         <fieldset>
             <legend>Contact Details</legend>
             <ul>
                 <li>
                     <label class="required">
                         <div>Full Name</div>
                         <input name="name" required autofocus>
                     </label>
                 </li>
                 <li>
                     <label class="required">
                         <div>Email Address</div>
                         <input type="email" name="email" required>
                     </label>
                 </li>
                 <li>
                     <label>
                         <div>Postal Address</div>
                         <input name="address1" placeholder="Address Line 1">
                     </label>
                     <div>&nbsp;</div>
                     <input name="address2" placeholder="Address Line 2">
                     <div>&nbsp;</div>
                     <input name="city" class="city" placeholder="Town/City">
                     <input name="state" class="state" placeholder="State">
                     <input name="zip" class="zip" placeholder="Zip Code">
                     <div>&nbsp;</div>
                     <select name="country">
                         <option value="0">Country</option>
                         <option value="US">United States</option>
                         <option value="CA">Canada</option>
                     </select>
                 </li>
                 <li>
                     <label>
                         <div>Home Phone No.</div>
                         <input type="tel" name="homephone">
                     </label>
                 </li>
                 <li>
                     <label>
                         <div>Cell Phone No.</div>
                         <input type="tel" name="cellphone">
                     </label>
                 </li>
                 <li>
                     <label>
                         <div>Skype Name</div>
                         <input name="skype">
                     </label>
                 </li>
                 <li>
                     <label>
                         <div>Twitter</div>
                         <span class="twitter_prefix">@</span>
                         <input name="twitter" class="twitter">
                     </label>
                 </li>
             </ul>
         </fieldset>
         <div class="buttons">
             <input type="submit" value="Submit Order">
             <input type="submit" id="saveOrder" value="Save Order">
         </div>

     </form>

</body>
</html>
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1480584161144)







### 订单详情

主要使用：number

属性：min,max,data-*

计算元素：`<output>`



`data-*`　：能根据用户的输入，轻松算出结果



　 

pattern： 指定一个正则表达式模式来测试字段内输入结果

title : 用来提示所需要的数据格式



novalidate ： 强制整个表