$(function(){
    $('.categori > li').mouseenter(function(){
        $('.CtgMenu').stop().hide()
        $(this).find('.CtgMenu').stop().fadeIn();
    }).mouseleave(function(){
        $('.CtgMenu').stop().hide()
    });
});