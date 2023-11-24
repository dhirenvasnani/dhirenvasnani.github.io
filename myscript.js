// Prevent right-click menu from appearing
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Prevent drag and drop action
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
