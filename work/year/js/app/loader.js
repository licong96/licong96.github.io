define(['zepto'], function ($) {

  setTimeout(function () {
    $('.js_page_1').removeClass('current')
    setTimeout(function () {
      $('.js_page_1').addClass('current')
      $('.js_loader').hide();
    }, 20)
  }, 2000);

});
