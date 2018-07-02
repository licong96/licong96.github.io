define(['zepto'] ,function ($) {
  return function (methods, url, data, callBack) {
    $.ajax({
      type: methods,
      url: url,
      data: data,
      dataType: 'json',
      success: function(json){
        callBack(json)
      },
      error: function(xhr, type){
        alert('Ajax error!')
      }
    })
  };
});
