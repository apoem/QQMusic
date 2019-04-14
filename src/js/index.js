//     有哪些模块
// 渲染信息和图片
// 点击按钮
// 歌曲的控制
// 进度条的控制
// 图片旋转
// 列表切歌
var root = window.player;
var controlIndex = 0;
var len;
var dataList;
var audio = root.audioManager;
console.log(audio)
function getData(ur) {
    $.ajax({
        type: "GET",
        url: ur,
        success: function (data) {
            console.log(data);
            len = data.length;
            dataList = data;
            root.render(data[controlIndex]);
            audio.getAudio(data[controlIndex].audio);
        },
        error: function () {
            console.log("error")
        }
    })
}
getData("../mock/data.json");

function bindEvent() {
    $('.prev').on('click', function () {
        if (controlIndex == 0) {
            controlIndex = len - 1;
        }
        else controlIndex --;
        root.render(dataList[controlIndex]);
        audio.status = 'pause';
        $('.play').toggleClass('pause');
        audio.getAudio(dataList[controlIndex].audio);
    })
    $('.next').on('click', function () {
        if (controlIndex == len - 1) {
            controlIndex = 0;
        }
        else controlIndex ++;
        root.render(dataList[controlIndex]);
        audio.status = 'pause';
        $('.play').toggleClass('pause')
        audio.getAudio(dataList[controlIndex].audio);
    })
    $('.play').on('click', function () {
        if(audio.status == 'pause') {
            audio.play();
        }
        else {
            audio.pause();
        }
        $('.play').toggleClass('pause')
    })
}
bindEvent();