var wayback = require('wayback-machine');

var url = "www.fivethirtyeight.com"

wayback.getTimeline(url, function(err, timeline) {
  if (err) {
    console.error(err);
    return;
  }
 
  console.log('Timeline for <%s>:', url);
  console.log(timeline.first.url);
//   io.sockets.emit('timesocket', timeline);
});