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


//Get Random Background Image From Array

// List of background images
const backgroundImages = [
  "backgrounds/earth.png",
  "backgrounds/jupiter.png",
  "backgrounds/moon.png",
  "backgrounds/saturn.png",
  "backgrounds/solarsystem.png",
];

// Function to get a random image URL from the array, excluding background3.png for max-width: 720px
function getRandomImage() {
  let filteredImages = backgroundImages;
  if (window.innerWidth <= 720) {
    filteredImages = backgroundImages.filter(image => image !== "backgrounds/solarsystem.png");
  }
  const randomIndex = Math.floor(Math.random() * filteredImages.length);
  return `url("${filteredImages[randomIndex]}")`;
}

// Apply the random background image after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const homeElement = document.querySelector(".home");
  homeElement.style.backgroundImage = getRandomImage();
});

// Code to reveal and hide hidden cards with "View More" button
document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");
    const cards = gridContainer.querySelectorAll(".card");
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const numberOfHiddenCards = cards.length - 5; // Calculate the number of initially hidden cards
    
    // Initially hide all the cards except the first five
    for (let i = 5; i < cards.length; i++) {
        cards[i].classList.add("hidden-card");
    }
    
    // Add event listener to the "View More" button
    viewMoreBtn.addEventListener("click", function() {
        // Toggle the visibility of hidden cards by adding/removing "hidden-card" class
        for (let i = 5; i < cards.length; i++) {
            cards[i].classList.toggle("hidden-card");
        }
        
        // Change the button text based on visibility of hidden cards
        if (viewMoreBtn.innerHTML === 'View More <i class="fa-solid fa-angle-down"></i>') {
            viewMoreBtn.innerHTML = 'View Less <i class="fa-solid fa-angle-up"></i>';
        } else {
            viewMoreBtn.innerHTML = 'View More <i class="fa-solid fa-angle-down"></i>';
        }
    });
});

function mail() {
            const recipientEmail = 'dhirenvasnani@gmail.com';
            const mailtoLink = `mailto:${recipientEmail}`;
            window.location.href = mailtoLink;
}

document.addEventListener('DOMContentLoaded', () => {
  const typedTextElement = document.getElementById('typed-text');
  const textToType = "From Imagination to Reality: Explore the World of My 3D Creations."; // Add your desired text here
  const typingSpeed = 100; // Adjust this value to control the typing speed (lower value = faster)

  let currentIndex = 0;

  function typeText() {
    if (currentIndex < textToType.length) {
      typedTextElement.textContent += textToType.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText();
});

