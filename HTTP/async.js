// 顺序执行，单线程执行JS，更加安全
// var c = 0;
// function printIt() {
//   console.log(c);
// }
// function plus() {
//   c += 1;
// }

// plus();
// printIt();

// 异步执行，多线程执行，管理分配资源
var c = 0;
function printIt(c) {
  console.log(c);
}
function plus(callback) {
  setTimeout(function() {
    c += 1;
    callback(c);
  }, 1000);
}
// 加上callback就可以得到1了
plus(printIt);
