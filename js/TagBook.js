/* 문학 도서 #1 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"문학"},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        var str3=msg.documents[i].sale_price;
        str4 = str3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        $(".AreaContent1 li").eq(i).append("<a href='sub.html'><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".AreaContent1 li").eq(i).append("<h3><a href=''>"+str2+"..."+"</a></h3>");
        $(".AreaContent1 li").eq(i).append("<h4><a href=''>"+str4+"원"+"</a></h4>");      

    }

});

/* 인문/교양 도서 #2 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"인문/교양"},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        var str3=msg.documents[i].sale_price;
        str4 = str3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        $(".AreaContent2 li").eq(i).append("<a href='sub.html'><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".AreaContent2 li").eq(i).append("<h3><a href=''>"+str2+"..."+"</a></h3>");
        $(".AreaContent2 li").eq(i).append("<h4><a href=''>"+str4+"원"+"</a></h4>");      

    }

});

/* 요리 도서 #3 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"요리"},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        var str3=msg.documents[i].sale_price;
        str4 = str3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        $(".AreaContent3 li").eq(i).append("<a href='sub.html'><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".AreaContent3 li").eq(i).append("<h3><a href=''>"+str2+"..."+"</a></h3>");
        $(".AreaContent3 li").eq(i).append("<h4><a href=''>"+str4+"원"+"</a></h4>");      

    }

});

/* 유아/아동 도서 #4 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"어린이"},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        var str3=msg.documents[i].sale_price;
        str4 = str3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        $(".AreaContent4 li").eq(i).append("<a href='sub.html'><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".AreaContent4 li").eq(i).append("<h3><a href=''>"+str2+"..."+"</a></h3>");
        $(".AreaContent4 li").eq(i).append("<h4><a href=''>"+str4+"원"+"</a></h4>");      

    }

});

/* 학습/어학 도서 #5 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"학습"},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        var str3=msg.documents[i].sale_price;
        str4 = str3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        $(".AreaContent5 li").eq(i).append("<a href='sub.html'><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".AreaContent5 li").eq(i).append("<h3><a href=''>"+str2+"..."+"</a></h3>");
        $(".AreaContent5 li").eq(i).append("<h4><a href=''>"+str4+"원"+"</a></h4>");      

    }

});

/* 소설 #6 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"소설"},
    headers:{Authorization: "KakaoAK 1a022e5c7e30039df19a3f41395dd9d9"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,15);

        var str3=msg.documents[i].sale_price;
        str4 = str3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        $(".AreaContent6 li").eq(i).append("<a href='sub.html'><img src='"+msg.documents[i].thumbnail+"</a>'/>");
        $(".AreaContent6 li").eq(i).append("<h3><a href=''>"+str2+"..."+"</a></h3>");
        $(".AreaContent6 li").eq(i).append("<h4><a href=''>"+str4+"원"+"</a></h4>");      

    }

});