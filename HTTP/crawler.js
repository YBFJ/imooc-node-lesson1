var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/637';

function filterChapters(html) {
  var $ = cheerio.load(html);

  var chapters = $('.chapter');
  //     [{
  //         chapterTitle: '',
  //         videos:: [
  //             title:'',
  //             id: ''
  //         ]
  //     }]

  var courseData = [];

  function trim(str) {
    return str.replace(/[\r\n ]/g, ''); //去除字符算中的空格
  }

  chapters.each(function(item) {
    var chapter = $(this);
    var chapterTitle = chapter
      .find('h3')
      .text()
      .trim();

    var videos = chapter.find('.video').children('li');

    var chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    };
    // videos.each(function(index, item) {
    //   var video = $(item).find('.J-media-item');

    videos.each(function(item) {
      var video = $(this).find('.J-media-item');

      var videoTitle = video.text();

      videoTitle = trim(videoTitle);

      // ？？？？  var videoTitle = video.text().trim();

      var id = video.attr('href').split('/video/')[1];

      // console.log(videoTitle);
      chapterData.videos.push({
        title: videoTitle,
        id: id
      });
    });

    courseData.push(chapterData);
  });
  return courseData;
}

function printCourseInfo(courseData) {
  courseData.forEach(function(item) {
    var chapterTitle = item.chapterTitle;

    console.log(chapterTitle + '\n');

    item.videos.forEach(function(video) {
      console.log('[' + video.id + ']' + video.title + '\n');
    });
  });
}

http
  .get(url, function(res) {
    var html = '';
    // data事件被触发的时候html累加
    res.on('data', function(data) {
      html += data;
    });

    res.on('end', function() {
      var courseData = filterChapters(html);

      printCourseInfo(courseData);
    });
  })
  .on('error', function() {
    console.log('获取数据出错');
  });
