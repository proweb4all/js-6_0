let itemMenu = document.createElement('li');
itemMenu.classList.add('menu-item');
itemMenu.textContent = 'Пятый пункт';
document.querySelector('.menu').appendChild(itemMenu);
let liRemove = document.querySelectorAll('.menu-item')[1];
liRemove.parentNode.insertBefore(liRemove, document.querySelectorAll('.menu-item')[3]);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

document.querySelector('#title').textContent = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

document.getElementById('prompt').textContent = prompt('Пожалуйста, кратко опишите Ваше отношение к технике Apple: ');