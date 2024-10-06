document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('myRange');
    const output = document.getElementById('rangeValue');

    // default slider value
    updateTimeDisplay(slider.value);

    // Event listener for the input change on the slider
    slider.addEventListener('input', function () {
        updateTimeDisplay(slider.value);
    });
});

// Function to update the value with hours and minutes
function updateTimeDisplay(value) {
    let hours = Math.floor(value / 60); // Calculate hours
    let minutes = value % 60; // Calculate remaining minutes

    // Format the time display
    let formattedTime = `${hours}h ${minutes}m`;

    // Update the time
    document.getElementById('rangeValue').innerText = formattedTime;
}
