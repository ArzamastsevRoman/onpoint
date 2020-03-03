import '../index.css'

import '../../block/body/body.css'
import '../../block/container/container.css'
import '../../block/content/content.css'
import '../../block/carousel/carousel.css'
import '../../block/arrow/arrow.css'
import '../../block/box/box.css'
import '../../block/slider/slider.css'

/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of document.querySelectorAll('li')) {
li.style.position = 'relative';
li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
i++;
}

let width = 1024;
let height = 768; // высота картинки
let count = 1; // видимое количество изображений

let list = document.querySelector('.carousel');
let listElems = list.querySelectorAll('.carousel__page');

let position = 0; // положение ленты прокрутки

const buttonTop = document.querySelector('.arrow_top');
buttonTop.onclick = function() {
    // сдвиг влево
    position += height * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginTop = position + 'px';
    if (position === 0) {
        buttonTop.style.display = "none";
    } else if (position > -1500) {
        buttonBottom.style.display = "flex";
    }
};

const buttonBottom = document.querySelector('.arrow_bottom');
buttonBottom.onclick = function() {
    // сдвиг вправо
    position -= height * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -height * (listElems.length - count));
    list.style.marginTop = position + 'px';
    if (position === 0) {
        buttonTop.style.display = "none";
    } else if (position < -1500) {
        buttonBottom.style.display = "none";
    } else if (position > -1500) {
        buttonBottom.style.display = "flex";
        buttonTop.style.display = "flex";
    }
};


const point1 = document.querySelector('.slider__point_1');
point1.onclick = function() {
    if (document.querySelector('.slider__pointer')) {
        document.querySelector('.slider__pointer').remove();
    }
    const img = document.createElement('img');
    img.classList.add('slider__pointer')
    img.setAttribute('src', `./images/Polygon.png`);
    point1.appendChild(img);
    const page3Content = document.querySelector('.carousel__page-content');
    page3Content.setAttribute('src', `./images/page3-1.png`);
};

const point2 = document.querySelector('.slider__point_2');
point2.onclick = function() {
    if (document.querySelector('.slider__pointer')) {
        document.querySelector('.slider__pointer').remove();
    }
    const img = document.createElement('img');
    img.classList.add('slider__pointer')
    img.setAttribute('src', `./images/Polygon.png`);
    point2.appendChild(img);
    const page3Content = document.querySelector('.carousel__page-content');
    page3Content.setAttribute('src', `./images/page3-2.png`);
};

const point3 = document.querySelector('.slider__point_3');
point3.onclick = function() {
    if (document.querySelector('.slider__pointer')) {
        document.querySelector('.slider__pointer').remove();
    }
    const img = document.createElement('img');
    img.classList.add('slider__pointer')
    img.setAttribute('src', `./images/Polygon.png`);
    point3.appendChild(img);
    const page3Content = document.querySelector('.carousel__page-content');
    page3Content.setAttribute('src', `./images/page3-3.png`);
};

//Не удалось реализовать функцию скрола из-за того, что не смог вычислить величину скрола(
    
// window.addEventListener('scroll', function() {
//     const step=Math.max(document.documentElement.scrollTop);
//     console.log(step)
//     console.log('Текущая прокрутка сверху: ' + window.pageYOffset)
//     console.log(`document.documentElement.scrollTop ${document.documentElement.scrollTop}`)
   
//     if (document.documentElement.scrollTop > step) {
//         position -= height * count;
//         position = Math.max(position, -height * (listElems.length - count));
//         list.style.marginTop = position + 'px';
//     } else if (document.documentElement.scrollTop < 1) {
//         position += height * count;
//         position = Math.min(position, 0)
//         list.style.marginTop = position + 'px';
//     }
// });




