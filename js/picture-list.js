import { getPublicPhotos } from './create-comment.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = getPublicPhotos;
const pictureListFragment = document.createDocumentFragment();

pictures.forEach((item) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = item.url ;
  pictureElement.querySelector('.picture__likes').textContent = item.likes;
  pictureElement.querySelector('.picture__comments').textContent = item.comments.length;

  pictureListFragment.appendChild(pictureElement);
})

pictureListElement.appendChild(pictureListFragment);
