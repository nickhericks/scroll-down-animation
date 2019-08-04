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
.wave {
  animation-name: wave-animation;  /* Name of @keyframes element below */
  animation-duration: .75s;  /* Wave speed */
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-play-state: paused;
  transform-origin: 70% 70%;  /* Pivot from bottom-left palm */
  display: inline-block;
  font-size: 8rem;
}

.wave:hover {
  animation-play-state: running; /* Play animation on mouse hover */
}

@keyframes wave-animation {
  0% { transform: rotate( 0deg ) }
  25% { transform: rotate( -10deg ) }
  75% { transform: rotate( 12deg ) }
  100% { transform: rotate( 0deg ) }
}
```
