const browserSync = require('browser-sync').create();
const { watch } = require("gulp");

exports.browserSyncInit = (done) => {
    browserSync.init({ server: "./docs" });
    watch(['./docs/**/*','./docs/style/**/*.css']).on('change', browserSync.reload);
    return done();
}
