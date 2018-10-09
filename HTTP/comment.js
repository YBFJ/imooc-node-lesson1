var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
  content: '等待下一次课程',
  cid: 348
});

var options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/documment',
  method: 'POST',
  headers: {
    // 检查之后网页上面的headers，一些键值对
  }
};

var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));

  res.on('data', function(chunk) {
    console.log(Buffer.isBuffer(chunk));
    console.log(typeof chunk);
  });
  res.setEncoding('end', function() {
    console.log('评论成功');
  });
  req.on('error', function(e) {
    console.log('error:' + e.message);
  });

  req.write(postData);

  req.end();
});
