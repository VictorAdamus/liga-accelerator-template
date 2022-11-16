// список-аккордион

const accordionToggle = () => {
  const accordionButtons = document.querySelectorAll('[data-footer-title]');
  if (accordionButtons && document.documentElement.clientWidth < 768) {
    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('footer__title--acc')) {
          button.nextElementSibling.style.display = 'none';
          button.classList.toggle('footer__title--acc');
          button.style.magrinBottom = '0';
        } else {
          button.nextElementSibling.style.display = 'block';
          button.classList.toggle('footer__title--acc');
          button.style.magrinBottom = '15px';
        }
      });
    });
  }
  return;
};

const accordionHandler = () => {
  const accordionList = document.querySelectorAll('[data-footer-list]');
  accordionList.forEach((element) => {
    if (document.documentElement.clientWidth < 768) {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  });
  accordionToggle();
};


export {accordionHandler};
