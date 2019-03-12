//'use strict';
window.addEventListener('DOMContentLoaded', function() {

    let myClock = document.querySelector('h1');

    setTimeout(function run() {
        myClock.textContent = printTime();
        setTimeout(run, 1000);
    }, 1000);

    function printTime() {
        let realTime = new Date(),
            hour = realTime.getHours(),
            minute = realTime.getMinutes(),
            second = realTime.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute  = "0" + minute;
        if (second < 10) second  = "0" + second;
        return hour + ":" + minute + ":" + second; 
    };
});