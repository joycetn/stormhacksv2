
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('myRange');
    const output = document.getElementById('rangeValue');

    // Default slider value
    updateTimeDisplay(slider.value);

    slider.addEventListener('input', function () {
        updateTimeDisplay(slider.value);
    });

    // Add event listener to the button to start the countdown
    document.querySelector('.click').addEventListener('click', startCountdown);
});

function updateTimeDisplay(value) {
    let hours = Math.floor(value / 60); // Calculate hours
    let minutes = value % 60; // Calculate remaining minutes

    // time formate
    let formattedTime = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;

    // Update time
    document.getElementById('rangeValue').innerText = formattedTime;
}

let countdownInterval;

function startCountdown() {
    // Get the initial slider value (in minutes)
    let countdownTime = parseInt(document.getElementById('myRange').value); // Convert slider value to an integer

    // Clear any existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Update the slider immediately to reflect the countdown
    document.getElementById('myRange').value = countdownTime; // Set the slider to the initial time
    updateTimeDisplay(countdownTime); // Update display

    // Start the countdown
    countdownInterval = setInterval(() => {
        // Decrease the countdown time by 1 minute
        if (countdownTime > 0) {
            countdownTime -= 1; // Decrease by 1 minute

            // Update the slider and the display with the new countdown time
            document.getElementById('myRange').value = countdownTime; // Update slider value
            updateTimeDisplay(countdownTime); // Update the time display
        }

        // Stop countdown when time is up
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdownDisplay').innerText = "Time's up!";
            // Optionally reset the slider to the initial value if desired
            document.getElementById('myRange').value = 0; // Reset slider value to 0
            updateTimeDisplay(0); // Update display to show 00h 00m
        }
    }, 60000); // Update every 1 minute (60000 milliseconds)
}

// timer.js
document.addEventListener('DOMContentLoaded', function () {
    const countdownValue = localStorage.getItem('countdownValue'); // Get the countdown value from localStorage
    const timerDisplay = document.getElementById('countdownTimer'); // Get the timer display element

    if (countdownValue) {
        // Convert the value to seconds (assuming it's in minutes) and add an extra minute (60 seconds)
        let totalTime = (countdownValue * 60) + 59; // Convert minutes to seconds and add 1 extra minute

        // Display the time immediately on load
        updateTimerDisplay(totalTime);

        // Start the countdown
        const countdownInterval = setInterval(() => {
            if (totalTime > 0) {
                totalTime -= 1; // Decrease time by 1 second

                updateTimerDisplay(totalTime); // Update the display
            } else {
                clearInterval(countdownInterval); // Stop the timer when it hits 0
                timerDisplay.innerText = 'Session Ended!';
            }
        }, 1000); // Update every second
    } else {
        timerDisplay.innerText = 'No time set!';
    }

    // Function to format and update the timer display
    function updateTimerDisplay(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600); // Calculate total hours
        const minutes = Math.floor((timeInSeconds % 3600) / 60); // Calculate remaining minutes
        timerDisplay.innerText = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`; // Display formatted time
    }
});
