swapme = setInterval('swapImages()', 3000);
  function swapImages() {
          var next = ($('.slider>img.active').next('img').length > 0) ? $('.slider>img.active').next('img') : $('.slider>img:first');
          $('.slider>img.active').fadeOut('normal', function () {$('.slider>img.active').removeClass('active');next.fadeIn().addClass('active');});
  }
$(function() {
  $('.slider>img').hide();
  $('.slider>img:first').addClass('active').show();
  // #documentation all images have to have the same size
  //$(".slider").css("height",$('.slider>img:first').height());

  $('.menu-icon').click(function(){
          $('.menu-popup').toggle();
      });

      $('.menu-popup > a').click(function(){
          $('.menu-popup').toggle();
      });

      $('.ui-collapsible-content a').click(function(){
        $('.ui-collapsible-content').addClass('ui-collapsible-content-collapsed');
        $('.ui-listview li.ui-collapsible').removeClass('ui-collapsible-collapsed');
        $('.ui-listview li.ui-collapsible h3 .ui-icon').removeClass('ui-icon-minus').addClass('ui-icon-plus');
    });

    $(window).scroll(function(){
        if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn(); 
        } else {
          $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });

});

