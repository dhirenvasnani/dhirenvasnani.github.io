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
    }, 500);
  });
});

$(document).ready(function() {
  $('.logo').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});



