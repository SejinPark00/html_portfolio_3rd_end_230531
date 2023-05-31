/* 세일 BOX 메뉴 */
$(function(){
    $('.SHMenu li').eq(0).click(function(){
        $('.B1sale').show();
        $('.B2sale').hide();
        $(this).css({"border":"1px solid #222","border-bottom":"none", "color":"#ef544d", "background-color":"#fff"})
        $('.SHMenu li').eq(1).css({"border":"none","border-bottom":"1px solid #222", "color":"#222"})
        
    });

    $('.SHMenu li').eq(1).click(function(){
        $('.B2sale').show();
        $('.B1sale').hide();
        $(this).css({"border":"1px solid #222","border-bottom":"none", "color":"#ef544d", "background-color":"#fff"})
        $('.SHMenu li').eq(0).css({"border":"none","border-bottom":"1px solid #222", "color":"#222"})
    });
});