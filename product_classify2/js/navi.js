/*导航栏样式*/

/**鼠标移动至全部分类，一级导航显示**/
$(".navi-top-all").mouseenter(function() {
	$(".navi-main-bg").slideDown(500); //大背景层显示

});
$(".navi").mouseleave(function() {
	$(".navi-main-bg").slideUp(200); //大背景层隐藏
});

/**鼠标移动到一级导航，二级导航显示**/
$(".navi-main-all-one").mouseenter(function() {
	$id = $(this).attr("id");
	$("." + $id).show();
	//二级导航动画效果，配合相应CSS使用
	$("." + $id).animate({
		"width":"445px"
	},350);
});
$(".navi-main-all-one").mouseleave(function() {
	$id = $(this).attr("id");
	$("." + $id).hide();
});

/**鼠标停留在二级导航，导航显示**/
$(".navi-main-detail-border").mouseenter(function() {
	$(this).show();
});
$(".navi-main-detail-border").mouseleave(function() {
	$(this).hide();
});