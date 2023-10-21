// background.js
chrome.runtime.onInstalled.addListener(function () {
    // Add an event listener for webNavigation to close new tabs/windows
    chrome.webNavigation.onCreatedNavigationTarget.addListener(function(details) {
        chrome.tabs.get(details.sourceTabId, function(sourceTab) {
          var sourceTabUrl = sourceTab.url;
          console.log('Source tab URL:', sourceTabUrl);
          if(/^https:\/\/cdn\.livetv.*\.me\//.test(sourceTabUrl)) {
              console.log('New navigation target created:', details.url);
              // Close the newly opened tab/window
              chrome.tabs.remove(details.tabId);
          }
        });
    });
});