# JavaScript 30
## 1 - JavaScript Drum Kit
- kbd
- audio 
- data-key=""
- document.querySelector --> `audio[data-key="${}"]`
- document.querySelector --> `.key[data-key="${}"]`
- addEventListener --> 'transitionend'
## 2 - JavaScript Clock
- background-image: linear-gradient(to right bottom, rgba(87,38,38, .07), rgba(100,72,55,0.7)), url(./img/ClockJS.jpg);
- transform-origin: 100%;
- transition-timing-function:
- style.transform = `rotate(${}deg)`
## 3 - CSS Variables
- input --> type="range" 
- input --> type="color" 
- CSS --> :root {}
- CSS var --> --base: #95D600;
- document.documentElement.style.setProperty --> `--${this.name}`, this.value + suffix
- addEventListener --> 'change'
## 4 - Array Cardion Day
- map()
- reduce()
- sort()
- filter()
## 5 - Flex Panels Image Gallery
- transition: --> flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11)
- Nested Flex Box
## 6 - Ajax Type Ahead --> Auto Fill / suggested items, cities, etc
- fetch(endpoint).then(blob => blob.json()).then(data => console.log(data));
- new RegExp(this.value, 'gi') --> g for global, i for case insesitive
## 7 - Array Cardio Day 2
- some()
- every()
- find()
- findIndex()
## 8 Fun With HTML 5 Canvas
- getContext('') 
- globalCompositeOperation
- beginPath();
- moveTo(lastX, lastY);
- lineTo(e.offsetX, e.offsetY);
- stroke();
- addEventListener --> 'mousemove'
- addEventListener --> 'mousedown'
- addEventListener --> 'mouseup'
- addEventListener --> 'mouseout'
## 9 14 Must Know Dev Tools Tricks
- Regular
- Interpolated
- Styled
- Warning
- Error
- Info
- Testing
- Clearing
- Viewing DOM Elements
- Grouping together
- Counting
- Timing
# 10 Hold Shift to Check Multiple Checkboxes
- Interesting solution
# 11 - Custome HTML5 Video Player
- video
- addEventListener --> 'play'
- addEventListener --> 'pause' 
- addEventListener --> 'timeupdate'
- video['method']()
- video.currentTime