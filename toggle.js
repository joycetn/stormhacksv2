//function for changing colour when switch is toggled
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