var SRC_DIR = "src/" //src目录
var DIST_DIR = "dist/" //dist目录
// var DIST_FILES = DIST_DIR+"**" //目标路径下的所有文件

var Config = {
    // 给index.html配置
    html:{
        src:SRC_DIR+"*.html",
        dest:DIST_DIR
    },
    // css文件配置
    css:{
        src:SRC_DIR+"css/*.css",
        dest:DIST_DIR+"css"
    },
    // js文件配置
    js:{
        src:SRC_DIR+"js/*.js",
        dest:DIST_DIR+"js"
    },
    // img文件配置
    img:{
        src:SRC_DIR+"images/**/*",
        dest:DIST_DIR+"img"
    },
    // 静态资源配置
    assets:{
        src:SRC_DIR+"assets/**/*",
        dest:DIST_DIR+"assets"
    }
}
// 模块暴露出去
module.exports = Config;