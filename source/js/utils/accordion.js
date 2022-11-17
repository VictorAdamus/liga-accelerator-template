// список-аккордион

const accordionToggle = () => {
  const accordionButtons = document.querySelectorAll('[data-footer-title]');
  if (accordionButtons && document.documentElement.clientWidth < 768) {
    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('footer__title--acc')) {
          button.nextElementSibling.classList.toggle('footer__list--acc');
          button.classList.toggle('footer__title--acc');
          button.style.magrinBottom = '0';
        } else {
          button.nextElementSibling.classList.toggle('footer__list--acc');
          button.classList.toggle('footer__title--acc');
          button.style.magrinBottom = '15px';
        }
      });
    });
  }
  return;
};

export {accordionToggle};
