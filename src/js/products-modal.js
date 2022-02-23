var elementA = document.getElementById('first-mod');
var btnProd = document.getElementById('first-btn');

btnProd.addEventListener('click', function () {
  if (elementA.classList.contains('products-modal--first')) {
    elementA.classList.remove('products-modal--first');
    elementA.classList.add('products-modal--go');

    btnProd.classList.remove('products-list__button--first');
    btnProd.classList.add('products-list__button--rotate');
  } else if (elementA.classList.contains('products-modal--go')) {
    elementA.classList.remove('products-modal--go');
    elementA.classList.add('products-modal--back');
    btnProd.classList.remove('products-list__button--rotate');
    btnProd.classList.add('products-list__button--back');
  } else {
    elementA.classList.remove('products-modal--back');
    elementA.classList.add('products-modal--go');

    btnProd.classList.remove('products-list__button--back');
    btnProd.classList.add('products-list__button');
  }
});
var elementB = document.getElementById('second-mod');
var btnProd1 = document.getElementById('second-btn');

btnProd1.addEventListener('click', function () {
  if (elementB.classList.contains('products-modal--first')) {
    elementB.classList.remove('products-modal--first');
    elementB.classList.add('products-modal--go');

    btnProd1.classList.remove('products-list__button--first');
    btnProd1.classList.add('products-list__button--rotate');
  } else if (elementB.classList.contains('products-modal--go')) {
    elementB.classList.remove('products-modal--go');
    elementB.classList.add('products-modal--back');
    btnProd1.classList.remove('products-list__button--rotate');
    btnProd1.classList.add('products-list__button--back');
  } else {
    elementB.classList.remove('products-modal--back');
    elementB.classList.add('products-modal--go');

    btnProd1.classList.remove('products-list__button--back');
    btnProd1.classList.add('products-list__button');
  }
});
var elementC = document.getElementById('third-mod');
var btnProd2 = document.getElementById('third-btn');

btnProd2.addEventListener('click', function () {
  if (elementC.classList.contains('products-modal--first')) {
    elementC.classList.remove('products-modal--first');
    elementC.classList.add('products-modal--go');

    btnProd2.classList.remove('products-list__button--first');
    btnProd2.classList.add('products-list__button--rotate');
  } else if (elementC.classList.contains('products-modal--go')) {
    elementC.classList.remove('products-modal--go');
    elementC.classList.add('products-modal--back');
    btnProd2.classList.remove('products-list__button--rotate');
    btnProd2.classList.add('products-list__button--back');
  } else {
    elementC.classList.remove('products-modal--back');
    elementC.classList.add('products-modal--go');

    btnProd2.classList.remove('products-list__button--back');
    btnProd2.classList.add('products-list__button');
  }
});
