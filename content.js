chrome.storage.sync.get(["prodUrl", "preprodUrl"], function (data) {
  let watermarkText = "";
  const currentUrl = window.location.href;

  if (data.preprodUrl && currentUrl.includes(data.preprodUrl)) {
    watermarkText = "PREPRODUCTION";
  } else if (data.prodUrl && currentUrl.includes(data.prodUrl)) {
    watermarkText = "PRODUCTION";
  }

  if (watermarkText) {
    const watermark = document.createElement("div");
    watermark.innerText = watermarkText;
    Object.assign(watermark.style, {
      position: "fixed",
      top: "10px",
      right: "10px",
      fontSize: "50px",
      color: "red",
      opacity: "0.6",
      pointerEvents: "none",
      zIndex: "9999",
      fontWeight: "900",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
    });
    document.body.appendChild(watermark);
  }
});
