function learn(something) {
  console.log(something);
}

function we(callback, something) {
  something += ' is cool';
  callback(something);
}

we(learn, 'NodeJS');
// 传进去的是具名函数

we(function(something) {
  console.log(something);
}, 'CMJ');
// 传进去的是匿名函数函数
