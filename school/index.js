// 入口文件
var klass = require('./klass');

// 本身也是可以导出去的
exports.add = function(klasses) {
  klasses.forEach(function(item, index) {
    var _klass = item;
    var teacherName = item.teacherName;
    var students = item.students;

    klass.add(teacherName, students);
  });
};

// klass.add('Scott', ['jane', 'cmj']);
