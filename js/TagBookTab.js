$(function () {
    var i = 0;
    $(".AreaTab > li").mouseenter(function () {
        i = ($(this).index()) + 1
        $(".AreaContentBox > div").hide()

        $(".AreaTab > li").css({"border-bottom": "none"})

        $(".AreaTab > li:hover").css({"border-bottom": "2px solid #e66a57"})

        $(".AreaContentBox > div:nth-of-type" + "(" + i + ")").stop().fadeIn("fast")
    })
});