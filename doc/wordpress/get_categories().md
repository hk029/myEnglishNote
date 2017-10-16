获取目录



## get_categories()

```php
get_categories( string|array $args = '' )
```

这个函数可以获取所有的目录，它可以传一个参数来控制需要获取目录的情况，官网给出的参数参考[get_terms()](https://developer.wordpress.org/reference/functions/get_terms/);

一般常用的：



`orderby`  ： *(string)* 排序方法（'name', 'slug', 'term_group', 'term_id', 'id', 'description'）

`include`  : *(array|string)* 需要包含的

`exclude` : *(array|string)* 不需要包含的

`order`  : *(string)*  排序方法，默认'ASC'，可选'DESC'

`hide_empty`  ：*（int）* 是否隐藏空的分类，默认为1（隐藏）

`number` : *(int|string)*  最大返回的个数，默认 '' | 0 （全部）

`childless` :  *(bool)* 如果为真，则只返回没有孩子的目录，默认false

`parent`  : *(int|string)*  只返回该父亲ID下的所有孩子分类



返回值是一个数组，可以用循环（**foreach）**的方式获取里面的分类目录，常用的参数如下：

```php
foreach( categories as category ) {
  $category->term_id;  //ID
  esc_url(get_category_link($category->term_id ));  //URL
  $category->name;  //分类名字
  $category->description;  //分类的描述
  $category->count;  //分类中文章个数  
}
```



例子：

```php
<?php
$categories = get_categories( array(
    'orderby' => 'name',
    'order'   => 'ASC'
) );
 
foreach( $categories as $category ) {
    $category_link = sprintf( 
        '<a href="%1$s" alt="%2$s">%3$s</a>',
        esc_url( get_category_link( $category->term_id ) ),
        esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
        esc_html( $category->name )
    );
     
    echo '<p>' . sprintf( esc_html__( 'Category: %s', 'textdomain' ), $category_link ) . '</p> ';
    echo '<p>' . sprintf( esc_html__( 'Description: %s', 'textdomain' ), $category->description ) . '</p>';
    echo '<p>' . sprintf( esc_html__( 'Post Count: %s', 'textdomain' ), $category->count ) . '</p>';
} 
```



