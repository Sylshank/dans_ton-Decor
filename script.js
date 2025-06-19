

// Button action to go to another page
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("goToPage");
    if (button) {
      button.addEventListener("click", function () {
        // Redirect to the correct path including the folder
        window.location.href = "questionnaire.html"; // ✅ If in the same folder
      });
    }
  });



  // Activate SimpleLightbox plugin for portfolio items
new SimpleLightbox({
    elements: '#portfolio a.portfolio-box'
});