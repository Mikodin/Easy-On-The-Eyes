document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('injectBtn');
  btn.addEventListener('click', function() {
    console.log('hello from eote.js');
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  });
  console.log(btn);
});

function readableBody(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.executeScript(null, {file: "content_script.js"});
}

chrome.contextMenus.create({"title": 'Render Readable!', "contexts":["page"],
  "onclick": readableBody});

// Create one test item for each context type.
/*
var contexts = ["page","selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
    "onclick": genericOnClick});
  console.log("'" + context + "' item:" + id);
}
*/
