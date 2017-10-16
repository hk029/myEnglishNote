# async 控制并发数量



我们在写爬虫的时候，如果有 1000 个链接要去爬，那么不可能同时发出 1000 个并发链接出去对不对？我们需要控制一下并发的数量，比如并发 10 个就好，然后慢慢抓完这 1000 个链接。

用 async 来做这件事很简单。

这次我们要介绍的是 async 的 `mapLimit(arr, limit, iterator, callback)` 接口。另外，还有个常用的控制并发连接数的接口是 `queue(worker, concurrency)`，大家可以去 [https://github.com/caolan/async#queueworker-concurrency](https://github.com/caolan/async#queueworker-concurrency) 看看说明。

## 何时使用

当你需要去多个源(一般是小于 10 个)汇总数据的时候，用 `eventproxy` 方便；

当你需要用到队列，需要控制并发数，或者你喜欢函数式编程思维时，使用 `async`。



大部分场景是前者，所以我个人大部分时间是用 eventproxy 的。



```javascript
var async = require('async');

var concurrencyCount = 0;
var fetchUrl = function (url, callback) {
  var delay = parseInt((Math.random() * 10000000) % 2000, 10);
  concurrencyCount++;
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
  setTimeout(function () {
    concurrencyCount--;
    callback(null, url + ' html content');
  }, delay);
};

var urls = [];
for(var i = 0; i < 30; i++) {
  urls.push('http://datasource_' + i);
}

async.mapLimit(urls, 5, function (url, callback) {
  fetchUrl(url, callback);
}, function (err, result) {
  console.log('final:');
  console.log(result);
});
```

