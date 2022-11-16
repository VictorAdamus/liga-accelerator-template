// показать дополнительный текст

const showText = () => {
  const buttonText = document.querySelector('[data-about-btn]');
  const text = document.querySelector('[data-about-text]');
  const textTablet = document.querySelector('[data-text-tablet]');
  const textMobile = document.querySelector('[data-text-mobile]');
  if (buttonText && text && textTablet && textMobile) {
    const showExtraText = () => {
      if (!text.classList.contains('hide-text')) {
        buttonText.textContent = 'свернуть';
        textTablet.style.display = 'block';
        textMobile.style.display = 'block';
        text.classList.add('hide-text');
      } else {
        buttonText.textContent = 'подробнее';
        textMobile.style.display = 'none';
        text.classList.remove('hide-text');
        if (document.documentElement.clientWidth > 768) {
          textTablet.style.display = 'block';
        } else {
          textTablet.style.display = 'none';
        }
      }
    };
    buttonText.addEventListener('click', showExtraText);
  }
  return;
};

export {showText};
