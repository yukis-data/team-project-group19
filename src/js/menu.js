(() => {
  const refs = {
    openModalBtn: document.querySelector('.header__btn__menu'),
    closeModalBtn: document.querySelector('.header__modal__btn-close'),
    modal: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
