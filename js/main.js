'use strict';
// eslint-disable-next-line
const COMMENT_LENGTH = 140; // eslint-disable-next-line
let text = ''; // eslint-disable-next-line
const getRandomNumber = function getRandomIntInclusive(min, max)  { // eslint-disable-next-line
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // eslint-disable-next-line
const verifyStringLength = function (string, maxLength) { // eslint-disable-next-line
  return string.length <= maxLength;
}
