import LcCity from 'lc-city-selector';


var baseInput = document.getElementById('base');
var defaultInput = document.getElementById('default');

var baseCity = new LcCity({
  confirm: function (data) {
    baseInput.innerHTML = data
  }
});

baseInput.addEventListener('click', function() {
  baseCity.show(this);
});

// 有默认选项，进行回填
var defaultCity = new LcCity({
  data: {
    province: '江西省',
    city    : '南昌市',
    district: '青山湖区',
  },
  confirm: function (data) {
    defaultInput.innerHTML = data
  }
});
defaultInput.addEventListener('click', function() {
  defaultCity.show(defaultInput);
});