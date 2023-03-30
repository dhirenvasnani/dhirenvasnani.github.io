// Add event listener to prevent right-click menu from appearing
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Add event listener to prevent drag and drop action
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
}); 

$(document).ready(function() {
  // Show button when user scrolls down a certain amount
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // Add smooth scrolling animation when button is clicked
  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
});
