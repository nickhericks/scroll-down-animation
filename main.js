// select scroll down helper emoji
const arrow = document.querySelector('.arrow');

// delay for scroll reminder down-pointing emoji
const scrollDelay = 7000;

// Display down-pointing emoji to tell user to scroll down
window.setTimeout( function() {
	arrow.style.opacity = '1';
}, scrollDelay);