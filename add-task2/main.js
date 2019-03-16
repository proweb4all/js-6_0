'use strict';
let wrapPhone = document.querySelector('.popup__call-phoneblock');
let blocksSwitch = document.querySelectorAll('.popup__call-wrap');
blocksSwitch.forEach(function(elem){
    elem.addEventListener('click', function(e){
        if (elem.parentNode.classList.contains('popup__call-phone-hidden')) {return};
        let papa1 = document.querySelectorAll('.popup__call-phone')[1],
            svg0 = elem.querySelector(".popup__call-svg");
        if (papa1.style.visibility == 'hidden'){
            papa1.style.visibility = 'visible';
            svg0.style.transform = 'rotate(180deg)';
        } else {
            papa1.style.visibility = 'hidden';
            svg0.style.transform = 'rotate(0deg)';
        };
    });
});

wrapPhone.addEventListener('click', function(e) {
    let target = e.target;
    while (target != this) {
        if (target.classList.contains('popup__call-phone-hidden')) {
            let firstEl = this.firstElementChild;
            target.classList.remove('popup__call-phone-hidden');
            firstEl.classList.add('popup__call-phone-hidden');
            firstEl.style.visibility = 'hidden';
            target.querySelector(".popup__call-svg").style.transform = 'rotate(0deg)';
            this.insertBefore(target, this.firstElementChild);
            return;
        };
        target = target.parentNode;
    };
});
