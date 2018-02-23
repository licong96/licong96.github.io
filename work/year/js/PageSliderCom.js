
$(document).ready(function () {

  var userInfo = {}
  var aPic = [
    '../image/car_body.png',
    '../image/car_wheel.png',
    '../image/light_1.png',
    '../image/light_2.png',
    '../image/page1_bg.jpg',
    '../image/page_1_text1.png',
    '../image/page_1_text2.png',
    '../image/page_1_text3.png',
  ];

  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1
        c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) c_end = document.cookie.length
        return decodeURI(document.cookie.substring(c_start, c_end))
      }
    }
    return null;
  }

  // 封装数据请求
  function ajax(methods, url, data, callBack) {
    $.ajax({
      type: methods,
      url: url,
      data: data,
      dataType: 'json',
      success: function (datas) {
        callBack(datas)
      },
      error: function (err) {
        alert(err)
      }
    })
  };

  function onLoadImg () {
    var iNub = 0;

    for (var i = 0; i < aPic.length; i++) {
      var oImg = new Image();
      oImg.src = aPic[i];
      oImg.index = i;
      oImg.onload = function () {
        iNub++;
        if (iNub === aPic.length) {      // 加载完毕
          $('.js_page_1').removeClass('current')
          setTimeout(function () {
            $('.js_page_1').addClass('current')
            $('.js_loader').hide();
          }, 20)
        }
      };
      oImg.onerror = function () {      // 加载失败
        alert('图片加载失败，请刷新一下试试')
      };
    }
  }

  // 页面加载中
  function loader() {
    var param = {
      todo: 'Live',
      type: 'GetInventory',
      needpurview: false
    }

    onLoadImg()

    // ajax('get', '/Handler/Handler.ashx', param, function (data) {
    //   if (data.result === 'success') {

    //     applyDom(data.tempTable[0]);

    //     $('.js_page_1').removeClass('current')
    //     setTimeout(function () {
    //       $('.js_page_1').addClass('current')
    //       $('.js_loader').hide();
    //     }, 20)
    //   } else {
    //     alert('没登录')
    //   }
    // })
  };

  // 渲染DOM
  function applyDom(data) {
    getUserInfo()        // 用户信息
    joinDate(data.JoinDate)    // 加入时间
    initPageDesc(data.CompanyDeclare, data.MyDeclare, '新增')
    initPageDesc(data.CompanyInquiry, data.MyInquiry, '报备')
    initPageDesc(data.CompanyVisit, data.MyVisit, '到访')
    keyWords()
  };

   // 用户信息
  function getUserInfo() {
    var CEmpName = getCookie('CEmpName');
    var CDeptName = getCookie('CDeptName');
    var CpicSrc = getCookie('CpicSrc');

    // 保存到全局
    userInfo = {
      CEmpName: CEmpName,
      CDeptName: CDeptName,
      CpicSrc: CpicSrc
    }

    $('.js_emp_name').html(CEmpName)
    $('.js_dept_name').html(CDeptName)
    $('.js_user_pic').attr('src', CpicSrc)
  };

  // 加入时间
  function joinDate(JoinDate) {
    var h = JoinDate.split(' ')[0];
    var s = h.split('/');
    var m = s[0] +'年'+s[1]+'月'+s[2]+'日';

    $('.js_page2_desc').html('<p class="desc">' + m + '</p><p class="desc">' + userInfo.CEmpName + '加入我们团队</p>');
  }

  // 新增、报备、到访
  function initPageDesc(com, my, type) {
    var ratio = Math.round((my / com * 100))

    if (ratio < 1) {
      ratio = 1
    }
    var html = '<p class="desc">公司' + type+'了' + com + '个客户</p>' +
      '<p class="desc">我' + type +'了' + my + '个客户</p>' +
      '<p class="desc">' + type +'客户占公司比例' + ratio.toFixed(0) + '%</p>'

    if (type === '新增') {
      $('.js_page3_desc').html(html);
    } else if (type === '报备') {
      $('.js_page4_desc').html(html);
    } else if (type === '到访') {
      $('.js_page5_desc').html(html);
    }
  };

  // 年度关键词
  function keyWords() {

  };

  // 初始化页面滑动
  function initPage() {
    var joinTeam = $('.js_join_team');
    var keywords = $('.js_keywords');
    var lockKey = $('.js_lock_key');
    var index = 0

    new PageSlider({
      pages: $('.page-wrap .page'),
      direction: 'h',
      gestureFollowing: true,
      // dev: 2,
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
  };

  // 音乐的播放与暂停
  function playMusic() {
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
  };

  // 主方法
  function main() {
    loader()
    initPage()
    playMusic()
  }

  main()
});
