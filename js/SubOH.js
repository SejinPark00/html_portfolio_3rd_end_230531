/* sub section #4 리뷰, 100자평 */

/* sub 100자평 리뷰메뉴 (최근,평점순) */
$(function(){
    $('.OHBR1R ul li').eq(0).click(function(){
        $('.R2lately').show();
        $('.R2grade').hide();
        $(this).css({"color":"#222"})
        $('.OHBR1R ul li').eq(2).css({"color":"#666"})
    });

    $('.OHBR1R ul li').eq(2).click(function(){
        $('.R2grade').show();
        $('.R2lately').hide();
        $(this).css({"color":"#222"})
        $('.OHBR1R ul li').eq(0).css({"color":"#666"})
    });
});

/* sub 100자평 리뷰버튼 (1or2) */
$(function(){
    $('.R3btn1').click(function(){
        $('.R2lately').show();
        $('.R2grade').hide();
        $(this).css({"color":"#fff","background":"#555","border":"1px solid #555"})
        $('.R3btn2').css({"color":"#555","background":"#eee","border":"1px solid #fefefe","border-bottom":"none"})
    });

    $('.R3btn2').click(function(){
        $('.R2grade').show();
        $('.R2lately').hide();
        $(this).css({"color":"#fff","background":"#555","border":"1px solid #555"})
        $('.R3btn1').css({"color":"#555","background":"#eee","border":"1px solid #fefefe","border-bottom":"none"})
    });
});