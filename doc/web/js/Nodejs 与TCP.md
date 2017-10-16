# Nodejs 与TCP

TCP也是nodejs的一个核心模块，TCP协议是一个三次握手的协议，用来实现可靠数据传输，一般用在对数据要求比较严格的环境，我们来看看如何使用它做一个聊天小程序：



我们先看看官方文档，可以发现它主要有两大类：netServer和net.Socket

![your text](http://o7bk1ffzo.bkt.clouddn.com/1478006057807)





很好理解，net.Server就是服务器端，用来实现监听服务的功能，它的几个主要函数

- getConnection() 获得连接
- listening() 监听端口

然后有几个消息：

- close：连接断开
- connection : 用户发起连接
- listening
- ​

![your text](http://o7bk1ffzo.bkt.clouddn.com/1478006736025)

