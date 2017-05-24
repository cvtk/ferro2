(function() {
  var triggers = document.querySelectorAll('[data-cart-trigger]');

  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function() {
      var pageCart = document.getElementsByClassName('page-cart')[0];
      pageCart.classList.toggle('_hidden');
    }, false);
  }
})();


