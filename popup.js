document.addEventListener("DOMContentLoaded", function () {
    const prodInput = document.getElementById("prodUrl");
    const preprodInput = document.getElementById("preprodUrl");
    const saveButton = document.getElementById("save");

    // Load saved URLs
    chrome.storage.sync.get(["prodUrl", "preprodUrl"], function (data) {
        if (data.prodUrl) prodInput.value = data.prodUrl;
        if (data.preprodUrl) preprodInput.value = data.preprodUrl;
    });

    // Save URLs
    saveButton.addEventListener("click", function () {
        const prodUrl = prodInput.value.trim();
        const preprodUrl = preprodInput.value.trim();

        chrome.storage.sync.set({ prodUrl, preprodUrl }, function () {
            alert("URLs saved!");
        });
    });
});
