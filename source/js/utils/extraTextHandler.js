// показать дополнительный текст

const buttonElement = document.querySelector('[data-about-btn]');

const showText = () => {
  const textElement = document.querySelector('[data-about-text]');
  if (buttonElement && textElement) {
    if (textElement.style.display === 'none') {
      textElement.style.display = 'block';
      buttonElement.textContent = 'свернуть';
    } else {
      textElement.style.display = 'none';
      buttonElement.textContent = 'подробнее';
    }
  }
};

const extraTextHandler = () => buttonElement.addEventListener('click', showText);

export { extraTextHandler };
