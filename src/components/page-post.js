(function() {
  var parentWidth = function(el) { return el.parentElement.clientWidth };

  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      vkWidget = document.getElementById('vkWidget'),
      widgetWidth = 0;

  if (!!document.getElementsByClassName('page-post').length) {

      if ( windowWidth < 768 ) {
        widgetWidth = parentWidth(vkWidget);
      } else {
        widgetWidth = parentWidth(vkWidget) / 3;
      }
      

      VK.Widgets.Group("vkWidget", {mode: 3, width: widgetWidth, color1: 'EEEEEE', color2: '282828', color3: '1ABAC8'}, 104929618);
  }

})();