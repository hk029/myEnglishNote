## redis介绍

redis介绍看上一篇文章：http://voidsky.cc/tech/javascript/d1e7e5722b01212a5c2773454cbc4364/

## Nodejs 与 redis

redis 的client默认支持很多语言，我们看看javascript的

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477990308548)





![your text](http://o7bk1ffzo.bkt.clouddn.com/1477990351381)



这里一般用的比较多的就是`ioredis`和`node_redis`，我们可以通过npm简单的安装

## Nodejs插件安装

```
npm install redis
```

在项目中只用输入

```javascript
var redis = require('redis');
```

## 创建客户端



![your text](http://o7bk1ffzo.bkt.clouddn.com/1477990474326)



然后创建客户端连接就行（`端口号`，`host地址`），

```javascript
var client = redis.createClient(6379,'localhost')  //不填写也行，默认就是这个
```

## 命令使用

命令使用和redis的命令基本是一样的，比如`set` `get`（get操作是一个异步操作）

```javascript
client.set('myserver:name','rocky');

client.get('myserver:name',function  (err,v) {
	console.log("redis get hello v:",err,v);
})
```

## 列表操作

比如列表操作

```javascript
var client = require('./client');

client.rpush('testlist','a')
client.rpush('testlist','b')
client.lpush('testlist','c')
client.lpush('testlist','d')
client.lpush('testlist',123)


client.lrange('testlist',0,-1,function (err,lists) {
	console.log("client.lrange,err,lists:",err,lists);
	/* body... */
})
```



## 消息中介

通过订阅和发布，可以轻松的实现进程间的消息通信



### 订阅消息

使用`subcribe(channel)`函数就行了，然后通过绑定message事件进行监听（可以绑定多个频道进行监听）

```javascript
client.subscribe('mychannel');

client.on('message',function (channel,msg) {
	console.log('recieve massage from ',channel,' massage:',msg);
})
```



### 发布消息

很简单，直接使用`publish`方法就行了

```javascript
client.publish('mychannel','hello world!');  //频道 ， 消息
```



![your text](http://o7bk1ffzo.bkt.clouddn.com/1477992069348)

