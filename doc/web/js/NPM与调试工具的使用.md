# NPM与调试工具的使用

NPM是Nodejs的包管理工具，Nodejs是一个以包为中心的平台，它的各项工具都是以包的形式存在的，我们主要会用到两种包：

- 命令行工具：比如NPM，这个一般安装在`全局`
- 项目包：express，ejs……这个一般安装在`项目本地`

## 安装方法

## Cpm

国内镜像

先关闭严格认证：

```
npm config set strict-ssl false
```

安装 cnpm : 这里指定注册机构为taobao（注意，如果在Linux中，请用sudo安装）

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

其中`-g`参数为全局安装



安装完成后，就可以使用cnpm安装包了，比如express:

```
cnpm install express
```

速度还是不错的

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477826530007)

## nodemon

自动监视文件变化，重启应用

```
cnpm install -g nodemon
```

安装完成后，输入：

```
nodemon app.js
```

就可以实时监控这个文件，可以看到这个程序并没有退出

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477826745808)



我们修改一下程序，让程序输出“hello world”,可以看到，`nodemon`检测到了**文件变化**，然后自动重启了程序



![your text](http://o7bk1ffzo.bkt.clouddn.com/1477826840758)

## pm2

以守护进程的形式启动node，可以同时启动多个进程，在进程之间实现资源共享

## node-inspector

node调试工具（webstorm是自带调试工具的），基于谷歌浏览器

```
cnode install -g node-inspector
```

我们编写一个很简单的服务器程序：

```javascript
var http = require('http')

http.createServer(function  (req,res) {
	// body... 
	res.end('hello');
}).listen(8011);

console.log('listen 8011');
```

然后用`nodemon`打开它，并加上`--debug`参数

```
nodemon --debug app.js
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477827327079)

然后，我们在文件夹中启动`node-inspector`

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477827373846)



然后打开chrome浏览器，就可以开始调试了



![your text](http://o7bk1ffzo.bkt.clouddn.com/1477827522563)