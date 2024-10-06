// toggle.js

// Function to open the pop-up
function openPopup() {
    const countdownValue = document.getElementById('myRange').value; // Get the slider value
    localStorage.setItem('countdownValue', countdownValue); // Save it to local storage
    window.open('mini_popup.html', 'Mini Popup', 'width=255,height=150'); // Adjust width and height as needed
}


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const summonButton = document.getElementById('summonButton');

    // Add a click event listener to the button
    summonButton.addEventListener('click', openPopup);
});

document.addEventListener('DOMContentLoaded', function () {
    const countdownValue = localStorage.getItem('countdownValue'); // Get the countdown value from localStorage
    const timerDisplay = document.getElementById('countdownTimer'); // Get the timer display element
    const pauseText = document.querySelector('.pause-text'); // Get the pause text element

    let totalTime = 0; // Total time in seconds
    let countdownInterval; // Store the interval ID
    let isPaused = false; // Track the paused state

    if (countdownValue) {
        // Convert the value to seconds (assuming it's in minutes)
        totalTime = countdownValue * 60; // Convert minutes to seconds

        // Display the time immediately on load
        updateTimerDisplay(totalTime);

        // Start the countdown
        startCountdown();
    } else {
        timerDisplay.innerText = 'No time set!';
    }

    // Function to start the countdown
    function startCountdown() {
        countdownInterval = setInterval(() => {
            if (!isPaused) {
                totalTime -= 1; // Decrease time by 1 second

                if (totalTime < 0) {
                    clearInterval(countdownInterval); // Stop the timer when it hits 0
                    timerDisplay.innerText = 'Session Ended!';
                } else {
                    updateTimerDisplay(totalTime); // Update the display
                }
            }
        }, 1000); // Update every second
    }

    // Function to format and update the timer display
    function updateTimerDisplay(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600); // Calculate total hours
        const minutes = Math.floor((timeInSeconds % 3600) / 60); // Calculate remaining minutes
        timerDisplay.innerText = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`; // Display formatted time
    }

    // Add click event to pause text
    pauseText.addEventListener('click', function () {
        if (isPaused) {
            isPaused = false; // Set paused state to false
            pauseText.innerText = 'Click here to pause'; // Update text to 'pause'
        } else {
            isPaused = true; // Set paused state to true
            pauseText.innerText = 'Continue'; // Update text to 'continue'
        }
    });
});
