document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('injectBtn');
  btn.addEventListener('click', function() {
    console.log('hello from eote.js');
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  });
  console.log(btn);
});
