$(document).ready(function () {
  // Handle blog button clicks (this logic seems unrelated to the burger menu)
  {% if site.disable_landing_page != true %}
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { });
    }
  });

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
  {% endif %}

  // Toggle menu visibility when burger icon is clicked
  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown'); // Show/hide the menu
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn'); // Toggle burger and close icon
  });

  // Optional: Toggle visibility when clicking on the close (X) icon
  $('.btn-mobile-close__icon').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown'); // Hide the menu
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn'); // Show the burger icon again
  });
});

