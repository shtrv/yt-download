const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('https://youtu.be/9a2Jj2Rjwl0?si=xyQlPfkefK-qpaz1')
  .pipe(fs.createWriteStream('video.mp4'));

