(function() {
  var _byClass = function(className) { return document.getElementsByClassName(className) }
  var isExists = function(arr) { return !!arr.length }

  var pageHeader = _byClass('page-header'),
      mainNav = _byClass('main-nav');

  if ( !isExists(pageHeader) && !isExists(mainNav) ) return;
  mainNav[0].addEventListener('click', function() {
    this.classList.toggle('_showed');
  });

})();