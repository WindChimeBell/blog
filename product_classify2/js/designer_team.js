/*广告的翻页栏js开始*/
/*初始默认值*/
$(".background-skip-dot:first").css("background-color","white");
/*点击开始*/
$(".background-skip-dot").mousedown(function(){
	$(".background-skip-dot").css("background-color","#CDCDCD");
	$(this).css("background-color","white");
});
/*广告的翻页栏js结束*/


/*设计师点击效果js 开始*/
/*初始默认值*/
$(".designer1001").show();
/*点击开始*/
$(".designer-team-table-left li").mouseenter(function(){
	$(".designer-team-table-introduce").hide();
	$(".designer-team-table-img-big").hide();
	$c=$(this).attr("class");
	$("."+$c).show(150);
});


/*设计师点击效果js 结束*/

/*下面是贵族气质之家的展示效果js 开始*/
/*修改第一个li的样式作为默认值*/
$(".designer-showtime-navi li:first").css("width", "161px");
$(".designer-showtime-navi li:first").css("height", "139px");
$(".designer-showtime-navi li:first").css("background-image", "url(img/designer_team/designer-navi-hover.png)");
$(".designer-showtime-navi li:first").css("margin-left", "0");
$(".designer-showtime-navi li:first").css("color", "white");
$(".designer-showtime-navi li:first").css("font", "24px '微软雅黑'");
$(".designer-showtime-navi li:first").css("text-align", "center");
$(".designer-showtime-navi li:first").css("line-height", "139px");
$(".designer-showtime-navi li:first").css("background-color", "white");

/*鼠标点击的design样式*/
$(".designer-showtime-navi li").mousedown(function() {
	/*还原所有的li样式*/
	$(".designer-showtime-navi li").css("width", "139px");
	$(".designer-showtime-navi li").css("height", "58px");
	$(".designer-showtime-navi li").css("background-image", "url()");
	$(".designer-showtime-navi li").css("margin-left", "9px");
	$(".designer-showtime-navi li").css("color", "#A4A4A4");
	$(".designer-showtime-navi li").css("font", "18px '微软雅黑'");
	$(".designer-showtime-navi li").css("text-align", "center");
	$(".designer-showtime-navi li").css("line-height", "60px");
	$(".designer-showtime-navi li").css("background-color", "#EEEEEE");
	/*修改点击后的样式*/
	$(this).css("width", "161px");
	$(this).css("height", "139px");
	$(this).css("background-image", "url(img/designer_team/designer-navi-hover.png)");
	$(this).css("margin-left", "0");
	$(this).css("color", "white");
	$(this).css("font", "24px '微软雅黑'");
	$(this).css("text-align", "center");
	$(this).css("line-height", "139px");
	$(this).css("background-color", "white");
});
/*下面是贵族气质之家的展示效果js 结束*/

/*页码默认样式*/
$(".page-button:first").css("background-color","#D7000F");
$(".page-button a:first").css("color","white");

/*点击变色*/
$(".page-button").mousedown(function(){
	$(".page-button").css("background-color","#EBEBEB");
	$(".page-button a").css("color","#949494");
	$(this).css("background-color","#D7000F");
	$(this).find("a").css("color","white");
});
