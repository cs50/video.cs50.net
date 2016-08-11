const browserSync = require('browser-sync').create();
const spa = require('connect-history-api-fallback');

browserSync.init({
  files: 'dist/*',
  server: {
    baseDir: ['dist'],
    middleware: [spa()],
  },
});
