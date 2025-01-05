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
  transform: translateY(0); /* Optional sliding effect */
  transition: transform 0.3s ease-in-out, opacity 0.3s ease; /* Smooth transition for sliding and fading */
}

/* Initially, hide the hamburger icon */
.btn-mobile-menu__icon.icon-list {
  display: block; /* Show the hamburger icon */
  opacity: 1;
  transition: opacity 0.3s ease; /* Smooth fade in transition */
}

/* Initially, hide the close (X) icon */
.btn-mobile-menu__icon.icon-x-circle {
  display: none;  /* Hide close icon initially */
  opacity: 0;
  transition: opacity 0.3s ease; /* Smooth fade in transition */
}

/* When the close icon is active (menu open), show it and hide the hamburger */
.btn-mobile-menu__icon.icon-list {
  display: none;  /* Hide hamburger icon when menu is open */
  opacity: 0;
}

.btn-mobile-menu__icon.icon-x-circle {
  display: block;  /* Show the close icon */
  opacity: 1;      /* Make it visible */
  transition: opacity 0.3s ease; /* Smooth transition for fade in/out */
}

/* Optional: You can add more custom styles for menu items or other animations if needed */

/* Style for when the panel is collapsed (useful if you're controlling the overall page layout) */
.panel-cover--collapsed {
  max-width: 0 !important;
  opacity: 0;
  transition: opacity 0.3s ease, max-width 0.3s ease;
}

/* Ensure that the animated classes are appropriately handled by the animation library (like Animate.css) */
.animated {
  animation-duration: 0.3s; /* Ensure the animations don't last too long */
}
