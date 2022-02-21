(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-modal-open]'),
    closeModalBtn: document.querySelector('[data-franchise-modal-close]'),
    modal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('franchise-backdrop--hidden');
  }
})();

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  return message;
}
