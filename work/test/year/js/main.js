
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
      zepto: 'zepto.min',
      PageSlider: 'PageSlider'
    }
});

// 依赖模块
require(['zepto', '../app/loader', '../app/page', '../app/music'], function($) {

  var paramData = {
    webp: 1,
    essence: 1,
    content_type: -103,
    count: 17
  }

  // var data = ajax('get', 'http://iu.snssdk.com/neihan/stream/mix/v1/', paramData, function (data) {
  //   console.log(data)
  // })
});
