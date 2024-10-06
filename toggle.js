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

// toggle.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const logoLink = document.getElementById("logoLink");
    const logoImage = document.getElementById("logoImage");
    
    // Change image on hover only if the logo is inactive
    logoImage.addEventListener("mouseover", function () {
        if (!logoImage.classList.contains("active")) {
            logoImage.src = "Logo/logo_hover.png";
        }
    });
    
    // Revert to the inactive or active image on mouse out
    logoImage.addEventListener("mouseout", function () {
        if (logoImage.classList.contains("active")) {
            logoImage.src = "Logo/logo_active.png";
        } else {
            logoImage.src = "Logo/logo_inactive.png";
        }
    });
    
    // Toggle image and active class on click
    logoLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
    
        // Toggle the 'active' class on the logo image
        logoImage.classList.toggle("active");
    
        // Change the image source immediately based on the active state
        if (logoImage.classList.contains("active")) {
            logoImage.src = "Logo/logo_active.png";
        } else {
            logoImage.src = "Logo/logo_inactive.png";
        }
    });
    
});