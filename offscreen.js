chrome.runtime.onMessage.addListener(async () => {
  try {
    await window.documentPictureInPicture.requestWindow();
  } catch (e) {
    alert(e);
  }
});
