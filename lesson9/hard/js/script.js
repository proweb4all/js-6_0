'use strict';

window.addEventListener('DOMContentLoaded', function() {

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        nameAnimation = '',
        oso = 0,
        typeAnimation = browser();
        document.querySelector('h1').textContent = nameAnimation;
    
    // Открытие модального окна
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        // CSS-анимация
        if (typeAnimation == 1) {
            this.classList.add('more-splash');
            overlay.classList.add('fade'); 
        };
        // JS-анимация
        if (typeAnimation == 2) {
            overlay.style.opacity = '0';
            oso = 0;
            stepJS();
        };
        document.body.style.overflow = 'hidden';
    });

    // Закрытие модального окна
    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        if (typeAnimation == 1) {
            more.classList.remove('more-splash');
        };
            document.body.style.overflow = '';
    });

    // Определение типа анимации
    function browser(){
        if (window.screen.width <= 800) {
            nameAnimation = 'Без анимации';
            return 0;
        };
        let ua = navigator.userAgent.toLowerCase();
        console.log(ua);
        if (ua.search(/msie/) > -1 || ua.search(/trident/) > -1 || ua.search(/edge/) > -1) {
            nameAnimation = 'CSS-анимация';
            return 1;
        } else {
            nameAnimation = 'JS-анимация';
            return 2;
        };
    };

    // JS-анимация (opacity)
    function stepJS() {
            requestAnimationFrame(stepJS);
            oso += .02;
            overlay.style.opacity = oso;
            if (oso == 1) {return;};
    };

    // polyfill для requestAnimationFrame
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());


});