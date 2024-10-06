// Array of button texts
const buttonTexts = [
    "Regret is always lurking.",
    "You’re not in control.",
    "Time is not on your side.",
    "In the silence, it whispers your failures.",
    "You’re just delaying the inevitable…",
    "What are you really avoiding?",
    "You can't escape your choices"

];

// Function to set a random button text
function setRandomButtonText() {
    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    const randomText = buttonTexts[randomIndex];
    document.getElementById("closeButton").innerText = randomText;
}

// Array of image paths
const imagePaths = [
    chrome.runtime.getURL("images/image0.jpg"),
    chrome.runtime.getURL("images/image1.jpg"),
    chrome.runtime.getURL("images/image2.jpg"),
    chrome.runtime.getURL("images/image3.jpg"),
    chrome.runtime.getURL("images/image4.png"),
    chrome.runtime.getURL("images/image5.png"),
    chrome.runtime.getURL("images/image6.png")
];

// Function to set a random image
function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImage = imagePaths[randomIndex];
    const img = document.getElementById("jumpImage");
    img.src = randomImage; // Set the image source
}

// Set a random image when the pop-up loads
setRandomImage();


// Set the button text when the pop-up loads
setRandomButtonText();

// Close button functionality
document.getElementById("closeButton").addEventListener("click", function() {
    console.log("Close button clicked"); // Debug log
    window.close(); // Close the pop-up window
});