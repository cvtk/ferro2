(function() {
  var contentTabs = document.querySelectorAll('#contentTabs > li'),
      contentInfo = document.querySelectorAll('#contentInfo > div'),
      currentTab = contentTabs[0];
  contentTabs.forEach(function(tab, i) {
    tab.onclick = function() {
      if ( currentTab != this ) {
        contentTabs.forEach(function(tab, i) {
          tab.classList.remove('_active');
          contentInfo[i].classList.remove('_active');
        });
        currentTab = this;
        this.classList.add('_active');
        contentInfo[i].classList.add('_active');
      }
    }
  })
})();