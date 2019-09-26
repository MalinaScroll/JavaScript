var clock1 = document.getElementById('clock1');
var b1 = document.getElementById('box1');
var hex1 = document.getElementById('hex1');

function hexClock1() {
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    var clockStr = hours + " : " + minutes + " : " + seconds;
    var hexCodeStr = "#" + seconds + minutes + hours;

    clock1.textContent = clockStr;
    document.body.style.backgroundColor = hexCodeStr;
    hex1.textContent = hexCodeStr;
}

var update1 = setInterval(hexClock1, 1000);