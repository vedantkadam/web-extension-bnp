(function () {
  let watermarkText = "";

  if (window.location.href.includes("markets360.bnpparibas.com-preprod")) {
    watermarkText = "PREPRODUCTION";
  } else if (window.location.href.includes("markets360.bnpparibas.com")) {
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
})();
