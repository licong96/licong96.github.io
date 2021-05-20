var data = {
  id: 1,
  name: 'lc',
  age: '22',
  list: [
    {
      pic: './image/my.jpg',
      desc: '图片是假的'
    },
    {
      pic: './image/my2.jpg',
      desc: '图片也是假的'
    }
  ]
};
callback(data);

var string = JSON.stringify(data);
callbackString(string);
