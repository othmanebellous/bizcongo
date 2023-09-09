const babel = require("gulp-babel");
const { src, dest } = require("gulp");

exports.compileJS = () =>
  src("src/assets/**/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(dest("docs"));
