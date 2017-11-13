var gulp      = require('gulp'),
    minifyCSS = require('gulp-clean-css'),   //压缩css
    imagemin  = require('gulp-imagemin'),    //压缩图片
    changed   = require('gulp-changed'),      
    watch     = require('gulp-watch'),//监听插件
    plumber   = require('gulp-plumber'),  
    sass      = require('gulp-sass'),   //编译sass
    concat    = require('gulp-concat'), 
    uglify    = require('gulp-uglify'), //压缩js
    connect   = require('gulp-connect'),
    htmlminify= require('gulp-html-minify'),  //压缩html
    webServer = require('gulp-webserver');  //服务器插件

 // 复制操作
  gulp.task("copyhtml",function(){
    gulp.src("src/*.html")
    .pipe(plumber())
    .pipe(gulp.dest("dist/"));
  });

  //图片压缩
gulp.task('imagemin',function(){
    gulp.src("src/image/**/*")
    .pipe(plumber())
    .pipe(changed("dist/images"))
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
});

//sass  压缩
gulp.task('sass',function(){
    gulp.src("src/sass/main.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(minifyCSS({keepSpecialComments:'*'}))
    .pipe(gulp.dest("dist/css"))
})
//压缩js
gulp.task('jsuglify',function(){
    gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest("dist/js/"))
})

//压缩html
gulp.task('htmlminify',function(){
    gulp.src("src/index.html")
    .pipe(htmlminify())
    .pipe(gulp.dest("dist/"))
})

//服务器
gulp.task('webServer',function(){
    gulp.src('./')
    .pipe(webServer({
        port:8089,
        host:"localhost",
        liveload:true,
        directoryListing:{  
            path:'./',
            enable:true
        }
    }))
});


//服务器
// gulp.task('webserver',function(){
//     gulp.src('./')
//     connect.server({
//         port:8081,
//         livereload: true
//     });
// });


// //监听
gulp.task("watch",function(){
    gulp.watch("src/*.html",['copyhtml'])
    gulp.watch("src/image/**/*",['imagemin'])
    gulp.watch("src/sass/main.scss",['sass'])
    gulp.watch("src/js/**/*.js",['jsuglify'])
})




//默认执行任务
gulp.task("default",['imagemin','sass','jsuglify','watch','webServer','copyhtml']);