//'use strict';
window.addEventListener('DOMContentLoaded', function() {

    class Options {
        constructor(height = '', width = '', background = '', fontSize = '', textAlign = ''){
            this.height = height;
            this.width = width;
            this.background = background;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv(textDiv = ''){
            let newDiv = document.createElement('div');
            newDiv.textContent = textDiv;
            let textCSS = '';
            for(let key in this){
                if (this[key]) textCSS += `${key}: ${this[key]};\n`;
            };
            console.log(textCSS);
            newDiv.style.cssText = textCSS;
            document.body.appendChild(newDiv);
        }
    };

    let newDiv = new Options('150px', '150px', 'red', '24px', 'center');
    newDiv.createDiv('Новый Div');

});


// ) Используя синтаксис ES6 в отдельном документе:
// •        Создать класс options
// •        Он должен содержать свойства: height, width, bg, fontSize, textAlign
// •        Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст
//           и при помощи cssText изменять свой стиль из переданных параметров
// •        Создать новый объект через класс
// •        Вызвать его метод и получить элемент на странице
