// Wrap the JavaScript code in a window load event
window.addEventListener('load', function() {
    window.addEventListener('resize', setZoom);
    setZoom();
});

function setZoom() {
    const screenWidth = window.innerWidth;
    let zoomLevel = 1; // Default zoom level

    if (screenWidth > 1500) {
        zoomLevel = screenWidth / 1000;
        zoomLevel = zoomLevel - 0.5; 
        document.body.style.zoom = zoomLevel;
        console.log("Screen Zoom Set to: " + zoomLevel);
}
}

document.addEventListener('DOMContentLoaded', function () {
    // Navigation click handling
    var navLinks = document.querySelectorAll('.custom-nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var sections = document.querySelectorAll('.section');

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 100;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                var targetLink = document.querySelector('a[href="#' + section.id + '"]');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    });

    // Typed.js initialization
    const typedElement = document.querySelector('.typed');

    if (typedElement) {
        let typed_strings = typedElement.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');

        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    } else {
        console.error("Element with class 'typed' not found.");
    }
});

// Prevent right-click menu from appearing
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Prevent drag and drop action
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
