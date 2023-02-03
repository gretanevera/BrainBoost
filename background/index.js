chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "bionicReading") {
        // Bionic Reading toggle was updated
        let bionicEnabled = request.enabled;

        if (bionicEnabled) {
            // Bionic Reading is now enabled
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { type: "enableBionicReading" });
            });
        } else {
            // Bionic Reading is now disabled
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { type: "disableBionicReading" });
            });
        }
    }
});
