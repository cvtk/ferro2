(function() {
  if (document.getElementsByClassName('page-news').length) {
    widgetWidth = $('#vkPublications').parent().width();
    VK.Widgets.Group("vkPublications", {mode: 4, width: widgetWidth, height: "1200", color1: 'FFFFFF', color2: '282828', color3: '1ABAC8'}, 104929618);
  }
})()