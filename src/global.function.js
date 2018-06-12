function add(object, key, value) {
  Object.defineProperty(object, key, {
    // enumberable: false,//默认值
    value: value
  });
}

//Math
add(Math, 'range', function (min, max, int) {
  //返回整数
  let result = min + this.random() * (max - min);
  return int ? this.round(result) : result;
});

//Object
add(Object.prototype, 'getKeys', function () {
  return Object.keys(this);
});
add(Object.prototype, 'forEach', function (cb) {
  let k;
  for (k in this) {
    this[k] = cb.call(this, (this[k]));
  }
});

//Array
add(Array.prototype, 'cut', function (interval) {
  //对数组分成 interval 份
  const result = [], perLength = Math.ceil(this.length / interval);
  while (perLength < this.length) {
    result.push(this.splice(0, perLength));
    //无需++，length会随之改变
  }
  result.push(this);
  return result;
});


//util
global.util = {};

util.interEach = function (len, inter, cb, _this) {
  //如果使用箭头函数，请不要传入 _this ,防止发生错误
  let i = 0;
  if (_this) {
    for (; i < len; i += inter) {
      cb.call(_this, i);
    }
  } else {
    for (; i < len; i += inter) {
      cb(i);
    }
  }
}
util.isNumber = function (v) {
  return Object.prototype.toString.call(v) === '[object Number]';
}
util.isCan2Number = function (v) {
  //检测是否可以转换为 number
  return /^\d+$/.test(v);
}
util.hasStr = function (v, str) {
  //检测number、string 中是否有 str
  const reg = new RegExp(str);
  return reg.test(v);
}
