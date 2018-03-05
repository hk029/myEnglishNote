var fs = require('fs');
var print = console.log;
var ignore = [
  /^_.*/g,
  /README\.md/g
]
// print(readDir('.'));
readDir('.');

function readDir(path) {
  var mydir = [];

  function findMore(path,first) {
    var first = first || true;
    var sidetxt = '';
    var navtxt = '';
    var json = {'side':{},'nav':{}};
    //  json 文件是个文件名-路径 的配置文件用来生成_sidebar.md
    if(fs.existsSync(path+'/'+'_conf.json')){
      json = JSON.parse(fs.readFileSync(path+'/'+'_conf.json'));
    }
    var files = fs.readdirSync(path);
    files.forEach((file) => {
      var curFile = path + '/' + file;
      //如果是文件夹
      if (fs.statSync(curFile).isDirectory()){
        json.nav[file] =  curFile; 
        findMore(curFile);
      }
      else {
        mydir.push({file:curFile});
        //把md后缀替换掉
        var pureFile = file.replace('.md','');
        //不是md的文件跳过
        if(file.indexOf('md') >= 0 && pureFile[0] !== '_'){
            //如果没有README.md文件，那么把第一个文件生成README文件
            if(first && !json.side['README']){
              fs.renameSync(curFile,path+'/README.md');
              json.side[pureFile] = path+'/';  
              json.side['README'] = path+'/';
              first = false;
            }else {
              json.side[pureFile] = curFile;
            }
          // }
        }
      }
    });
    for(key in json.side){
      if(key !== 'README' && key !== 'sidebar')
        sidetxt += `- [${key}](${json.side[key].substr(1)})\n`
    }
    for(key in json.nav){
        navtxt += `- [${key}](${json.nav[key].substr(1)}/)\n`
    }
    // if(navtxt !== ''){
      navtxt += '- [🔙返回上级](n../)\n';
      fs.writeFileSync(path+'/'+'navbar.md',navtxt);
    // }
    fs.writeFileSync(path+'/'+'_conf.json',JSON.stringify(json));
    fs.writeFileSync(path+'/'+'sidebar.md',sidetxt);
  }
  findMore(path,true);
  return mydir;
}