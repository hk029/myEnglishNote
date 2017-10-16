# 定时任务

在node上想要实现定时任务，有几种方案：

- 原生的setinterval
- later模块
- node-schedule

安装什么的我都不说了，直接说应用场景吧，一般的人使用场景无外乎如下几个：

- 每隔XX时间做XXX
- 每天的XX时间做XXX
- 特定的XX时间做XXX

## 基本

### later

```javascript
var later = require('later');
```



### node-schedule

```javascript
var schedule = require("node-schedule");
```



## 支持cron

### cron结构

```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

### node-schedule



```javascript
var j = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});
```



## 每隔5分钟

### later



### node-schedule

会用到一个`RecurrenceRule`函数

```javascript
　
var rule = new schedule.RecurrenceRule();
　　rule.minute = 5;
　　var j = schedule.scheduleJob(rule, function(){
　　　　console.log("执行任务");
　　});
```

## 每个工作日下午2点喝茶



### node-schedule

```javascript
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];  //0是周日
rule.hour = 14;
rule.minute = 0;

//方案一
var j = schedule.scheduleJob(rule, function(){
  console.log('喝茶去啦');
});

//方案二
var j = schedule.scheduleJob({hour: 14, minute: 0, dayOfWeek: new schedule.Range(1, 5)}, function(){
  console.log('喝茶去啦!');
});
```



## 特定时间2016-12-12 0:0

### later





### node-schedule

```javascript
var schedule = require('node-schedule');
var date = new Date(2016, 12, 12, 0, 0, 0);

var j = schedule.scheduleJob(date, function(){
  console.log('双十二抢购开始！');
});
```





## 5秒后开始，10秒后结束

```javascript
var startTime = new Date(Date.now() + 5000);
var endTime = new Date(startTime.getTime() + 5000);
var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('滴滴！');
});

```

