(function () {
  // body...
  'use strict';

  function collapseNavbar() {
    $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse"): $(".navbar-fixed-top").removeClass("top-nav-collapse")
    $(".navbar").offset().top > 50 ? $("a.navbar-brand").removeClass("hidden"): $(".navbar-brand").addClass("hidden")
  }

  $(window).scroll(collapseNavbar),
  $(document).ready(collapseNavbar),
  $(function() {
    $("a.page-scroll").bind("click", function(e) {
        
      var $anchor = $(this);

      $("html, body").stop().animate( {
          scrollTop: $($anchor.attr("href")).offset().top
      }
      , 1500, "easeInOutExpo"),
      
      e.preventDefault()

    });
  });

}());