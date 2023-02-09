document.addEventListener("contextmenu", function(event) {
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


