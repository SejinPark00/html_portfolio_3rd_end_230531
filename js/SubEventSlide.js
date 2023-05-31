/* sub 이벤트 #3-2 이벤트 기획전 슬라이드 #1 자기계발 ~ */
$(function(){
    function ES1prev(){
        $('.ESB1 li:last').prependTo('.ESB1');
        $('.ESB1').css('margin-left', 0);
        $('.ESB1').stop().animate({marginLeft:0}, 800);
    }

    function ES1next(){
        $('.ESB1').stop().animate({marginLeft:0}, function(){
            $('.ESB1 li:first').appendTo('.ESB1');
            $('.ESB1').css('margin-left', 0);
        });
    }

    function ES1slide(){
        $('.ESB1').stop().animate({marginLeft:0}, function(){
            $('.ESB1 li:first').appendTo('.ESB1');
            $('.ESB1').css('margin-left', 0);
        });
    }

    setInterval(ES1slide, 4000);

    $('.ES1prev').click(function(){
        ES1prev();
    });

    $('.ES1next').click(function(){
        ES1next();
    });

});

/* sub 이벤트 #3-2 이벤트 기획전 슬라이드 #2 이 책을 조회~ */
$(function(){
    function ES2prev(){
        $('.ESB2 li:last').prependTo('.ESB2');
        $('.ESB2').css('margin-left', 0);
        $('.ESB2').stop().animate({marginLeft:0}, 800);
    }

    function ES2next(){
        $('.ESB2').stop().animate({marginLeft:0}, function(){
            $('.ESB2 li:first').appendTo('.ESB2');
            $('.ESB2').css('margin-left', 0);
        });
    }

    function ES2slide(){
        $('.ESB2').stop().animate({marginLeft:0}, function(){
            $('.ESB2 li:first').appendTo('.ESB2');
            $('.ESB2').css('margin-left', 0);
        });
    }

    setInterval(ES2slide, 4000);

    $('.ES2prev').click(function(){
        ES2prev();
    });

    $('.ES2next').click(function(){
        ES2next();
    });

});

/* sub 이벤트 #3-2 이벤트 기획전 슬라이드 #3 이 책을 구매~ */
$(function(){
    function ES3prev(){
        $('.ESB3 li:last').prependTo('.ESB3');
        $('.ESB3').css('margin-left', 0);
        $('.ESB3').stop().animate({marginLeft:0}, 800);
    }

    function ES3next(){
        $('.ESB3').stop().animate({marginLeft:0}, function(){
            $('.ESB3 li:first').appendTo('.ESB3');
            $('.ESB3').css('margin-left', 0);
        });
    }

    function ES3slide(){
        $('.ESB3').stop().animate({marginLeft:0}, function(){
            $('.ESB3 li:first').appendTo('.ESB3');
            $('.ESB3').css('margin-left', 0);
        });
    }

    setInterval(ES3slide, 4000);

    $('.ES3prev').click(function(){
        ES3prev();
    });

    $('.ES3next').click(function(){
        ES3next();
    });

});