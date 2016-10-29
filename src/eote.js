/*
* To avoid duplicates if you click the actual extension button
*/
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

// Hotkey ctrl + shift + y
chrome.commands.onCommand.addListener(renderReadable);

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('injectBtn');
  btn.addEventListener('click', renderReadable);
});

function renderReadable(info, tab) {
  chrome.tabs.executeScript(null, {file: "js/content_script.js"});
}
