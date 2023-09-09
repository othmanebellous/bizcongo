const { src, dest } = require("gulp");

exports.copyImgs = () =>
  src("src/assets/img/**/*")
    .pipe(dest("docs/images/"));
