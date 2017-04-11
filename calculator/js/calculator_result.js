
var bodys = document.body;
var dw = $(window).width() || $("body").width();//屏幕宽度
var arrName = ["涂料","地板","壁纸","墙砖","窗帘","地砖"];
var arrWord = ["升","块","卷","块","卷","块"];
var arrHref = ["coating_calculator.html","floor_calculator.html","wallpaper_calculator.html","wallBrick_calculator.html","curtain_calculator.html","floorTile_calculator.html"];

$(function(){
	dw = $(window).width() || $("body").width();
	
	if(dw <= 640){
		locationSear("CalRE","CalResultNum");
	}
});

//根据链接数据不同进行操作
function locationSear(obj,obj2){
	//获取网址的数据，并解析
	var localS = window.location.search;
	localS = localS.substr(1);
	var localSP = localS.split("&");
	var baseObj = {};
	for (var i=0;i<localSP.length;i++) {
		var arr = localSP[i].split("=");
		baseObj[arr[0]] = arr[1];
	}
	
	var localSInum = baseObj.CalRE - 1;
	$(".cgName em,.MB_title em").text(arrName[localSInum]);//将标题名字对应赋予
	$(".cgNum em").text(arrWord[localSInum]);//将量词对应赋予
	$(".cgHref").prop("href",arrHref[localSInum]);//赋予“重新计算”链接
	
	$(".cgNum span").text(baseObj.CalResultNum);//将计算结果赋值在对应的位置
}
