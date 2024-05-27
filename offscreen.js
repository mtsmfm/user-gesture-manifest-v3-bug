chrome.runtime.onMessage.addListener(() => {
  const video = document.createElement("video");
  video.addEventListener("loadedmetadata", () => {
    video.requestPictureInPicture();
  });

  const source = document.createElement("source");
  source.setAttribute(
    "src",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
  );
  source.setAttribute("type", "video/webm");
  video.appendChild(source);
  video.autoplay = true;

  document.body.appendChild(video);
});
