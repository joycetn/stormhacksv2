document.addEventListener('DOMContentLoaded', function() {
    // Light Hex button
    document.getElementById('lightHexButton').addEventListener('click', function() {
        // Replace with your desired URL or functionality
        console.log("Light Hex button clicked"); // For debugging
    });

    // Demon Mode button
    document.getElementById('demonModeButton').addEventListener('click', function() {
        // Replace with your desired URL or functionality
        console.log("Demon Mode button clicked"); // For debugging
    });

    // Toggle Dark Mode button
    document.getElementById('toggleDarkModeButton').addEventListener('click', switchMode);
});

// Function for changing color when switch is toggled
function switchMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

 
function updateTimeDisplay(value) {
    let hours = Math.floor(value / 60);  // Get the hours
    let minutes = value % 60;  // Get the remaining minutes
    // Pad the hours and minutes with leading zeros if necessary
    let formattedTime = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
    
    // Update the display
    document.getElementById('rangeValue').innerText = formattedTime;
}