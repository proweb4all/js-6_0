//'use strict';
window.addEventListener('DOMContentLoaded', function() {

    class Options {
        constructor(height = '', width = '', bg = '', fontSize = '', textAlign = ''){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv(textDiv = ''){
            let newDiv = document.createElement('div');
            let textCSS = '';
            if (this.height) textCSS += `height: ${this.height};\n`;
            if (this.width) textCSS += `width: ${this.width};\n`;
            if (this.bg) textCSS += `background: ${this.bg};\n`;
            if (this.fontSize) textCSS += `font-size: ${this.fontSize};\n`;
            if (this.textAlign) textCSS += `text-align: ${this.textAlign};`;
            newDiv.style.cssText = textCSS;
            newDiv.textContent = textDiv;
            document.body.appendChild(newDiv);
        }
    };

    let newDiv = new Options('150px', '150px', 'red', '24px', 'center');
    newDiv.createDiv('Новый Div');
    newDiv = new Options('newDiv');
    newDiv.createDiv();
    newDiv = new Options();
    newDiv.createDiv();
});