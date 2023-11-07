const images = [
     "./img/01.jpg", 
     "./img/02.jpg",
     "./img/03.jpg",
     "./img/04.jpg",
     "./img/05.jpg"

];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(images);


const slidesElem = document.querySelector(".items");

 for (let i = 0; i < images.length; i++) {
     const curImage = images[i];

     if (i === 0) {
        slidesElem.innerHTML += `<div class="item active">
        <img src="${curImage}" alt="">
    </div>`;
     } else {
        slidesElem.innerHTML += `<div class="item">
            <img src="${curImage}" alt="">
        </div>`;
     }
 }


 let imageActive = 0;

 document.querySelector(".next").addEventListener('click', function() {
    console.log('next');

    document.querySelector('.active').classList.remove('active');
    imageActive++;
    document.querySelectorAll('.item')[imageActive].classList.add('active')
 });
 

 document.querySelector(".prev").addEventListener('click', function() {
    console.log('prev');

    document.querySelector('.active').classList.remove('active');
    imageActive--;
    document.querySelectorAll('.item')[imageActive].classList.add('active')
 });


