console.log('!hello');
var cssId = 'readable.css';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId))
{
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://github.com/Rayne58/Easy-On-The-Eyes/blob/master/src/styles.css';
  link.media = 'all';
  head.appendChild(link);
}
