function ToggleHighlighting() { }

function ToggleBolding() { }

function ToggleLineBreaks() { }

function ToggleBionicReading() {
    console.log('bionic reading')
    let bionicToggle = document.getElementById("bionicToggle");
    let bionicEnabled = bionicToggle.checked;
    if (bionicEnabled) {
        enableBionicReading()
    } else {
        disableBionicReading()
    }
}

function ToggleFontChange() { }

function ToggleSpacingAdjustment() { }

function ToggleDistractionRemoval() { }

function ToggleFocusReading() { }
// Store the status of Bionic Reading
let bionicEnabled = false;

// Function to enable Bionic Reading
function enableBionicReading() {
    // Enable Bionic Reading
    bionicEnabled = true;

    // Get all text elements on the page
    let textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    // Iterate over all text elements
    textElements.forEach(textElement => {
        // Split the text into words
        let words = textElement.textContent.split(" ");

        // Create a new HTML string with the Bionic Reading formatting
        let newHtml = "";
        words.forEach((word, index) => {
            // Bold the first and last characters of each word
            let newWord = `<b>${word[0]}</b>${word.substring(1, word.length - 1)}<b>${word[word.length - 1]}</b>`;

            // Add the formatted word to the new HTML string
            newHtml += newWord + " ";
        });

        // Replace the original text content with the formatted HTML
        textElement.innerHTML = newHtml;
    });
}

// Function to disable Bionic Reading
function disableBionicReading() {
    // Disable Bionic Reading
    bionicEnabled = false;

    // Get all text elements on the page
    let textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    // Iterate over all text elements
    textElements.forEach(textElement => {
        // Replace the formatted HTML with the original text content
        textElement.innerHTML = textElement.textContent;
    });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "enableBionicReading") {
        // Bionic Reading was enabled, so call the enable function
        enableBionicReading();
    } else if (request.type === "disableBionicReading") {
        // Bionic Reading was disabled, so call the disable function
        disableBionicReading();
    }
});
