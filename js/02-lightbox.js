import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEBox = document.querySelector('.gallery');
// create images
const arrImages = galleryItems.map(({ preview, original, description }) => {
   return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/></a>`;
});
galleryEBox.insertAdjacentHTML('beforeend', arrImages.join(''));
// open modal window
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
   gallery.defaultOptions.captionDelay = 250;
});

gallery.on('error.simplelightbox', function (e) {
   console.log(e); // some usefull information
});
