define(['zepto'], function ($) {
  var aImage = [
    // ''
  ];

  $(aImage).each(function (index) {
    $(this).load(function () {
      console.log('加载完成'+index)
    })
    $(this).error(function () {
      console.log('加载失败'+index)
    })
  });

});
