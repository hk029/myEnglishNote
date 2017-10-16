# nodejs与web服务器(未完)

## web服务器

又称网页服务器，它的基本功能是：

- **接收http请求**（GET,POST，DELETE，PUT，PATCH），还有options（知道web服务器支持的请求种类），HEADER（只请求头部）
- **处理http请求**（自己处理，给其他程序处理）
- **做出响应**（返回页面，文件，各类数据）



### 常见web服务器架构

- **Nginx/Apache** ： 负责接受HTTP请求，确定谁来处理，并返回结果
- **php-fpm**（单独进程，比如Nginx） / php模块（比如Apache的php模块） ： 处理分配给自己的任务，并将处理结果返回给分配者





### 常见请求种类

- 请求文件：包括静态文件（网页，图片，js，css）
- 完成特定操作：登录，获取特定数据



## Nodejs的web服务器

### 特点

- 不依赖其他特定服务器软件（Apache、Nginx、IIS……）
- Node.js代码处理请求逻辑
- Node.js代码负责Web服务器的各种“配置”（代码，而非配置文件）



## Node.js核心模块http









## express

可以使用express-generator自动生成目录

```js
npm install -g express-generator
```





![your text](http://o7bk1ffzo.bkt.clouddn.com/1477993647114)







## 静态文件服务

让浏览器直接访问web服务器的静态文件（网页，文本，图片，前端js，css，媒体文件），Nodejs里面当然也可以使用静态文件服务，比较简单的是直接使用express提供的静态文件服务器

express.static('./public')



```js
app.use(express.static(path.join(__dirname, 'public')));
```



## 路由

根据不同的请求，分配给相应的处理函数

区分：路径、请求方法



实现：

- path：

```javascript
app.get('/',function(req,res)){
  res.end('hello\n');
}

```

- router:  (配置某个路径下的一系列路径)

  ```javascript
  /* GET users listing. */
  var router = express.Router();

  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/list', function(req, res, next) {
    res.end('Router /list');
  });

  app.use('/users', users);
  ```

- route：

```javascript
app.route('/article')
  .get(function (req,res) {
    res.end('route /article get');
    /* body... */
  })
  .post(function (req,res) {
    res.end('route /article post');
    /* body... */
  });
```


### 路由参数

有时候我们会看到这样的网址：http://example.com/news/123

其中123就是路由参数，通过路由参数，我们可以节省大量的编码工作



