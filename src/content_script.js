var cssId = 'readable.css';  

function injectCSS() {

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
}

function wrapText(selectedText) {
  console.log(selectedText);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    request.selectionText === undefined ? injectCSS() : 
      wrapText(request.selectionText);
    console.log(request);
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension" + JSON.stringify(request));
  });
