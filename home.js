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
        var isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 100;
            var sectionBottom = sectionTop + section.offsetHeight;

            if ((scrollPosition >= sectionTop && scrollPosition < sectionBottom) || isBottom) {
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                var targetLink;
                if (isBottom) {
                    // If scrolled to the bottom, activate the 'Contact' link
                    targetLink = document.querySelector('a[href="#contact"]');
                } else {
                    targetLink = document.querySelector('a[href="#' + section.id + '"]');
                }

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