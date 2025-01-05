$(document).ready(function () {
  {% if site.disable_landing_page != true %}
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  {% endif %}

  // Mobile menu toggle functionality
  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})

/* Initially, hide the navigation wrapper */
.navigation-wrapper {
  display: none;  /* This hides the menu initially */
  opacity: 0;     /* Start with the menu invisible */
  transition: opacity 0.3s ease; /* Smooth transition for fading in */
}

/* Show the navigation wrapper when the 'visible' class is added */
.navigation-wrapper.visible {
  display: block; /* Makes the menu visible when the 'visible' class is added */
  opacity: 1;     /* Fade in the menu */
}

/* Optional: Animation for mobile menu */
.navigation-wrapper.visible {
  transform: translateY(0); /* Optional sliding effect */
  transition: transform 0.3s ease-in-out; /* Sliding effect duration */
}

