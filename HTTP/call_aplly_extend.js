function Pet(words) {
  this.words = words;
  this.speak = function(say) {
    console.log(say + ' ' + this.words);
    console.log(this);
  };
}
// 里面有其他的函数就要再创建一个新的实例然后再调用

// var cat = new Pet('miao');

// cat.speak('speak');

function Dog(words) {
  Pet.call(this, words);
  // Pet.apply(this, arguments)
}

var dog = new Dog('wang');

dog.speak('speak');
// speak函数需要传参
