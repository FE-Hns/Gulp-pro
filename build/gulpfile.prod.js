/*
 * @Author: hunaisong 
 * @Date: 2017-07-29 20:54:54 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-07-29 21:22:55
 */
// prod环境 需要压缩，不需要实时刷新
var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    Config = require("./gulpfile.config");

function prod() {
    // html部分
    gulp.task("html-prod",function () {
      gulp.src(Config.html.src)  
      .pipe(plugins.minifyHtml())
      .pipe(gulp.dest(Config.html.dest))
    })
    // css部分
    gulp.task("css-prod",function () {
      gulp.src(Config.css.src) 
      .pipe(plugins.cssnano())
      .pipe(plugins.rename({
          suffix:".min"
      })) 
      .pipe(gulp.dest(Config.css.dest))
    })
    // js部分
    gulp.task("js-prod",function () {
      gulp.src(Config.js.src)  
      .pipe(plugins.uglify())
      .pipe(plugins.rename({
          suffix:".min"
      }))
      .pipe(gulp.dest(Config.js.dest))
    })
    // img部分
    gulp.task("img-prod",function () {
      gulp.src(Config.img.src)  
      .pipe(plugins.imagemin([
        //   最新版写法
        plugins.imagemin.gifsicle({interlaced: true}),
        plugins.imagemin.jpegtran({progressive: true}),
        plugins.imagemin.optipng({optimizationLevel: 5}),
        plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
      ]))
      .pipe(gulp.dest(Config.img.dest))
    })
    // assets部分
    gulp.task("assets-prod",function () {
      gulp.src(Config.assets.src)  
      .pipe(gulp.dest(Config.assets.dest))
    })

    gulp.task("prod",["html-prod","css-prod","js-prod","img-prod","assets-prod"])
}
module.exports = prod;