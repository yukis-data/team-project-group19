  document.querySelector('.hero-about__btn').addEventListener('click', function () {
    var elementOne = document.querySelector('.hero-about__add-text');
    var elementTwo = document.querySelector('.hero-about__text');

    if (elementOne.classList.contains('is-hidden')) {
      elementOne.classList.remove('is-hidden');
      elementOne.classList.add('is-active');
      elementTwo.classList.add('is-hidden');
    } else {
      elementOne.classList.add('is-hidden');
      elementOne.classList.remove('is-active');
      elementTwo.classList.remove('is-hidden');
    }
  });
