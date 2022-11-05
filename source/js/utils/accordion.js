// список-аккордион
const accordionButtons = document.querySelectorAll('.footer__title');
const footerMenu = document.querySelector('.footer__menu');
const footerContacts = document.querySelector('.footer__contacts');
const showAccordionList = () => {
  footerMenu.style.display = 'none';
  footerContacts.style.display = 'none';
  accordionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      if (button.classList.contains('accordion--active')) {
        button.nextElementSibling.style.display = 'none';
        button.classList.remove('accordion--active');
        button.style.marginBottom = '0';
      } else {
        button.nextElementSibling.style.display = 'block';
        button.classList.add('accordion--active');
        button.style.marginBottom = '15px';
      }
    })
  );
};


const checkResizeWindow = () => {
  const windowInnerWidth = window.innerWidth;
  if (windowInnerWidth < 375) {
    showAccordionList();
  } else {
    footerMenu.style.display = 'block';
    footerContacts.style.display = 'block';
  }
}

export { checkResizeWindow };
