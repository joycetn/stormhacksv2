document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('myRange');
    const output = document.getElementById('rangeValue');
    const summonButton = document.querySelector('.click');

    // default slider value
    updateTimeDisplay(slider.value);

    // Event listener for the input change on the slider
    slider.addEventListener('input', function () {
        updateTimeDisplay(slider.value);
    });

    // When the "Summon Ze Demons For Me" button is clicked, start the jumpscare sequence
    summonButton.addEventListener('click', function () {
        const totalDuration = slider.value * 60 * 1000; // Convert minutes to milliseconds
        startJumpscareSequence(totalDuration);
    });
});

// Function to update the value with hours and minutes
function updateTimeDisplay(value) {
    let hours = Math.floor(value / 60); // Calculate hours
    let minutes = value % 60; // Calculate remaining minutes

    // Format the time display
    let formattedTime = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;


    // Update the time
    document.getElementById('rangeValue').innerText = formattedTime;
}