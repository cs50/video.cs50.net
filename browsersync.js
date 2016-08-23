const browserSync = require('browser-sync').create();
const spa = require('connect-history-api-fallback');

browserSync.init({
  files: 'public/*',
  server: {
    baseDir: ['public'],
    middleware: [spa()],
    https: true,
  },
});
