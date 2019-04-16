(function ($, Drupal) {

  $(document).ready(function () {

    // Dropdowns
    var primaryMenuItems = document.querySelectorAll('.site-header .nav--primary > li > a');
    
    // var primaryMenuItems = $('.site-header .nav--primary > li > a');
  
    // primaryMenuItems.on('click', function(e) {
    //   e.preventDefault();
    //   e.target.classList.add('is-active');
    // });

    for (i = 0; i < primaryMenuItems.length; ++i) {
      primaryMenuItems[i].addEventListener('click', function(e) {
        e.preventDefault();
        // e.target.classList.add('is-active');
        $(this).parent().toggleClass('is-active').siblings().removeClass('is-active');
      });
    }

    document.addEventListener('click', function(e) {
      var siteHeader = document.querySelector('.site-header');
      var targetElement = e.target;

      do {
          if (targetElement == siteHeader) {
              // This is a click inside. Do nothing, just return.
              // document.getElementById("flyout-debug").textContent = "Clicked inside!";
              console.log('click inside');
              return;
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
      } while (targetElement);

      console.log('click outside');
    });

    // Open Search
    var siteHeader = document.querySelector('.site-header');
    var searchButton = document.querySelector('.pill--search');

    if(searchButton) {
      searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        siteHeader.classList.add('search-open');
      });
    }

  });

})(jQuery, Drupal);