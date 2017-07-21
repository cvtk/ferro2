document.getElementById('productOptions') && (function() {
  var route = window.location.hash.substr(1),
      select = document.getElementById('productOptions'),
      domElements = {
        price : ['.product-meta > .price'],
        title : ['.product-meta > .title', 'input[name="shk-name"]'],
        id : ['input[name="shk-id"]']
      }
      

  var changeElements = function(queries, value) {
    queries.forEach(function(query) {
      var elements = document.querySelectorAll(query);
      if ( elements.length ) {
        elements.forEach(function(element) {
          if ( element.tagName === 'INPUT' ) {
            element.value = value;
          }
          else {
            element.innerHTML = value;
          }
        })
      }
    })
  }

  var selectOption = function(option) {
    if ( typeof option === 'undefined' || option.type === 'change' ) {
      option = select.selectedOptions[0].dataset;
    }

    window.location.hash = '#' + option.hash_route;
    for ( var key in domElements ) {
      if ( domElements.hasOwnProperty(key) ) {
        changeElements(domElements[key], option[key]);
      }
    }
  }

  select.addEventListener('change', selectOption );

  if ( route ) {
    for (var i = 0; i < select.options.length; i++) {
      var dataset = select.options[i].dataset;
      if ( dataset.hash_route === route ) {
        select.selectedIndex = i;
        selectOption(dataset)
      }
    }
    
  }
  else { 
    selectOption();
  }
  
})();