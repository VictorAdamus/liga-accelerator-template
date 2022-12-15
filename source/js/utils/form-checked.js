const formChecked = () => {
  const submitButtonIndex = document.querySelector('[data-submit-index]');
  const inputNameIndex = document.querySelector('[data-index-name]');
  const inputPhoneIndex = document.querySelector('[data-index-phone]');
  const submitButtonModal = document.querySelector('[data-submit-modal]');
  const inputNameModal = document.querySelector('[data-modal-name]');
  const inputPhoneModal = document.querySelector('[data-modal-phone]');


  submitButtonIndex.addEventListener('click', (e) => {
    if (inputNameIndex.value.length < 1) {
      e.preventDefault();
      inputNameIndex.style.outline = '2px solid #041827';
    } else if
      (inputPhoneIndex.value.length < 16) {
      e.preventDefault();
      inputPhoneIndex.style.outline = '2px solid #041827';
    }
    return;
  });

  submitButtonModal.addEventListener('click', (e) => {
    if (inputNameModal.value.length < 1) {
      e.preventDefault();
      inputNameModal.style.border = '1px solid #041827';
    } else if
      (inputPhoneModal.value.length < 16) {
      e.preventDefault();
      inputPhoneModal.style.border = '1px solid #041827';
    }
    return;
  });

};

export {formChecked};
