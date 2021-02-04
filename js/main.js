'use strict';

// eslint-disable-next-line no-unused-vars
const COMMENT_LENGTH = 140;

// eslint-disable-next-line no-unused-vars
let text = '';

// eslint-disable-next-line no-unused-vars
const getRandomNumber = function getRandomIntInclusive(min, max)  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line no-unused-vars
const verifyStringLength = function (string, maxLength) {
  return string.length <= maxLength;
}
