const fs = require('fs');
const thumbnails = require('../thumbnails/output.json');
const subtitles = require('../subtitles/output.json');

fs.readFile('./raw.vtt', (error, data) => {
  if (error) {
    throw error;
  }

  const text = data.toString();
  const lines = text.split('\n');

  const seconds = time => {
    const hms = time.split(':').map(x => parseFloat(x));
    return (hms[0] * 60 * 60) + (hms[1] * 60) + hms[2];
  };

  const output = [];
  let buffer = {};

  lines.forEach(line => {
    if (!buffer.id) {
      buffer.id = parseInt(line.match(/\d/g).join(''), 10);
    } else if (!buffer.start) {
      const range = line.split(' --> ');
      buffer.start = range[0];
      buffer.end = range[1];
    } else if (line !== '') {
      buffer.title = line;
    } else {
      buffer.thumb = thumbnails.find(x =>
        seconds(buffer.start) - seconds(x.start) <= 5).url;
      buffer.subtitles = subtitles.filter(x =>
        seconds(x.start) >= seconds(buffer.start)
        && seconds(x.end) <= seconds(buffer.end));
      buffer.intro = buffer.subtitles.slice(0, 5).map(x => x.phrase).join(' ');
      output.push(buffer);
      buffer = {};
    }
  });

  fs.writeFile('./output.json', JSON.stringify(output));
});
