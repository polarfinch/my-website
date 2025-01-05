$(document).ready(function () {
  // Collapse the panel cover when certain conditions are met (e.g., landing page not disabled)
  {% if site.disable_landing_page != true %}
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, 'swing');
    }
  });

  // Check if the URL has the hash and collapse the panel if necessary
  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  // If the page is not the homepage, collapse the panel cover
  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
  {% endif %}

  // Mobile Menu Toggle Functionality
  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // When clicking on a social link or blog button in mobile menu, hide the menu
  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').removeClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // Close the mobile menu when clicking anywhere outside it (optional, if needed)
  $(document).click(function (event) {
    if (!$(event.target).closest('.navigation-wrapper').length && !$(event.target).closest('.btn-mobile-menu').length) {
      $('.navigation-wrapper').removeClass('visible');
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
    }
  });
});



