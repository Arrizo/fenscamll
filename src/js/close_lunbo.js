$(function(){

// 主页轮播图效果
var currentIndex=0,
 length=0,
 Intervlu,
 hassplay=false,
 time=3000;

length=$('.slider_img').length;
$('.slider_img:not(:first)').hide();
$('.cyclo_icon:first').addClass("select_icon");
$('.slider_player').hover(function(){
        stop();
},function(){
    start();
});
$(".cyclo_icon").click(function(){
    var preIndex=$('.cyclo_icon').filter(".select_icon").index();
    currentIndex=$(this).index();
    play(preIndex,currentIndex);
});
function next(){
    var preIndex=currentIndex;
    currentIndex=++currentIndex%length;
    play(preIndex,currentIndex);
}
function start(){
    if(!hassplay){
        hassplay=true;
       Intervlu= setInterval(next,time);
    }
}
function stop(){
 clearInterval(Intervlu);
 hassplay=false;
}
function play(preIndex,currentIndex){
        $(".slider_img").eq(preIndex).fadeOut(300)
        .parent().children().eq(currentIndex).fadeIn(500);
        $('.cyclo_icon').removeClass("select_icon");
        $(".cyclo_icon").eq(currentIndex).addClass("select_icon");
}
//调用初始化动态轮播图效果
start();

$('.new_close').click(function(){
    $('.news_event').hide();
});


$(window).resize(function(){
    tc_center();
});

// function tc_center(){
//     var _top=($(window).height()-$(".logo_page").height())/2;
//     var _left=($(window).width()-$(".logo_page").width())/2;
    
//     $(".logo_page").css({top:_top,left:_left});
// }   



$('#VIP_invite').click(function(){
 $('.gray,.logo_page').show();
})

$('#close_icon').click(function(){
    $('.gray,.logo_page').hide();
})
});