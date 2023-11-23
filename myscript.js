// Wrap the JavaScript code in a window load event
window.addEventListener('resize', setZoom);
setZoom();

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

// Prevent right-click menu from appearing
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Prevent drag and drop action
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
