const fs = require('fs');

fs.readFile('./raw.srt', (error, data) => {
  if (error) {
    throw error;
  }

  const text = data.toString();
  const lines = text.split('\n');

  const output = [];
  let buffer = {
    phrase: [],
  };

  lines.forEach(line => {
    if (!buffer.id) {
      buffer.id = parseInt(line, 10);
    } else if (!buffer.start) {
      const range = line.split(' --> ');
      buffer.start = range[0];
      buffer.end = range[1];
    } else if (line !== '') {
      buffer.phrase.push(line);
    } else {
      buffer.phrase = buffer.phrase.join(' ') !== '' ?
        buffer.phrase.join(' ')
        : '[NO SPEECH]';

      output.push(buffer);
      buffer = {
        phrase: [],
      };
    }
  });

  fs.writeFile('./output.json', JSON.stringify(output));
});
