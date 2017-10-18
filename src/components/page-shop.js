document.querySelector('.categories-items') && (function() {
  var categories = document.querySelector('.categories-items'),
      search = document.querySelector('.filter-search > input'),
      currentCategory = '',
      route = window.location.hash.substr(1);

  var selectCategory = function(id) {
    if ( currentCategory != id ) {
      window.location.hash = '#' + id;
      categories.querySelector('._active').classList.remove('_active');
      categories.querySelector("[data-id='" + id + "']").classList.add('_active');
      return id;
    }
    else return currentCategory;
  }

  var ajax = {};
  ajax.x = function () {
      if (typeof XMLHttpRequest !== 'undefined') {
          return new XMLHttpRequest();
      }
      var versions = [
          "MSXML2.XmlHttp.6.0",
          "MSXML2.XmlHttp.5.0",
          "MSXML2.XmlHttp.4.0",
          "MSXML2.XmlHttp.3.0",
          "MSXML2.XmlHttp.2.0",
          "Microsoft.XmlHttp"
      ];

      var xhr;
      for (var i = 0; i < versions.length; i++) {
          try {
              xhr = new ActiveXObject(versions[i]);
              break;
          } catch (e) {
          }
      }
      return xhr;
  };

  ajax.send = function (url, callback, method, data, async) {
      if (async === undefined) {
          async = true;
      }
      var x = ajax.x();
      x.open(method, url, async);
      x.onreadystatechange = function () {
          if (x.readyState == 4) {
              callback(x.responseText)
          }
      };
      if (method == 'POST') {
          x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      }
      x.send(data)
  };

  ajax.get = function (url, data, callback, async) {
      var query = [];
      for (var key in data) {
          query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
      ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
  };

  ajax.post = function (url, data, callback, async) {
      var query = [];
      for (var key in data) {
          query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
      ajax.send(url, callback, 'POST', query.join('&'), async)
  };

  var categoriesItems = categories.querySelectorAll('*');
  [].forEach.call(categoriesItems, function(category) {
    category.addEventListener('click', function() {
      var id = this.dataset.id;
      if ( id ) {
        currentCategory = selectCategory(id);
        
        ajax.post('/ajax', { action: 'filter', category: id }, function(response) {
          var items = document.querySelector('.wrapper-items');
          items.innerHTML = response;
        });
      }
    });
  });
  search.addEventListener('keypress', function(e) {
    if ( e.keyCode == 13 ) {
      ajax.post('/ajax', { action: 'search', name: e.target.value }, function(response) {
        var items = document.querySelector('.wrapper-items');
        items.innerHTML = response;
      });
    }
  });
  if ( route ) {
    currentCategory = selectCategory(route);
    ajax.post('/ajax', { action: 'filter', category: route }, function(response) {
      var items = document.querySelector('.wrapper-items');
      items.innerHTML = response;
    });
  } else {
    currentCategory = categories.querySelector('._active').dataset.id;
  };

})();

$(document).ready(function(){
  $('.page-shop').slick({
    centerMode: true,
    slidesToShow: 5,
    centerPadding: '10px',
    lazyLoad: 'ondemand',
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
    ]
  });
});