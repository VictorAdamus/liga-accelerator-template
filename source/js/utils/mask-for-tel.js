// маска для номера телефона в форме обратной связи
const maskForTel = () => {
  const inputTelList = document.querySelectorAll('[data-input-name="tel"]');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  for (let i = 0; i < inputTelList.length; i++) {
    const mask = IMask(inputTelList[i], maskOptions);
  }
};

export { maskForTel };
