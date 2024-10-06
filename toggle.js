document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the range input
    const rangeInput = document.getElementById('myRange');
    
    rangeInput.addEventListener('input', function() {
        updateTimeDisplay(this.value);
    });

    // Other event listeners (e.g., for buttons)
    document.getElementById('lightHexButton').addEventListener('click', function() {
        console.log("Light Hex button clicked");
    });

    document.getElementById('demonModeButton').addEventListener('click', function() {
        console.log("Demon Mode button clicked");
    });

    document.getElementById('toggleDarkModeButton').addEventListener('click', switchMode);

    // Button click event to start jumpscare sequence
    const summonButton = document.querySelector('.click');
    summonButton.addEventListener('click', function() {
        const totalDuration = rangeInput.value * 60 * 1000; // Convert minutes to milliseconds
        startJumpscareSequence(totalDuration); // Start jumpscare sequence
    });
});

// Function for updating the time display
function updateTimeDisplay(value) {
    let hours = Math.floor(value / 60);  // Get the hours
    let minutes = value % 60;  // Get the remaining minutes
    let formattedTime = String(hours).padStart(2, '0') + 'h ' + String(minutes).padStart(2, '0') + 'm';
    document.getElementById('rangeValue').innerText = formattedTime;
}
// Function for switching modes
function switchMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//===========================================================================================================
// Function to start the jumpscare sequence at random intervals
function startJumpscareSequence(totalDuration) {
    const numberOfJumpscares = getRandomInt(3, 6); // Choose between 3 to 6 jumpscares
    const interval = totalDuration / numberOfJumpscares; // Divide total time into random intervals

    for (let i = 0; i < numberOfJumpscares; i++) {
        const randomDelay = getRandomInt(0, interval); // Get random delay within each interval
        setTimeout(triggerJumpscare, randomDelay + i * interval); // Schedule jumpscares randomly
    }
}

// Function to trigger a jumpscare (show the image)
function triggerJumpscare() {
     // Open the popup.html as a new window
    const popupWidth = 600;  // Set the desired width of the pop-up
    const popupHeight = 400;  // Set the desired height of the pop-up
    const left = (screen.width / 2) - (popupWidth / 2); // Center the pop-up horizontally
    const top = (screen.height / 2) - (popupHeight / 2); // Center the pop-up vertically

    const popupWindow = window.open(chrome.runtime.getURL("popup.html"), "Distraction Demon", 
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=no,menubar=no,toolbar=no,status=no`);

    // Optional: Automatically close the popup after 5 seconds
    setTimeout(() => {
        if (popupWindow) {
            popupWindow.close();
        }
    }, 50000); // Pop-up appears for 5 seconds
}
//===========================================================================================================

// Utility function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Request notification permission
function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notification permission granted.");
            } else {
                console.log("Notification permission denied.");
            }
        });
    }
}

// Call this function when your extension starts
requestNotificationPermission();