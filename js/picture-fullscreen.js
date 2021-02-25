import { isEscEvent } from './util.js';
import { createFullScreenPicture} from './picture-list.js';

const pictureList = document.querySelector('.pictures');
const pictureModal = document.querySelector('.big-picture');
const pictureModalClose = document.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

pictureList.addEventListener('click', (evt) => {
  if (evt.target.parentElement.classList.contains('picture')) {
    openPictureModal(evt.target.parentElement);
  } else if (evt.target.classList.contains('picture')) {
    openPictureModal(evt.target);
  }
});

const openPictureModal = (element) => {
  createFullScreenPicture(element.id);
  pictureModal.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  pictureModalClose.addEventListener('click', closePictureModal);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePictureModal = () => {
  pictureModal.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
};
