// Add event listener to prevent right-click menu from appearing
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Add event listener to prevent drag and drop action
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});

//Back to Top
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

function scrollToTop() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        const scrollStep = Math.PI / (900 / 15);
        const cosParameter = currentScroll / 2;
        let scrollCount = 0;
        let scrollMargin;
        const scrollInterval = setInterval(function() {
            if (document.documentElement.scrollTop || document.body.scrollTop) {
                scrollCount += 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                document.documentElement.scrollTop -= scrollMargin;
                document.body.scrollTop -= scrollMargin;
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
}