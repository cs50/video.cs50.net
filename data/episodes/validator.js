const http = require('http');
const episodes = require('./output.json');
const checks = [];

const check = url =>
  new Promise(resolve => {
    const options = { method: 'HEAD', host: 'cdn.cs50.net', path: url };
    const req = http.request(options, (r) => {
      resolve([url, JSON.stringify(r.headers)]);
    });
    req.end();
  });

const process = (key, value) => {
  if (typeof value === 'string' && value.match('http')) {
    checks.push(check(value.replace('http://cdn.cs50.net', '')));
  }
};

function traverse(o, func) {
  for (var i in o) {
    func.apply(this, [i, o[i]]);
    if (o[i] !== null && typeof(o[i]) === 'object') {
      traverse(o[i], func);
    }
  }
}

traverse(episodes, process);

Promise.all(checks).then((args) => {
  const missing = args.filter(x => JSON.parse(x[1])['x-cache'] === 'Error from cloudfront');
  console.log('---------------------------------');
  console.log('-- Missing Files');
  console.log('---------------------------------');
  console.log(missing.map(x => x[0]));
}, (err) => {
    // error occurred
    console.log('Error:', err);
});
