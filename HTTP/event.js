function clickIt(e) {
  window.alert('BUtoon is clicked');
}

var button = document.getElementById('#button');

button.addEventListener('click', clickIt);
// 当按钮被触发的时候，调用回调函数，弹出警告

// 当注册的回调函数不是马上执行，只有事件被触发之后才执行，这种函数执行的方式叫事件驱动
