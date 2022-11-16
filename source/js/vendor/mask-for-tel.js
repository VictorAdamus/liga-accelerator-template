// маска для номера телефона в форме обратной связи
import createMask from 'imask';
const inputTelList = document.querySelectorAll('[data-input-name="tel"]');
const maskForTel = () => {
  inputTelList.forEach((element) => {
    createMask(element, {
      mask: '+{7}(000)000-00-00',
    });
  });
};

maskForTel();
