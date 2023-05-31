/* 주목! 이달의책 버튼 */
$(function () {
    function MBtnPrev(){
        $('.MBC > li:last').prependTo('.MBC');
        $('.MBC').css('margin-left', 20); 
        $('.MBC').stop().animate({marginLeft:20}, 800);
    }

    function MBtnNext(){
        $('.MBC').stop().animate({marginLeft:20}, function(){
            $('.MBC > li:first').appendTo('.MBC');
            $('.MBC').css('margin-left', 20);
        });
    }

    function MHS(){
        $('.MBC').stop().animate({marginLeft:20}, function(){
            $('.MBC li:first').appendTo('.MBC');
            $('.MBC').css('margin-left', 20);
        });
    }

    setInterval(MHS, 3000);

    $('.MBtnPrev').click(function(){
        MBtnPrev();
    });

    $('.MBtnNext').click(function(){
        MBtnNext();
    });
});