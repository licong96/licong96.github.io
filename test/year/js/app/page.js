define(['zepto', 'PageSlider'], function ($, PageSlider) {
  // 初始化页面滑动
  var joinTeam = $('.js_join_team');
  var keywords = $('.js_keywords');
  var lockKey = $('.js_lock_key');
  var index = 0

  new PageSlider({
      pages: $('.page-wrap .page'),
      direction: 'h',
      gestureFollowing: true,
      // dev: 4,
      onchange: function () {
        // 页面有变化之后再执行
        if (this.index !== index) {
          index = this.index
          joinTeam.removeClass('out')
          setTimeout(function () {
            joinTeam.addClass('out')
          }, 1500)
          keywords.removeClass('show')
          lockKey.data('lock-next', true)
        }
      },
      onSwipeLeft: function () {
        if (this.index === 4) {
          keywords.addClass('show')
          lockKey.data('lock-next', false)
        }
      }
  });
});
