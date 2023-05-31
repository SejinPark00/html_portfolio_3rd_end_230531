$(function(){
    $.ajax({
        url:"./js/CSBook.json",
        dataType:"json",
        success : function(data){
            if(data.length > 0){
                for (var i in data){
                    $(".CSBook").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].url + "'/>" + '</a>');
                    $(".CSBook").eq(i).append('<h3><a href="#">' + data[i].title + "</a></h3>");
                    $(".CSBook").eq(i).append('<h4><a href="#">' + data[i].sub_title + "</a></h4>");
                }
            }
        }
    });
});