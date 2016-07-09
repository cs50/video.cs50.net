const fs = require('fs');

fs.readFile('./raw.vtt', (error, data) => {
  if (error) {
    throw error;
  }

  const text = data.toString();
  const lines = text.split('\n');

  const output = [];
  let buffer = {};

  lines.forEach(line => {
    if (!buffer.start) {
      const range = line.split(' --> ');
      buffer.start = range[0];
      buffer.end = range[1];
    } else if (line !== '') {
      buffer.url = line;
    } else {
      output.push(buffer);
      buffer = {};
    }
  });

  fs.writeFile('./output.json', JSON.stringify(output));
});
