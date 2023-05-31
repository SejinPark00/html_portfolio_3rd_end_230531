/* 랭킹 박스 */
$(function(){
    $('.RkMenu li').eq(0).click(function(){
        $('.RkToday').show();
        $('.RkWeek').hide();
        $(this).css({"border":"1px solid #b7b7b7","border-bottom":"none"})
        $('.RkMenu li').eq(1).css({"border":"none","border-bottom":"1px solid #b7b7b7"})
    });

    $('.RkMenu li').eq(1).click(function(){
        $('.RkWeek').show();
        $('.RkToday').hide();
        $(this).css({"border":"1px solid #b7b7b7","border-bottom":"none"})
        $('.RkMenu li').eq(0).css({"border":"none","border-bottom":"1px solid #b7b7b7"})
    });
});