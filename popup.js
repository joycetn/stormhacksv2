
// Array of button texts
const demonModeTexts = [
    "Regret is always lurking.",
    "You’re not in control.",
    "Time is not on your side.",
    "In the silence, it whispers your failures.",
    "You’re just delaying the inevitable…",
    "What are you really avoiding?",
    "You can't escape your choices"
];

const lightHexTexts = [
    "Get back to work!",
    "Time to catch up on some work.",
];

// Function to set a random button text
function setRandomButtonText(mode) {
    let buttonTexts = [];
    if (mode === "Light Hex") {
        buttonTexts = lightHexTexts;
    } else {
        buttonTexts = demonModeTexts;
    }
    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    const randomText = buttonTexts[randomIndex];
    document.getElementById("closeButton").innerText = randomText;
}

// Array of image paths
const demonImagePaths = [
    chrome.runtime.getURL("images/image0.jpg"),
    chrome.runtime.getURL("images/image1.jpg"),
    chrome.runtime.getURL("images/image2.jpg"),
    chrome.runtime.getURL("images/image3.jpg"),
    chrome.runtime.getURL("images/image4.png"),
    chrome.runtime.getURL("images/image5.png"),
    chrome.runtime.getURL("images/image6.png")
];

// Specific image for Light Hex
const lightHexImage = chrome.runtime.getURL("Logo/gifhellfire.gif");

// Function to set the appropriate image based on the mode
function setImageBasedOnMode(mode) {
    const img = document.getElementById("jumpImage");
    if (mode === "Light Hex") {
        img.src = lightHexImage; // Set the specific image for Light Hex
    } else {
        // Set a random image for Demon Mode
        const randomIndex = Math.floor(Math.random() * demonImagePaths.length);
        img.src = demonImagePaths[randomIndex]; // Set the image source
    }
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the mode from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode'); // Get the 'mode' parameter                                                                             
    
    setImageBasedOnMode(mode); // Call this function when the pop-up is loaded
    setRandomButtonText(mode); // Call this function to set the button text

    // Close button functionality
    document.getElementById("closeButton").addEventListener("click", function() {
        console.log("Close button clicked"); // Debug log
        window.close(); // Close the pop-up window
    });
});