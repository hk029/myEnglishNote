

## 为什么使用redis

对于一个web应用，如果我们需要努力优化，一般可以从优化跟io相关的操作入手，其实数据库操作就是一个很占用时间和消耗资源的io操作，优化可以分2个方面:

- **优化数据库本身**（合理设计数据结构，读写分离，优化sql语句，建立集群）
- **引入缓存**，将一部分数据缓存起来，必要的时候再写入磁盘（**效果明显**）


> 缓存就是把数据从读写消耗比较高的地方，转移到读写消耗比较低的地方。直接来说，就是获取数据的速度快一些。



这里的快有两个方面：

- 数据本身保存在更快的存储设备

- 存取操作本身更高效

  ​

  <br>

传统关系数据库把数据存储在硬盘上，通过sql语句进行操作，两方面都不够快，因此`基于内存`的，`键值对`方式存储数据的缓存系统就应运而生了。

 <br> 

引入缓存最初是用`memcache`，`redis`提出后，现在大多都用`redis`它有更多实用的工具。



## 基本功能

- 缓存系统
- 数据存储（支持存到缓存或持久化到硬盘）
- 消息中介（消息的订阅和发布）



## 安装方式

### linux 

在linux上很方便：

````linux
sudo yum install redis
sudo apt-get install redis
````

### windows 

去下载地址：https://github.com/dmajkic/redis/downloads

下载自己适合的版本

##  基本工具

### 服务启动

```redis-server
redis-server
```

- 我们可以直接通过输入命令运行（但是会话关闭或者`ctrl+c`就会退出）

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477983680515)

- **守护进程**的方式：（如果你通过apt / yum安装的话，会默认生成一个配置文件在etc下）

  我的在/etc/redis/redis.conf，用vim打开，把`daemonize no`改成`daemonize yes`

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477984046843)

  然后指定配置文件，启动就行了

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477984154706)

redis默认运行在`6379`端口( mongodb默认运行在`27017`端口）



###　客户端工具 redis-cli

使用方法：

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477984275150)



默认是直接连接到本机的6379端口，你也可以通过`-h`和`-p`指定`host地址`和`端口`，好了，连接上了就可以进行redis操作了，可以去官网http://redis.io查看相关操作





## Redis命令入门

推荐使用官网的**try redis教程**：http://try.redis.io，这个网页提供了一个redis的**模拟实验环境**，方便学习命令



进入网页后输入tutorial，或者点击红框部分，可以进入教程，可以根据教程进行命令操作（**这里的命令你可以手输，也可以点击白字部分，会自动输入**）

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477984632736)



然后输入`next`进行下个教程



![your text](http://o7bk1ffzo.bkt.clouddn.com/1477984724826)



### 命令查询

redis官网的命令手册很全面，可以根据不同的类别查询命令：http://redis.io/commands，而且给出时间复杂度，附带例子，还是建议以官方文档为主！

![your text](http://o7bk1ffzo.bkt.clouddn.com/1477986481049)



![your text](http://o7bk1ffzo.bkt.clouddn.com/1477986598374)

### 常用命令

> redis是以键值存储的，所以操作方式基本都是以操作键为主的

- **set** `keyvalue`  设置一个键值对（可以用来修改）

**注意：**

key中建议不要有有空格，建议使用":" （如果有空格，需要用`“”`包裹，value中空格同理）;

key不要设置太长，占内存，也不要设置的太短，可读性差 ; 

可以设置自己的专属命令规范。



- **get** `key`  ： 获取key的值



- **rename** `key` `newname`:  给key改名



- **exists** `key` : key是否存在



- **keys** `pattern`  匹配pattern获取key（可以使用比如*，？，[]等通配符）

```
keys *  : 查询所有key
keys ab* : 查询所有ab开头的key
```

- **del** `key` 删除一个键



- **incr** `key` 把key存储的值+1（如果要进行数据增加，使用这个命令，它是**原子操作**）



### 存储时间

- **expire** `key` `time/timestamp`  : key的存储时间（秒）,或者绝对时间（timestamp格式）


- **ttl**  `key` : 查询key的过期时间（变为0后，再就变成-2了，**-2表示key不存在**，**-1表示不会过期**）


- **persist** `key` : 可以把会过期的key持久化





### list

redis的list是一个双端的队列，可以从左右两个方向插入数据和弹出数据

- **lpush** `list` `value`  : 从左插入
- **rpush** `list` `value`  ： 从右插入
- **lpop** `list` `value`  ： 从左弹出
- **rpop** `list` `value`  ： 从右弹出


- **llen** `list`： list长度
- **lrange** `list` `begin` `end`  : list[begin , end]  ，如果end为-1即队列尾部
- **linsert** `list` `before|after` `pivot` `value` : 从pivot值的前后后插入value