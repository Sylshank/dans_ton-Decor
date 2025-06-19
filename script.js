// Activate SimpleLightbox plugin for portfolio items
new SimpleLightbox({
    elements: '#portfolio a.portfolio-box'
});


// Button action to go to another page
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("goToPage");
  
    if (button) {
      button.addEventListener("click", function () {
        // Change this to the page you want to go to
        window.location.href = "questionnaire.html";
      });
    }
  });