var http = require('http');

var url = 'http://www.imooc.com/learn/637';

http
  .get(url, function(res) {
    var html = '';
    // data事件被触发的时候html累加
    res.on('data', function(data) {
      html += data;
    });

    res.on('end', function() {
      console.log(html);
    });
  })
  .on('error', function() {
    console.log('获取数据出错');
  });
