/* sub #2-2 책소개 펼쳐보기 */
$(function () {
    $(".text_spreadIF").eq(0).click(function () {
        $(".SBIFC").height("auto");
        $(".text_spreadIF").eq(0).hide();
        $(".IFhs").show();
        $(".text_spreadIF").eq(1).show();
    });
});

/* sub #2-2 책소개 접어보기 */
$(function () {
    $(".text_spreadIF").eq(1).click(function () {
        $(".SBIFC").height("auto");
        $(".text_spreadIF").eq(1).hide();
        $(".IFhs").hide();
        $(".text_spreadIF").eq(0).show();
    });
});

/* sub #2-3 출판사 서평 펼쳐보기 */
$(function () {
    $(".text_spreadPC").eq(0).click(function () {
        $(".SBPC").height("auto");
        $(".text_spreadPC").eq(0).hide();
        $(".PChs").show();
        $(".text_spreadPC").eq(1).show();
    });
});

/* sub #2-3 출판사 서평 접어보기 */
$(function () {
    $(".text_spreadPC").eq(1).click(function () {
        $(".SBPC").height("auto");
        $(".text_spreadPC").eq(1).hide();
        $(".PChs").hide();
        $(".text_spreadPC").eq(0).show();
    });
});

/* sub #2-4 추천사 펼쳐보기 */
$(function () {
    $(".text_spreadRC").eq(0).click(function () {
        $(".SBRC").height("auto");
        $(".text_spreadRC").eq(0).hide();
        $(".RChs").show();
        $(".text_spreadRC").eq(1).show();
    });
});

/* sub #2-4 추천사 접어보기 */
$(function () {
    $(".text_spreadRC").eq(1).click(function () {
        $(".SBRC").height("auto");
        $(".text_spreadRC").eq(1).hide();
        $(".RChs").hide();
        $(".text_spreadRC").eq(0).show();
    });
});

/* sub #2-5 목차 펼쳐보기 */
$(function () {
    $(".text_spreadTC").eq(0).click(function () {
        $(".SBTC").height("auto");
        $(".text_spreadTC").eq(0).hide();
        $(".TChs").show();
        $(".text_spreadTC").eq(1).show();
    });
});

/* sub #2-5 목차 접어보기 */
$(function () {
    $(".text_spreadTC").eq(1).click(function () {
        $(".SBTC").height("auto");
        $(".text_spreadTC").eq(1).hide();
        $(".TChs").hide();
        $(".text_spreadTC").eq(0).show();
    });
});

/* sub #2-6 본문중에서 펼쳐보기 */
$(function () {
    $(".text_spreadMC").eq(0).click(function () {
        $(".SBMC").height("auto");
        $(".text_spreadMC").eq(0).hide();
        $(".MChs").show();
        $(".text_spreadMC").eq(1).show();
    });
});

/* sub #2-6 본문중에서 접어보기 */
$(function () {
    $(".text_spreadMC").eq(1).click(function () {
        $(".SBMC").height("auto");
        $(".text_spreadMC").eq(1).hide();
        $(".MChs").hide();
        $(".text_spreadMC").eq(0).show();
    });
});

/* sub #2-7 저자소개 펼쳐보기 */
$(function () {
    $(".text_spreadAC").eq(0).click(function () {
        $(".SBAC").height("auto");
        $(".text_spreadAC").eq(0).hide();
        $(".AChs").show();
        $(".text_spreadAC").eq(1).show();
    });
});

/* sub #2-7 저자소개 접어보기 */
$(function () {
    $(".text_spreadAC").eq(1).click(function () {
        $(".SBAC").height("auto");
        $(".text_spreadAC").eq(1).hide();
        $(".AChs").hide();
        $(".text_spreadAC").eq(0).show();
    });
});