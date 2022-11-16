// плавный скролл к форме обратной связи

const scrollToFeedback = () => {
  const scrollToFormBtn = document.querySelector('[data-scroll-form]');
  const feedback = document.querySelector('[data-feedback]');
  scrollToFormBtn.addEventListener('click', () => {
    feedback.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  });
};

export {scrollToFeedback};
