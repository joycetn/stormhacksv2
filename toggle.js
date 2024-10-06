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

//===========================================================================================================
// Function to start the jumpscare sequence at random intervals
// let isPopupOpen = false; // Flag to track if the pop-up is open

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
     // Check if the pop-up is already open
    //  if (isPopupOpen) {
    //     return; // Exit the function if the pop-up is open
    // }
    
    // isPopupOpen = true; // Set the flag to indicate the pop-up is open                                                                                      

    //==============

    // Get the selected mode
    const selectedMode = document.querySelector('input[name="fav_language"]:checked');
    
    // Determine which mode is selected
    let mode = "";
    if (selectedMode) {
        mode = selectedMode.value; // Get the value of the selected radio button
    }

     // Open the popup.html as a new window
    const popupWidth = 600;  // Set the desired width of the pop-up
    const popupHeight = 400;  // Set the desired height of the pop-up
    const left = (screen.width / 2) - (popupWidth / 2); // Center the pop-up horizontally
    const top = (screen.height / 2) - (popupHeight / 2); // Center the pop-up vertically

    const popupWindow = window.open(chrome.runtime.getURL(`popup.html?mode=${mode}`), "Distraction Demon", 
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=no,menubar=no,toolbar=no,status=no`);

    // Close the flag when the window is closed
    // popupWindow.onunload = function() {
    //     isPopupOpen = false; // Reset the flag when the pop-up is closed
    // };
    // Optional: Automatically close the popup after 5 seconds
    // setTimeout(() => {
    //     if (popupWindow) {
    //         popupWindow.close();
    //     }
    // }, 50000); // Pop-up appears for 5 seconds
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


document.querySelectorAll('.tooltip').forEach(item => {
    const tooltip = item.querySelector('.tooltiptext');

    // Show the tooltip on mouse enter
    item.addEventListener('mouseenter', () => {
        tooltip.style.visibility = 'visible'; // Show tooltip
        tooltip.style.opacity = '1'; // Set opacity to 1
    });

    // Hide the tooltip on mouse leave
    item.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden'; // Hide tooltip
        tooltip.style.opacity = '0'; // Set opacity to 0
    });

    // Follow the cursor
    item.addEventListener('mousemove', event => {
        const tooltipWidth = tooltip.offsetWidth; // Get tooltip width
        const tooltipHeight = tooltip.offsetHeight; // Get tooltip height
        
        // Calculate position
        let left = event.pageX + 10; // Default position slightly right
        let top = event.pageY + 10; // Default position slightly down

        // Adjust position if tooltip goes offscreen
        if (left + tooltipWidth > window.innerWidth) {
            left = event.pageX - tooltipWidth - 10; // Move to the left
        }

        if (top + tooltipHeight > window.innerHeight) {
            top = event.pageY - tooltipHeight - 10; // Move above
        }

        // Set tooltip position
        tooltip.style.left = left + 'px'; 
        tooltip.style.top = top + 'px';
    });
});