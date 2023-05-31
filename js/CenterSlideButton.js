/* slide chioce menu button on/off */
$(function(){
    $('.scm').mouseenter(function(){
        
        $(this).find('.scmn1 > li').stop().fadeIn();
    }).mouseleave(function(){
            $('.scmn1 > li').stop().hide()
    });
});

$(function(){
    $('.scm').mouseenter(function(){
        
        $(this).find('.scmn2 > li').stop().fadeIn();
    }).mouseleave(function(){
            $('.scmn2 > li').stop().hide()
    });
});

/* slide left button on/off */
$(function(){
    $('.slide').mouseenter(function(){
        $('.prev').stop().hide()
        $(this).find('.prev').stop().fadeIn();
    }).mouseleave(function(){
        $('.prev').stop().hide()
    });
});

/* slide right button on/off */
$(function(){
    $('.slide').mouseenter(function(){
        $('.next').stop().hide()
        $(this).find('.next').stop().fadeIn();
    }).mouseleave(function(){
        $('.next').stop().hide()
    });
});