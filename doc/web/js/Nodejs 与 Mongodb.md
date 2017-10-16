# Nodejs 与 Mongodb

## Mongoose

Mongodb本身是提供了有关Nodejs的原生接口支持的，可以参考文档：[文档地址](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/?_ga=1.49296934.1032550816.1483529284)。但是使用上面不是特别方便。目前大多使用的是Mongoose这个第三方的库。根据它的slogan也可以看出，它提供了更加优雅的操作mongodb的方式，它将Nodejs中的Object与Mongodb中的存储单位文档进行对应的这个模块。

![your text](http://o7bk1ffzo.bkt.clouddn.com/1484210892543)



它支持无模式，也支持强类型模式

mongoose的官方文档：http://mongoosejs.com/docs/index.html

## 安装

用cnpm/npm安装还是很简单的
```
npm/cnpm install mongoose
```



## 连接

连接非常简单，输入连接的地址就行了：

```javascript
var mongoose = require('mongoose');
var uri = "mongodb://username:password@hostname:port/dbname";
uri = "mongodb://localhost/dbname"

mongoose.connect(uri);
```





