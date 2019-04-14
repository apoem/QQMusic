var gulp = require('gulp');
var htmlClean = require('gulp-htmlclean');
var imageMin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var connect = require('gulp-connect');

var folder = {
    src: "src/",
    dist: "dist/"
}
gulp.task("html", function () {
    gulp.src(folder.src + "html/*")
        .pipe(connect.reload())
        .pipe(htmlClean())
        .pipe(gulp.dest(folder.dist + "html/"))
})
gulp.task("less", function () {
    gulp.src(folder.src + "css/*")
        .pipe(connect.reload())
        .pipe(less())
        .pipe(gulp.dest(folder.dist + "css/"))
})
gulp.task("js", function () {
    gulp.src(folder.src + "js/*")
        .pipe(connect.reload())
        .pipe(uglify())
        .pipe(gulp.dest(folder.dist + "js/"))
})
gulp.task("images", function () {
    gulp.src(folder.src + "images/*")
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "images/"))
});
gulp.task("sever", function () {
    connect.server({
        port: "3572",
        livereload:true
    });
})
gulp.task("watch", function () {
    gulp.watch(folder.src + "html/*", ["html"]),
    gulp.watch(folder.src + "js/*", ["js"]),
    gulp.watch(folder.src + "css/*", ["less"])
})

gulp.task("default", ["html", "less", "js", "images", "sever", "watch"]);

