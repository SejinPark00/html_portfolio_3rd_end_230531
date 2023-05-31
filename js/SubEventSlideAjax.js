/* SubEventSlide #1 자기계발  */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: {query:"계발", size:"12",},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        $(".ESB1 li").eq(i).append("<a href=''><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".ESB1 li").eq(i).append("<p><a href=''>"+str2+"..."+"</a></p>");

    }

});

/* SubEventSlide #2 이 책을 조회~  */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: {query:"처세", size:"12",},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        $(".ESB2 li").eq(i).append("<a href=''><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".ESB2 li").eq(i).append("<p><a href=''>"+str2+"..."+"</a></p>");

    }

});

/* SubEventSlide #3 이 책을 구매한~  */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: {query:"소설", size:"12",},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        $(".ESB3 li").eq(i).append("<a href=''><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".ESB3 li").eq(i).append("<p><a href=''>"+str2+"..."+"</a></p>");

    }

});