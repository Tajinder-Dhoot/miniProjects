const HOURHAND = document.querySelector('.hours');
const MINUTEHAND = document.querySelector('.minutes');
const SECONDHAND = document.querySelector('.seconds');

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let hoursHandPosition = hours*(360/12) + minutes*(360/720);
let minHandPosition = minutes*(360/60) + seconds*(360/3600);
let secHandPosition = seconds*(360/60);

function runClock() {
    hoursHandPosition = hoursHandPosition + (360/12/60/60);
    minHandPosition = minHandPosition + (360/60/60);
    secHandPosition = secHandPosition + (360/60);

    HOURHAND.style.transform = `rotate(${hoursHandPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minHandPosition}deg)`;
    SECONDHAND.style.transform = "rotate(" + secHandPosition + "deg)";
}

let interval = setInterval(runClock, 1000);
