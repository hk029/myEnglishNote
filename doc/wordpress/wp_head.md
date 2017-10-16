# WP_head

## WP_head()

很多人在header.php都会看到这个函数，这个函数是wordpress默认的添加\<head>内容的函数。很多插件主题都会通过这个函数在\<head>里面增加内容。

## 增加内容

一般来说你可以通过`add_action`函数来增加内容，比如你有写了个函数`customizer_css`，增加自己的css样式。

```php
add_action('wp_head', 'customizer_css');
```

## 删除内容

我们可以使用`remove_action`函数

```php
remove_action( $tag, $function_to_add, $priority, $accepted_args );
```


>该函数移除一个附属于指定动作hook的函数。该方法可用来移除附属于特定动作hook的默认函数，并可能用其它函数取而代之。
>
>
>
>**注意**：添加hook时的$function_to_remove 和$priority参数要能够相匹配，这样才可以移除hook。该原则也适用于过滤器和动作。移除失败时不进行警告提示。 
>
>
>
>**参数** 
>
>\$tag（字符串）（必需）将要被删除的函数所连接到的动作hook。默认值：None
>\$function_to_remove（回调）（必需） 将要被删除函数的名称默认值：None
>\$priority（整数）（可选）函数优先级（在函数最初连接时定义）默认值：10
>\$accepted_args（整数）（必需）函数所接受参数的数量。默认值：1
>
>
>
>
>**返回值**
>
>（布尔值）函数是否被移除。 
>
>Ttue 函数被成功移除
>False函数未被移除



有时候你的\<head>中会有很多不用的内容，我们可以去可以通过/wp-include/default-filter.php查看wp-head包含的函数：

![your text](http://o7bk1ffzo.bkt.clouddn.com/1482290423151)

然后在自己的function.php中删除你不需要的。

```php
//remove_action( ‘wp_head’, ‘wp_enqueue_scripts’, 1 );   
remove_action( ‘wp_head’, ‘feed_links’, 2 );   
remove_action( ‘wp_head’, ‘feed_links_extra’, 3 );   
remove_action( ‘wp_head’, ‘rsd_link’ );   
remove_action( ‘wp_head’, ‘wlwmanifest_link’ );   
remove_action( ‘wp_head’, ‘index_rel_link’ );   
remove_action( ‘wp_head’, ‘parent_post_rel_link’, 10, 0 );   
remove_action( ‘wp_head’, ‘start_post_rel_link’, 10, 0 );   
remove_action( ‘wp_head’, ‘adjacent_posts_rel_link_wp_head’, 10, 0 );   
//remove_action( ‘wp_head’, ‘locale_stylesheet’ );   
remove_action( ‘publish_future_post’, ‘check_and_publish_future_post’, 10, 1 );   
//remove_action( ‘wp_head’, ‘noindex’, 1 );   
//remove_action( ‘wp_head’, ‘wp_print_styles’, 8 );   
//remove_action( ‘wp_head’, ‘wp_print_head_scripts’, 9 );   
remove_action( ‘wp_head’, ‘wp_generator’ );   
//remove_action( ‘wp_head’, ‘rel_canonical’ );   
remove_action( ‘wp_footer’, ‘wp_print_footer_scripts’ );   
remove_action( ‘wp_head’, ‘wp_shortlink_wp_head’, 10, 0 );   
```





## 参考文章

[wordpress中wp_head()的作用](http://www.sjyhome.com/articles/wordpress-wp_head.html)