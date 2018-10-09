var student = require('./student');
var teacher = require('./teacher');

function add(teacherName, students) {
  teacher.add(teacherName);

  students.forEach(function(item, index) {
    student.add(item);
  });
}

exports.add = add;
// 成为传统的模块实例，是module.exports的浮动方法

// module.exports = add;
// 成为一个特别的对象类型， 是真实存在的东西
