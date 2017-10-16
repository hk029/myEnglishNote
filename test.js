var marked = require('marked');
var renderer = new marked.Renderer();

renderer.heading = function (text, level) {
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    return '<h' + level + '><a name="' +
      escapedText +
      '" class="anchor" href="#' +
      escapedText +
      '"><span class="header-link"></span></a>' +
      text + '</h' + level + '>';
  },

  renderer.link = function (href, title, text) {
    var window = window?window:undefined;
    var newHref = href;
    console.log(href);
    if (href.indexOf(/\$\//g) >= 0 && window) {
      newHref = href.replace('$', function (find) {
        var curHash = location.hash;
        return curHash.slice(2);
      })
    }
    console.log(newHref);
    return '<a href="' + newHref + '">' + text + '</a>'
  }
console.log(marked('[abc]($/a/)', {
  renderer: renderer
}));