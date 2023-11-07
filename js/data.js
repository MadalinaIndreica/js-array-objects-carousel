const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(images);
const itemsElem = document.querySelector(".items");
 


for (let i = 0; i < images.length; i++) {
    const curImage = images[i];

    if (i === 0) {
       itemsElem.innerHTML +=  `  
           <div class="item active">
               <img src="images/${curImage.image}" alt="">
               <div class="image-text">
                   <h3 class="title">${curImage.title}</h3>
                   <p class="text">${curImage.text}</p>
               </div>
           </div>`;
    } else {
        itemsElem.innerHTML +=  `  
        <div class="item ">
            <img src="images/${curImage.image}" alt="">
            <div class="image-text">
                <h3 class="title">${curImage.title}</h3>
                <p class="text">${curImage.text}</p>
            </div>
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
