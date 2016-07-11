var browserSync = require('browser-sync').create();
var spa = require('connect-history-api-fallback');

browserSync.init({
  files: 'dist/*',
  server: {
    baseDir: ['dist', 'data'],
    middleware: [spa()],
  }
});
