import { getPublicPhotos } from './create-comment.js';

const pictureList = document.querySelector('.pictures');
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

pictureList.appendChild(pictureListFragment);

const createFullScreenPicture = (id) => {
  let currentPicture = getPublicPhotos.find(item => item.id === +id);

  const modalPicturePreview = document.querySelector('.big-picture__preview');
  modalPicturePreview.querySelector('.big-picture__img img').src = currentPicture.url;
  modalPicturePreview.querySelector('.likes-count').textContent = currentPicture.likes;
  modalPicturePreview.querySelector('.comments-count').textContent = currentPicture.comments.length;
  modalPicturePreview.querySelector('.social__caption').textContent = currentPicture.description;
  createComments(currentPicture);
}

const createComments = (picture) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentListFragment = document.createDocumentFragment();
  picture.comments.forEach((item) => {
    const commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = item.avatar ;
    commentElement.querySelector('.social__picture').alt = item.name;
    commentElement.querySelector('.social__text').textContent = item.message;

    commentListFragment.appendChild(commentElement);
  });

  const commentList = document.querySelector('.social__comments');
  const comments = commentList.children;

  Array.from(comments).forEach((item) => {
    item.remove();
  });

  commentList.appendChild(commentListFragment);
}

export { createFullScreenPicture };
