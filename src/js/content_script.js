window.getSelection().type === "Range" ? surroundSelection() : 
  injectCSS('body');

function surroundSelection() {
  var selection= window.getSelection().getRangeAt(0);
  var selectedText = selection.extractContents();
  var div = document.createElement("div");

  div.className = "eote-readable";
  div.appendChild(selectedText);
  selection.insertNode(div);
  injectCSS(div.className);
}

function injectCSS(divClassName) {
  var head  = document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.innerHTML = generateCSS(divClassName);
  head.appendChild(style);
}

function generateCSS(element) {
  if (element !== 'body')
    element = '.' + element;

  var style = element + 
    '{' +
      'margin:1em auto !important;' +
      'max-width:40em !important;' +
      'padding:0 .62em !important;' +
      'font:1.2em/1.62em sans-serif !important;' +
    '}' +
      'h1,h2,h3' + 
    '{' + 
      'line-height:1.2em !important;' + 
    '}';

  return style;
}
