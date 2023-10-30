// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Toggling class for sticky navigation
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Show/hide element based on scroll position
window.addEventListener('scroll', function () {
    const firstSection = document.getElementById('index');
    const rightCornerImage = document.querySelector('.right-corner-image');
    if (firstSection && window.scrollY < firstSection.offsetHeight) {
        rightCornerImage.classList.remove('hidden');
    } else {
        rightCornerImage.classList.add('hidden');
    }
});

// Text rotation for headings
const strings = [
    "Frontend Developer",
    "Backend Developer",
    "IOT Developer",
    "Software Developer"
];

let currentIndex = 0;
const interval = 3000; // Change headings every 3 seconds

function changeHeading() {
    const changingHeading = document.getElementById("changingHeading");
    changingHeading.textContent = strings[currentIndex];
    currentIndex = (currentIndex + 1) % strings.length;
}

setInterval(changeHeading, interval);

// Function to scroll to the "About" section
function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Show the "about-image" when it's in the viewport
function showAboutImage() {
    const aboutImage = document.querySelector('.about-image');
    if (isInViewport(aboutImage)) {
        aboutImage.style.display = 'block';
    }
}

// Check for visibility on page load and scroll events
window.addEventListener('load', showAboutImage);
window.addEventListener('scroll', showAboutImage);
