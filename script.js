// ================================
// PORTFOLIO JAVASCRIPT
// ================================

// Show a message when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
});


// ================================
// PROJECT BUTTONS
// ================================

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        if (button.getAttribute("href") === "#") {
            event.preventDefault();

            alert("Project link will be added soon!");
        }

    });

});


// ================================
// RESUME BUTTON
// ================================

