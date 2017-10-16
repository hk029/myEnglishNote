# wordpress 作者信息



如果在文章主循环中，作者的ID是清楚的，可以直接使用`the_author()`方法获取作者姓名：

```php
<p><?php the_author(); ?></p>
```



但是，如果不是在文章内部，要取得作者的信息，就必须要用`get_the_author_meta( $field, $user_id );` 和`the_author_meta( $field, $user_id );`，前者用法完全一样，只是一个是**返回数据**，一个是**直接打印数据**。

## 参数

**$field**（字符串）（可选）要返回的数据项，可选值：

- user_login
- user_pass
- user_nicename
- user_email
- user_url
- user_registered
- user_activation_key
- user_status
- roles
- display_name
- nickname
- first_name
- last_name
- description
- jabber
- aim
- yim
- user_level
- user_firstname
- user_lastname
- rich_editing
- comment_shortcuts
- admin_color
- plugins_per_page
- plugins_last_view
- ID

默认值：None

**$user_id**（整数）（可选）需要返回的数据的用户 ID。如果在循环里可以不指定，会自动指定为当前文章的作者。

默认值：None

## 例子

获取用户邮箱：

```php
$user_email = get_the_author_meta( 'user_email' );
```

获取指定 ID 用户的显示名称：

````php
get_the_author_meta( 'display_name', 25 );
````

比如，用在html中：

```php
<p><?php echo get_the_author_meta('nickname',1); ?></p>
<p><?php the_author_meta('nickname',1); ?></p>
```

## 其它

该函数位于：`wp-includes/author-template.php`

