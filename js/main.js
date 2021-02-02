'use strict';

const COMMENT_LENGTH = 140;
let text = '';

const getRandomNumber = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const verifyStringLength = function (string, maxLength) {
  return string.length <= maxLength;
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
