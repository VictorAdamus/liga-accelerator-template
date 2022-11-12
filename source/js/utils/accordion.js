// список-аккордион

const fun = () => {
  const accordionButtons = document.querySelectorAll('[data-footer-title]');
  if (accordionButtons) {
    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('footer__title--acc')) {
          button.nextElementSibling.style.display = 'none';
          button.classList.remove('footer__title--acc');
          button.style.magrinBottom = '0';
        } else {
          button.nextElementSibling.style.display = 'block';
          button.classList.add('footer__title--acc');
          button.style.magrinBottom = '15px';
        }
      });
    });
  }
  return;
};

const accordion = () => {
  const accordionList = document.querySelectorAll('[data-footer-list]');
  if (document.documentElement.clientWidth < 767) {
    accordionList.forEach((element) => {
      element.style.display = 'none';
    });
    fun();
  }
  return;
};


export { accordion };
