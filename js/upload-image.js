import { isEscEvent } from './util.js';

const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;

const SCALE_MIN = 25;
const SCALE_MAX = 100;

const GRAYSCALE_MIN = 0;
const GRAYSCALE_MAX = 1;

const GRAYSCALE_STEP = 0.1;

const SEPIA_MIN = 0;
const SEPIA_MAX = 1;
const SEPIA_STEP = 0.1;

const INVERT_MIN = 0;
const INVERT_MAX = 100;
const INVERT_STEP = 1;

const BLUR_MIN = 0;
const BLUR_MAX = 3;
const BLUR_STEP = 0.1;

const BRIGHTNESS_MIN = 1;
const BRIGHTNESS_MAX = 3;
const BRIGHTNESS_STEP = 0.1;

const pictureUpload = document.querySelector('#upload-file');

const pictureUploadModal = document.querySelector('.img-upload__overlay');

const pictureUploadModalClose = document.querySelector('#upload-cancel');

const bodyElement = document.querySelector('body');

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');

const effectList = document.querySelector('.effects__list');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const openPictureUploadModal = () => {
  let currentScaleValue = SCALE_DEFAULT;
  scaleValue.value = `${currentScaleValue}%`;

  pictureUploadModal.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  pictureUploadModalClose.addEventListener('click', closePictureUploadModal);
  document.addEventListener('keydown', onPopupEscKeydown);

  scaleSmaller.addEventListener('click', () => {
    if (currentScaleValue > SCALE_MIN) {
      currentScaleValue -= SCALE_STEP;
      scaleValue.value = `${currentScaleValue}%`;
      picturePreview.style.transform = `scale(${currentScaleValue / 100})`;
    }
  });

  scaleBigger.addEventListener('click', () => {
    if (currentScaleValue < SCALE_MAX) {
      currentScaleValue += SCALE_STEP;
      scaleValue.value = `${currentScaleValue}%`;
      picturePreview.style.transform = `scale(${currentScaleValue / 100})`;
    }
  });

  effectList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('effects__radio')) {
      const currentEffectValue = evt.target.value;

      picturePreview.className = `effects__preview--${currentEffectValue}`;

      if (effectLevelSlider.noUiSlider) {
        effectLevelSlider.noUiSlider.destroy();
      }
      effectLevelValue.value = '';

      switch(currentEffectValue) {
        case 'none':
          picturePreview.style.filter = '';
          break;
        case 'chrome':
          createEffectLevelSlider(GRAYSCALE_MIN, GRAYSCALE_MAX, GRAYSCALE_STEP, currentEffectValue);
          break;
        case 'sepia':
          createEffectLevelSlider(SEPIA_MIN, SEPIA_MAX, SEPIA_STEP, currentEffectValue);
          break;
        case 'marvin':
          createEffectLevelSlider(INVERT_MIN, INVERT_MAX, INVERT_STEP, currentEffectValue);
          break;
        case 'phobos':
          createEffectLevelSlider(BLUR_MIN, BLUR_MAX, BLUR_STEP, currentEffectValue);
          break;
        case 'heat':
          createEffectLevelSlider(BRIGHTNESS_MIN, BRIGHTNESS_MAX, BRIGHTNESS_STEP, currentEffectValue);
          break;
      }
    }
  })
};

pictureUpload.addEventListener('change', openPictureUploadModal);

const closePictureUploadModal = () => {
  pictureUpload.files.FileList = [];

  pictureUploadModal.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePictureUploadModal();
  }
};

const createEffectLevelSlider = (min, max, step, currentEffectValue) => {
  // eslint-disable-next-line no-undef
  noUiSlider.create(effectLevelSlider, {
    range: {
      min: min,
      max: max,
    },

    start: max,
    step: step,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => {
        return parseFloat(value);
      },
    },
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];

    switch(currentEffectValue) {
      case 'chrome':
        picturePreview.style.filter = `grayscale(${values[handle]})`;
        break;
      case 'sepia':
        picturePreview.style.filter = `sepia(${values[handle]})`;
        break;
      case 'marvin':
        picturePreview.style.filter = `invert(${values[handle]}%)`;
        break;
      case 'phobos':
        picturePreview.style.filter = `blur(${values[handle]}px)`;
        break;
      case 'heat':
        picturePreview.style.filter = `brightness(${values[handle]})`;
        break;
    }
  });
};
