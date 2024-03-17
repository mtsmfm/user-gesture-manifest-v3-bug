(async () => {
  const offscreenDocument = (
    await chrome.runtime.getContexts({
      contextTypes: [chrome.runtime.ContextType.OFFSCREEN_DOCUMENT],
    })
  )[0];

  if (!offscreenDocument) {
    await chrome.offscreen.createDocument({
      url: "./offscreen.html",
      reasons: ["USER_MEDIA"],
      justification: "Test",
    });
  }

  chrome.action.onClicked.addListener(() => {
    chrome.runtime.sendMessage("do something");
  });
})();
