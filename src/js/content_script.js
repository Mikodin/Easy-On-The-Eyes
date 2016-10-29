var cssId = 'readable.css';  

console.log(document.getSelection());
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

/*
function asdf() {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  var div = document.createElement("div");
  div.className = "eote-readable";
  div.innerHTML = "range.toString()";
  range.deleteContents();
  range.insertNode(div);
}
*/
function insertHtmlAtSelectionEnd(html, isBefore) {
  var sel, range, node;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = window.getSelection().getRangeAt(0);
      range.collapse(isBefore);
      var el = document.createElement("div");
      el.innerHTML = html;
      var frag = document.createDocumentFragment(), node, lastNode;
      while ( (node = el.firstChild) ) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    range.collapse(isBefore);
    range.pasteHTML(html);
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    request.selectionText === undefined ? injectCSS() : 
      insertHtmlAtSelectionEnd("Hello", true);
    console.log(request);
  });
