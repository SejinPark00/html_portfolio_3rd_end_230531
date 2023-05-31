/* slide chioce menu button click slide img change */
$(function(){
    let i = 0;

    /* 슬라이드 메뉴목록 미니버튼에 따른 img 변경*/
    $('.scmn1 > li').mouseenter(function(){ 
        i = $(this).index();
    });

        /* scmn1 */
    $('.scmn1 > li').eq(0).mouseenter(function(){
        $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(0).fadeIn('slow');
    });

    $('.scmn1 > li').eq(1).mouseenter(function(){
        $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(1).fadeIn('slow');
    });

    $('.scmn1 > li').eq(2).mouseenter(function(){
        $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(2).fadeIn('slow');
    });

    $('.scmn1 > li').eq(3).mouseenter(function(){
        $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(3).fadeIn('slow');
    });

    $('.scmn1 > li').eq(4).mouseenter(function(){
        $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(4).fadeIn('slow');
    });

        /* scmn2 */
    $('.scmn2 > li').mouseenter(function(){ 
        i = $(this).index();
    });

    $('.scmn2 > li').eq(0).mouseenter(function(){
        $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(6).fadeIn('slow');
    });

    $('.scmn2 > li').eq(1).mouseenter(function(){
        $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(7).fadeIn('slow');
    });

    $('.scmn2 > li').eq(2).mouseenter(function(){
        $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(8).fadeIn('slow');
    });

    $('.scmn2 > li').eq(3).mouseenter(function(){
        $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(9).fadeIn('slow');
    });

    $('.scmn2 > li').eq(4).mouseenter(function(){
        $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(10).fadeIn('slow');
    });

    /* 슬라이드 메뉴목록 버튼에 따른 img 변경 */
    $('.scm').mouseenter(function(){ 
        i = $(this).index();
    });

    $('.scm').eq(1).mouseenter(function(){
        $('.scm').eq(1).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.scm').eq(3).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(5).fadeIn('slow');
    });

    $('.scm').eq(3).mouseenter(function(){
        $('.scm').eq(3).css({"border-top" : "3px solid orangered"});
        $('.scm').eq(0).css({"border-top" : "1px solid black"});
        $('.scm').eq(1).css({"border-top" : "1px solid black"});
        $('.scm').eq(2).css({"border-top" : "1px solid black"});
        $('.SIB li').stop().fadeOut();
        $('.SIB li').eq(11).fadeIn('slow');
    });

        /* auto slide */
    function slide(){
        i++;
        if(i > $('.SIB li:last').index()){
            i=0;
        }

        $('.SIB li').eq(i).stop().fadeIn("slow");
        $('.SIB li').eq(i - 1).stop().fadeOut();

        if(i <= 4 ){
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
            
        }  else if(i == 5 ){
            $('.scm').eq(1).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        } else if( i <= 10 ){
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        }  else {
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "3px solid orangered"});
        }
    }

        /* next button click slide */
    function next(){
        i++;
        if(i > $('.SIB li:last').index()){
            i=0;
        }

        $('.SIB li').eq(i).stop().fadeIn("slow");
        $('.SIB li').eq(i - 1).stop().fadeOut();

        if(i <= 4 ){
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
            
        }  else if(i == 5 ){
            $('.scm').eq(1).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        } else if( i <= 10 ){
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
        }  else {
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "3px solid orangered"});
        }
    }

        /* prev button click slide */
    function prev(){
        i--;
        if(i > $('.SIB li:last').index() || i < -11){
            i=0;
        }

        $('.SIB li').eq(i).stop().fadeIn("slow");
        $('.SIB li').eq(i + 1).stop().fadeOut();

        if(i == 1 || i == -11){
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }   else if(i == 2 || i == -10){
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }   else if(i == 3 || i == -9){
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }   else if(i == 4 || i == -8){
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});

            /* 2 */
        }   else if(i == 5 || i == -7){
            $('.scm').eq(1).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});

            /* 3 */
        }   else if(i == 6 || i == -6){
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }   else if(i == 7 || i == -5){
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }   else if(i == 8 || i == -4){
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }   else if(i == 9 || i == -3){
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        } else if(i == 10 || i == -2){
            $('.scm').eq(2).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});

            /* 4 */
        }   else if(i == 11 || i == -1){
            $('.scm').eq(3).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(0).css({"border-top" : "1px solid black"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            
        }   else {
            $('.scm').eq(0).css({"border-top" : "3px solid orangered"});
            $('.scm').eq(1).css({"border-top" : "1px solid black"});
            $('.scm').eq(2).css({"border-top" : "1px solid black"});
            $('.scm').eq(3).css({"border-top" : "1px solid black"});
        }
    }

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });

        /* interval setting */
    var SlideTime = setInterval(slide, 5000);

    $('.scmn1').mouseover(function(){
        clearInterval(SlideTime);
    });

    $('.scmn1').mouseout(function(){
        SlideTime = setInterval(slide, 5000);
    });

    $('.scmn2').mouseover(function(){
        clearInterval(SlideTime);
    });

    $('.scmn2').mouseout(function(){
        SlideTime = setInterval(slide, 5000);
    });

    $('.scm').eq(3).mouseover(function(){
        clearInterval(SlideTime);
    });

    $('.scm').eq(3).mouseout(function(){
        SlideTime = setInterval(slide, 5000);
    });

    $('.scm').eq(1).mouseover(function(){
        clearInterval(SlideTime);
    });

    $('.scm').eq(1).mouseout(function(){
        SlideTime = setInterval(slide, 5000);
    });

});