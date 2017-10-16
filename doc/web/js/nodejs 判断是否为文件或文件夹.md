# nodejs 判断是否为文件或文件夹

```
var fs = require('fs'),
    path = require('path');

function exists(path){
     return fs.existsSync(path) || path.existsSync(path);
}
```



 

 

如何判断是不是文件：

```
function isFile(path){  
    return exists(path) && fs.statSync(path).isFile();  
}  
```



 

1. function isDir(path){  
2.     return exists(path) && fs.statSync(path).isDirectory();  
3. }  


1. function isDir(path){  
2.     return exists(path) && fs.statSync(path).isDirectory();  
3. }  

 

 