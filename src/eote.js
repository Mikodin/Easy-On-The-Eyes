chrome.contextMenus.create({
  "title": 'Render Readable!',
  "contexts":["page", "selection"],
  "onclick": renderReadable
});

chrome.contextMenus.update("eote", {"onclick": renderReadable});

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('injectBtn');
  btn.addEventListener('click', renderReadable);
});

function renderReadable(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));


  chrome.tabs.executeScript(null, {file: "content_script.js"});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });
}
