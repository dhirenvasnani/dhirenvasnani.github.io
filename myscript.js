document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});

$(document).ready(function() {
  $("a.nav-link").click(function(event) {
    event.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    }, 500, function() {
      console.log("Scroll animation completed.");
    });
  });

  $('.logo').click(function(e) {
    e.preventDefault();
    console.log("Logo clicked.");
    $('html, body').animate({
      scrollTop: 0
    }, 1000, function() {
      console.log("Scroll to top animation completed.");
    });
  });
});
