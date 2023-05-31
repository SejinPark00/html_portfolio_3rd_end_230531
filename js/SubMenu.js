/* section #2 메뉴이동 */

$(function () {
	$(".SubMenu ul li").click(function () {
		var i = $(this).index();
		$(".SubMenu ul li").removeClass("on1");
		$(".SubMenu ul li").eq(i).addClass("on1");
	})
});