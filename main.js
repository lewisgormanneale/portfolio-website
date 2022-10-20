function darkModeSwitch() {
    console.log('dark mode switch')
}

function reveal() {
    
}

let i = 0;
let txt = `console.log('Hello World!');`; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    let heading = document.getElementById("demo")
    heading.classList.add("typewriter")
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()