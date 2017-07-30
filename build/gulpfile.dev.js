/*
 * @Author: hunaisong 
 * @Date: 2017-07-29 17:13:12 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-07-29 19:05:50
 */
// dev开发环境，需要开启服务器，实时刷新，不需要压缩
var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    Config = require("./gulpfile.config");

function dev() {
    // html部分
    gulp.task("html-dev",function () {
      gulp.src(Config.html.src)  
      .pipe(gulp.dest(Config.html.dest))
      .pipe(plugins.connect.reload())
    })
    // css部分
    gulp.task("css-dev",function () {
      gulp.src(Config.css.src)  
      .pipe(gulp.dest(Config.css.dest))
      .pipe(plugins.connect.reload())
    })
    // js部分
    gulp.task("js-dev",function () {
      gulp.src(Config.js.src)  
      .pipe(gulp.dest(Config.js.dest))
      .pipe(plugins.connect.reload())
    })
    // img部分
    gulp.task("img-dev",function () {
      gulp.src(Config.img.src)  
      .pipe(gulp.dest(Config.img.dest))
      .pipe(plugins.connect.reload())
    })
    // assets部分
    gulp.task("assets-dev",function () {
      gulp.src(Config.assets.src)  
      .pipe(gulp.dest(Config.assets.dest))
      .pipe(plugins.connect.reload())
    })
    // 服务器任务
    gulp.task("connect-dev",function () {
        plugins.connect.server({
            root:"dist",
            livereload:true
        })
    })
    // 监测文件修改
    gulp.task("watch-dev",function () {
        gulp.watch(Config.html.src,["html-dev"]);
        gulp.watch(Config.css.src,["css-dev"]);
        gulp.watch(Config.js.src,["js-dev"]);
        gulp.watch(Config.img.src,["img-dev"]);
        gulp.watch(Config.assets.src,["assets-dev"]);
    })

    gulp.task("dev",["html-dev","css-dev","js-dev","img-dev","assets-dev","connect-dev","watch-dev"])
}
module.exports = dev;
