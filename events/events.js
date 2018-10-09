var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);
// addEventlistner 最多不能超过10个on事件

life.on('触发的事件', function(who) {
  console.log('hello' + who);
});

life.emit('触发的事件', ' CMJ');
// addEventlistner 设置事件个数
life.setMaxListeners(11);

// 移除方法
// life.removeListener
// 批量移除方法
life.removeAllListeners();
life.removeAllListeners('触发的事件');

// emit会返回值，表示是否时间被触发
var hasEmit = life.emit('触发的事件', ' CMJ');

console.log(hasEmit);
// 查询事件的数目
console.log(life.listeners('触发的事件').length);
console.log(EventEmitter.listenerCount(life, '触发的事件'));
