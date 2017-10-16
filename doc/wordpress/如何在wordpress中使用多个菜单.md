# 如何在wordpress中使用多个菜单



很多人都知道在wordpress中基本上只有一个主菜单可以用，

![your text](http://o7bk1ffzo.bkt.clouddn.com/1482060458496)



但是一个菜单经常满足不了我们的需要，我们渴望能在不同的页面出现不同的菜单内容，可以怎么做呢？



## 打开Fucntions.php

在functions.php中添加如下的语句

```php
register_nav_menus(array( 'primary' =>'Primary'));
```

其中，primary可以自己任意修改，只要不和其他变量重复即可；Primary Navigation是菜单名称，可以自己随便修改（最好是英文字符）。

利用上面函数可以给wordpress添加多个自定义导航菜单，比如：

```php
register_nav_menus( array(
		'primary' => esc_html__( 'Primary'),
        'secondary' => esc_html__('Secondary')
));
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1482060984596)



## 使用

在需要使用的地方输入

```php
<php? wp_nav_menu(array( 'theme_location' =>'secondary')); //调用第二个菜单 ?>
```

就可以调用特定的菜单了