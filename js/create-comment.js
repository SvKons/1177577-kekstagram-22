import {getRandomNumber} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Максим',
  'Cвета',
  'Бобик',
  'Шнобик',
  'Кузя',
  'Тузя',
  'Вася',
  'Кока',
  'Ева',
  'Кристина',
  'Гриндевальд',
  'Боб',
  'Том',
  'Клава',
  'Аня',
];

const IMAGE_DESCRIPTIONS = [
  'Метель на улице',
  'На берегу моря',
  'Ночная прогулка',
  'Домашние питомцы',
  'Работа, работа, работа...',
];

const TOTAL_PHOTOS = 25;

const comments = {
  min: 0,
  max: 10,
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const getPhoto = (userId) => {
  return {
    id: userId,
    url: `photos/${userId}.jpg`,
    description: getRandomArrayElement(IMAGE_DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: getPhotoComments(),
  }
};

const getComment = (userId) => {
  return {
    id: userId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

const getPhotoComments = () => {
  let commentsTotal = getRandomNumber(comments.min, comments.max);
  return new Array(commentsTotal).fill(null).map((item, userId) => getComment(++userId));
};

const getPublicPhotos = new Array(TOTAL_PHOTOS).fill(null).map((item, userId) => getPhoto(++userId));

export {getPublicPhotos};
