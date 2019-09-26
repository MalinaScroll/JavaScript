var clock = document.getElementById('clock');
var hexCode = document.getElementById('hexcode');


function hexClock(){
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    
    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' . ' + seconds;
    var hexCodeStr = "#" + hours + minutes + seconds;

    clock.textContent = clockStr;
    hexCode.textContent = hexCodeStr

    document.body.style.backgroundColor = hexCodeStr;
}
var update = setInterval(hexClock, 1000);
