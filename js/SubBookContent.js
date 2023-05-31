/* sub 내용 #2-2 책소개 JS */
$(function(){
    $.get("txt/SBIFC.txt",function(data){
        $(".SBIFC").html(data);
    });
});

/* sub 내용 #2-3 출판사 서평 JS */
$(function(){
    $.get("txt/SBPC.txt",function(data){
        $(".SBPC").html(data);
    });
});

/* sub 내용 #2-4 추천사 JS */
$(function(){
    $.get("txt/SBRC.txt",function(data){
        $(".SBRC").html(data);
    });
});

/* sub 내용 #2-5 목차 JS */
$(function(){
    $.get("txt/SBTC.txt",function(data){
        $(".SBTC").html(data);
    });
});

/* sub 내용 #2-6 본문중에서 JS */
$(function(){
    $.get("txt/SBMC.txt",function(data){
        $(".SBMC").html(data);
    });
});

/* sub 내용 #2-7 저자소개 JS */
$(function(){
    $.get("txt/SBAC.txt",function(data){
        $(".SBAC").html(data);
    });
});