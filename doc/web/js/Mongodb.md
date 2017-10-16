# Mongodb

## 特点

- 使用BSON存储数据（二进制的JSON）
- 支持相对丰富的查询操作
- 支持索引
- 副本集
- 分片
- 无模式
- 部署简单方便（默认无身份认证）



## 服务启动

运行两种方式

### 守护进程：

```
mongod [opt] --fork --logpath=...
```

### 前端使用：

```
mongod [opt]
```

### 命令参数：

--dbpath ： 数据库目录（默认/data/db）

--port : 指定端口号（默认27017）

--fork : 以守护进程起来（必须制定log存储位置 ）

--logpath ： 指定log路径

--syslog ：使用默认系统log（我的在/var/log/mongodb/mongodb.log）

```
mongod --dbpath  /home/rocky/data/db  --port 
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1483527212989)

监视log的命令：用tail的-f参数可以持续监听目录

```
tail -f mongodb.log
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1483527357856)

## 客户端

```mongo
mongo IP:PORT
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1478075611496)



## 基本命令

> 由于是是nosql数据库，所以不需要特定的命令去创建数据库创建表，如果要使用一个数据库，但是它不存在的话，可以直接使用的

更加详细的命令请参考官方手册：https://docs.mongodb.com/getting-started/shell

### 数据库

- **show** dbs   查看所有数据库
- **show** collections   查看数据库里的所有的集合
- **use** `db`  切换到某个数据库  ![your text](http://o7bk1ffzo.bkt.clouddn.com/1483527714439)


### 查询

- **db**.`CollectionName`.**find** (`条件`)   (如果不加参数则为查询全部)

  **完全匹配**：{ \<field1>: \<value1>, \<field2>: \<value2>, ... }

  ```
  db.restaurants.find( { "borough": "Manhattan" } )
  ```

  **条件格式**：{ \<field1>: { \<operator1>: \<value1> } }

  - 大于/小于：{`$gt`/`$lt` : \<value1> }

  ```
  db.restaurants.find( { "grades.score": { $gt: 30 } } )
  ```

  - 或{`$or`: [{ \<field1>: \<value1>},{\<field2>: \<value2>}] }

  ```
    db.restaurants.find(
       { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
    )
  ```

  - 与：直接用逗号连接

  ```
  db.restaurants.find( { "cuisine": "Italian", "address.zipcode": "10075" } )
  ```

- **db**.`xxx`.**find**().**count**()   可以统计查询出的数目

  ​


### 插入数据

- **db**.`CollectionName`.**insert** ({"`key`":"`value`"……})

![your text](http://o7bk1ffzo.bkt.clouddn.com/1483528125879)

因为mongodb是无模式的，所以它不要求数据库中的数据必须使用相同的格式，也就是说，你可以再插入以下数据：

![your text](http://o7bk1ffzo.bkt.clouddn.com/1483528527859)

**注意：**这里的`_id`字段是所有的文档都有的字段，主要是通过它来查询不同的文档的。

当然你可以插入很复杂的数据，比如官方提供的例子：

```javascript
db.restaurants.insert(
   {

      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : ISODate("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : ISODate("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }
)
```



### 删除

**db**.`xxx`.**remove**(`删除条件` , `参数`)

```
db.restaurants.remove( { "borough": "Manhattan" } )
```

如果不加参数，默认删除的是所有匹配的文档，如果你只想删除一个文档，加入参数：`{ justOne: true }` 

```
db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )
```

删除所有的文档：

```
db.restaurants.remove( { } )
```



- **db**.`xxx`.**drop**()

当然，更加高效的删除整个文档的方式，是把集合删除，这时候要用`drop`命令，这时候，它会把包括索引在内的所有集合内容删除。



### 修改

- **db**.`xxx`.**update**(`条件`，`修改内容` ，`参数`)

  update语句是更新，所以它是会新增或修改原有的值。

`条件`可以参考之前的查询，如果修改全部内容可以设为`{}`

修改内容表达式的书写方式是：`$set` : { \<field1>: \<value1>, \<field2>: \<value2>, ... }

```
db.class.update( {"name":"ZhangQiang"}, { $set:{"No": "123"} } )
```

![your text](http://o7bk1ffzo.bkt.clouddn.com/1484209181920)



**默认修改只修改单条数据**，如果要修改多条数据，可以设置参数`{multi:true}`



db.`xxx`.update(`条件`,修改内容,{multi:true})





- **db**.`xxx`.**save**({"_id": ObjectId("xxxx"), \<field1>: \<value1>, \<field2>: \<value2>, ... })

  注意save语句和update语句完全不同，它只有**一个参数**，这个参数需要指定修改的ID号，后面接上修改后的值列表，这是彻底修改，不是更新，修改后的文档会完全和save的值列表一致。

  ​



### 查询属性存在

`$exists:true/false/1/0`

```java
db.CollectionName.find({"key":{$exists:true}})
```





## 查询数组子集内包含某些属性

`$elemMatch`

如果我的结构是：

```javascript
{
  a:1,
  b:2,
  c:[
    {
      c1:1,
      c2:2
    },
    {
      c1:2,
      c3:2
    }
  ]
}
```

要查c1 = 1的文档

```java
db.CollectionName.find({"c":{$elemMatch:{"c1":1}}})
```

