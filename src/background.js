// Listen for a click on the extension's icon
chrome.action.onClicked.addListener((tab) => {
  // Run the content script on the current page when the extension icon is clicked
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'] // This can be changed to include other scripts if needed
  }, () => {
    console.log('Content script executed on the page!');
  });
});

// Optional: Listen for messages from the content script (if needed)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTermsData') {
    // Handle the action and respond with data
    sendResponse({ data: 'Sample response from background script' });
  }
});
