chrome.action.onClicked.addListener(async (tab) => {
  const offscreenDocument = (
    await chrome.runtime.getContexts({
      contextTypes: [chrome.runtime.ContextType.OFFSCREEN_DOCUMENT],
    })
  )[0];

  // If an offscreen document is not already open, create one.
  if (!offscreenDocument) {
    // Create an offscreen document.
    await chrome.offscreen.createDocument({
      url: new URL("./offscreen.html", import.meta.url).href,
      reasons: [chrome.offscreen.Reason.USER_MEDIA],
      justification: "Recording from chrome.tabCapture API",
    });
  }

  await chrome.runtime.sendMessage({
    type: "hello",
  });
});
