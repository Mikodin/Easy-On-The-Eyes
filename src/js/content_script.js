var cssId = 'readable.css';  

console.log(document.getSelection());
function injectBodyCSS() {
  if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.innerHTML = 'body {margin:1em auto;' +
      'max-width:40em;' +
      'padding:0 .62em;' +
      'font:1.2em/1.62em sans-serif;}' +
      'h1,h2,h3{line-height:1.2em;}' +
      '@media print{body{max-width:none}};';
    head.appendChild(style);
  }
}

function injectSelectionCSS() {
  if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.innerHTML = '.eote-readable {margin:1em auto;' +
      'max-width:40em;' +
      'padding:0 .62em;' +
      'font:1.2em/1.62em sans-serif;}' +
      'h1,h2,h3{line-height:1.2em;}' +
      '@media print{body{max-width:none}};';
    head.appendChild(style);
  }
}


function readableSelection() {
  var selection= window.getSelection().getRangeAt(0);
  var selectedText = selection.extractContents();
  var div = document.createElement("div");
  div.className = "eote-readable";
  div.appendChild(selectedText);
  selection.insertNode(div);
  injectSelectionCSS();
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    request.selectionText === undefined ? injectBodyCSS() : readableSelection();
    console.log(request);
  });
