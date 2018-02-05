define(['zepto'], function ($) {
  // 音乐播放暂停
  var isPlaying = true;
  var oMusic = document.querySelector('.js_music');
  var oIconMusic = document.querySelector('.js_icon_music');
  var oMusicAudio = document.getElementById('music');

  // ios手机微信自动播放
  document.addEventListener("WeixinJSBridgeReady", function () {
    oMusicAudio.load();
    oMusicAudio.play();
  }, false);

  oMusic.addEventListener('click', function bindEvent() {
    isPlaying ? pause() : play();
  });

  function pause() {
    isPlaying = false;
    oMusicAudio.pause()
    var cTransform = getComputedStyle(oMusic).transform;
    var iTransform = getComputedStyle(oIconMusic).transform;

    oMusic.style.transform = cTransform === 'none'
       ? iTransform
       : iTransform.concat(' ', cTransform);

    $(oMusic).removeClass('music-play')
  };

  function play() {
    isPlaying = true;
    oMusicAudio.play()
    $(oMusic).addClass('music-play')
  };
});
