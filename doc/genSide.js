var fs = require('fs');
var print = console.log;

print(readDir('.'));

function readDir(path) {
  var mydir = [];

  function findMore(path) {
    var tmptxt = '';
    var files = fs.readdirSync(path);
    files.forEach((file) => {
      var curFile = path + '/' + file;
      if (fs.statSync(curFile).isDirectory())
        findMore(curFile);
      else {
        mydir.push({file:curFile});
        tmptxt += `- [${file}](s${curFile})\n`
      }
    });
    fs.writeFileSync(path+'/'+'_sidebar.md',tmptxt);
  }
  findMore(path);
  return mydir;
}