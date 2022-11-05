// показать дополнительный текст
const extraTextMobile = document.querySelector('.about--extra-mobile');
const extraTextDesktop = document.querySelector('.about--extra-desktop');
const extraTextButton = document.querySelector('.btn--detailed');
const showExtraText = () => {
  if (window.innerWidth < 370) {
    if (!extraTextButton.classList.contains('btn--detailed-close')) {
      extraTextMobile.style.display = 'block';
      extraTextDesktop.style.display = 'block';
      extraTextButton.classList.add('btn--detailed-close');
      extraTextButton.textContent = 'свернуть';
    } else {
      extraTextMobile.style.display = 'none';
      extraTextButton.classList.remove('btn--detailed-close');
      extraTextButton.textContent = 'показать';
    }
  } else {
    extraTextMobile.style.display = 'block';
    if (!extraTextButton.classList.contains('btn--detailed-close')) {
      extraTextDesktop.style.display = 'block';
      extraTextButton.classList.add('btn--detailed-close');
      extraTextButton.textContent = 'свернуть';
    } else {
      extraTextDesktop.style.display = 'none';
      extraTextButton.classList.remove('btn--detailed-close');
      extraTextButton.textContent = 'подробнее';
    }
  }
};

const extraTextHandler = () => {
  extraTextButton.addEventListener('click', showExtraText);
};


export { extraTextHandler };
