var cssId = 'readable.css';  

if (!document.getElementById(cssId)) {
  var head  = document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.innerHTML = 'body{margin:1em auto;' +
    'max-width:40em;' +
    'padding:0 .62em;' +
    'font:1.2em/1.62em sans-serif;}' +
    'h1,h2,h3{line-height:1.2em;}' +
    '@media print{body{max-width:none}};';
  head.appendChild(style);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
