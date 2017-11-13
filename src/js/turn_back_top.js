$(function(){
    //一屏的高度
    var clientheight=document.documentElement.clientHeight||document.body.clientHeight;
    //距离顶部额高度
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
             $('.back_top').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>clientheight){
             $('.back_top').show();
              $('.head_nav').addClass("fixed");
           $('.anchor').show();
        }else{
             $('.back_top').hide();
             $('.head_nav').removeClass("fixed");
             $('.anchor').hide();
        }
    })
    $('.back_top').click(function(){
             $("body,html").animate({scrollTop:0},300);
             return false;
    })

    var t=40;
$('.anchor ul li:first').click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F1').offset().top-t},100);
})
$('.anchor ul li').eq(1).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F2').offset().top-t},100);
})
$('.anchor ul li').eq(2).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F3').offset().top-t},100);
})
$('.anchor ul li').eq(3).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F4').offset().top-t},100);
})
$('.anchor ul li').eq(4).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F5').offset().top-t},100);
})
$('.anchor ul li').eq(5).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F6').offset().top-t},100);
})
$('.anchor ul li').eq(6).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F7').offset().top-t},100);
})
$('.anchor ul li').eq(7).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F8').offset().top-t},100);
})

$('.anchor ul li').eq(8).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F9').offset().top-t},100);
})

$('.anchor ul li').eq(9).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F10').offset().top-t},100);
})

$('.anchor ul li').eq(10).click(function(){
    $('html,body').animate({scrollTop:$('.F1_F11_product_show .bg_F11').offset().top-t},100);
})




});