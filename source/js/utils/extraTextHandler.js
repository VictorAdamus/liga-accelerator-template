// показать дополнительный текст

const showText = () => {
  const buttonText = document.querySelector('[data-about-btn]');
  const text = document.querySelector('[data-about-text]');
  const textTablet = document.querySelector('[data-text-tablet]');
  const textMobile = document.querySelector('[data-text-mobile]');
  const showExtraText = () => {

    if (textTablet.classList.contains('hide-text')) {
      buttonText.textContent = 'свернуть';
    } else {
      buttonText.textContent = 'подробнее';
    }
    text.classList.toggle('hide-text');
    textTablet.classList.toggle('hide-text');
    textMobile.classList.toggle('hide-text');
  };
  buttonText.addEventListener('click', showExtraText);
};

export { showText };
