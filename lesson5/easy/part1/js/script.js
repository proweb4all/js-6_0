let itemMenu = document.createElement('li');
itemMenu.classList.add('menu-item');
itemMenu.textContent = 'Пятый пункт';
document.querySelector('.menu').appendChild(itemMenu);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

document.querySelector('#title').textContent = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

document.getElementById('prompt').textContent = prompt('Пожалуйста, кратко опишите Ваше отношение к технике Apple: ');