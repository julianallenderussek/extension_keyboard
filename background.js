console.log("from background")

const tabId = getTabId();

// Listens to the user clicking on tabs
chrome.tabs.onActivated.addListener(tab => {
  console.log(tab);
});

console.log(tabId);

// to inject to active tab
chrome.scripting.executeScript(
  {
    target: {tabId: tabId},
    files: ['foreground.js'],
  },
  () => { console.log("foreground.js") });