var express = require("express");

var express = require("express")


var file = readFile
writeFile

var line1 = "3 2"
var line2 = "6 5 0"
print = console.log;

var x = Number(line1.split(' ')[1]-1);
var arr = line2.split(' ');
var len = arr.length;
var min = Infinity;
var mindex = 0;
// 求最小值和最小值所在的位置
for (var i = 0; i < len; i++) {
  arr[i] = Number(arr[i]);
  if (min > arr[i]) {
    min = arr[i];
    mindex = i;
  }
}
// 对arr每个值做处理
var curIndex = (mindex + 1) % len;
if (mindex === x) {
  for (var i = 0; i < len; i++) {
    arr[i] -= min;
  }
  arr[mindex] += min * len;
} else {
  var i = len;
  var sum = 0;
  var flag = true;
  while (i) {
    //从mindex 到 x 每个值 - (min+1)
    if (flag) {
      arr[curIndex] -= (min + 1);
      sum += (min + 1)
    } else {
      //从x到 mindex 每个值 - min
      arr[curIndex] -= min;
      sum += min
    }
    if (curIndex === x) flag = false;
    i--;
    curIndex = (curIndex+1)%len;
  }
  //mindex的值+sum
  arr[mindex] += sum;
}

print(arr.join(' '));