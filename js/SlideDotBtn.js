/* 미디어 추천 슬라이드 버튼 */
$(function () {
    var wid = $('.MRS').width();
    var i = $(".MRBdot li.on").index();
    var len = $(".MRSlide>li").length;
    $(".MRBprev").click(function () {
        if (i == 0) {
            i = len - 1;
        } else {
            i = i - 1;
        }

        showSlide();
    });

    $(".MRBnext").click(function () {
        if (i == 2) {
            i = 0;
        } else {
            i = i + 1;
        }
        showSlide();
    });

    $(".MRBdot li").click(function () {
        i = $(this).index();
        showSlide();
    });

    function showSlide() {
        $(".MRBdot li").removeClass("on");
        $(".MRBdot li").eq(i).addClass("on");
        $(".MRSlide>li").stop(true, true).fadeOut();
        $(".MRSlide>li").eq(i).stop(true, true).fadeIn();
    }

});

/* 이책어때 슬라이드 버튼 */
$(function () {
    var wid = $('.HBBS').width();
    var i = $(".HBBdot li.on").index();
    var len = $(".HBBSlide>li").length;
    $(".HBBprev").click(function () {
        if (i == 0) {
            i = len - 1;
        } else {
            i = i - 1;
        }

        showSlide();
    });

    $(".HBBnext").click(function () {
        if (i == 1) {
            i = 0;
        } else {
            i = i + 1;
        }
        showSlide();
    });

    $(".HBBdot li").click(function () {
        i = $(this).index();
        showSlide();
    });

    function showSlide() {
        $(".HBBdot li").removeClass("on");
        $(".HBBdot li").eq(i).addClass("on");
        $(".HBBSlide>li").stop(true, true).fadeOut();
        $(".HBBSlide>li").eq(i).stop(true, true).fadeIn();
    }

});