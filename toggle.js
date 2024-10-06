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