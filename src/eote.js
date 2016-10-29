chrome.contextMenus.remove("eote-page", null);
chrome.contextMenus.remove("eote-selection", null);
chrome.contextMenus.create({
  "id": "eote-page",
  "title": 'Render Page Readable!',
  "contexts":["page"],
  "onclick": renderReadable
});

chrome.contextMenus.create({
  "id": "eote-selection",
  "title": 'Render Selection Readable!',
  "contexts":["selection"],
  "onclick": renderReadable
});

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('injectBtn');
  btn.addEventListener('click', renderReadable);
});

function renderReadable(info, tab) {
  chrome.tabs.executeScript(null, {file: "js/content_script.js"});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, info)  
  });
}
