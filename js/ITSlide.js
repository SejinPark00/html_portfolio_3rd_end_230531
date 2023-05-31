$(function(){
    function ITprev(){
        $('.IPRSlider li:last').prependTo('.IPRSlider');
        $('.IPRSlider').css('margin-left', -550);
        $('.IPRSlider').stop().animate({marginLeft:0}, 800);
    }

    function ITnext(){
        $('.IPRSlider').stop().animate({marginLeft:-550}, function(){
            $('.IPRSlider li:first').appendTo('.IPRSlider');
            $('.IPRSlider').css('margin-left', 0);
        });
    }

    function ITSlide(){
        $('.IPRSlider').stop().animate({marginLeft:-550}, function(){
            $('.IPRSlider li:first').appendTo('.IPRSlider');
            $('.IPRSlider').css('margin-left', 0);
        });
    }

    setInterval(ITSlide, 5000);

    $('.ITprev').click(function(){
        ITprev();
    });

    $('.ITnext').click(function(){
        ITnext();
    });

    
});