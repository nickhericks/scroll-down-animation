# 👇 Animated down-pointing emoji
Down-pointing emoji is animated (with time delay) to reminder user to scroll down.

## View project
 :mag: View live version here: [nickhericks.github.io/scroll-down-animation/](https://nickhericks.github.io/scroll-down-animation/)

## Project details
Because the landing screen on [my website](https://nickhericks.com) takes up the full viewport, I wanted a way to indicate to users that they should simply scroll down to view more content "below the fold." Instead of a simple down arrow I thought it might be fun to use the down-pointing emoji instead. The emoji is time delayed.

## Using the animated hand wave emoji
1. Add the span tag to your HTML file: `	<div class="arrow">👇</div>`

2. Add the following CSS to your project's CSS file:
```CSS
/* down-pointing emoji to remind user of scrolling */
.arrow {
  font-size: 48px;
  display: block;
  opacity: 0;
  transition: opacity 1s ease-in;
  position: absolute;
  bottom: 25px;
  width: 100vw;
  text-align: center;
  animation-name: scroll-down;
  animation-timing-function: ease-in-out;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}

@keyframes scroll-down {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0); }
}
```

3. Add the following JavaScript to your project's JS file:
```javascript
// select scroll down helper emoji
const arrow = document.querySelector('.arrow');

// delay for scroll reminder down-pointing emoji
const scrollDelay = 7000;

// Display down-pointing emoji to tell user to scroll down
window.setTimeout( function() {
	arrow.style.opacity = '1';
}, scrollDelay);
```
