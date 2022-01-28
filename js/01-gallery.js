import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEBox = document.querySelector('.gallery');
for (const { preview, original, description } of galleryItems) {
   galleryEBox.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
   );
}
galleryEBox.insertAdjacentHTML(
   'afterend',
   `<div class="basicLightbox"><img class="basicLightbox__placeholder" src="" alt=""/></div>`
);
const basicLightboxEL = document.querySelector('.basicLightbox');
const basicLightboxImg = document.querySelector('.basicLightbox__placeholder');
galleryEBox.addEventListener(
   'click',
   event => {
      if (event.target.closest('.gallery__link')) {
         event.preventDefault();
         basicLightboxImg.src = event.target.closest('.gallery__link').href;
         basicLightboxEL.classList.add('basicLightbox--visible');
      }
   },
   false
);
basicLightboxEL.addEventListener('click', () => {
   basicLightboxEL.classList.remove('basicLightbox--visible');
});
document.addEventListener('keyup', event => {
   if ((event.code === 'Escape') & (basicLightboxEL.classList[1] === 'basicLightbox--visible')) {
      basicLightboxEL.classList.remove('basicLightbox--visible');
   }
});
