
var bodys = document.body;
var dw = $(window).width() || $("body").width();//屏幕宽度
var arrName = ["涂料","地板","壁纸","墙砖","窗帘","地砖"];
var arrWord = ["升","块","卷","块","卷","块"];
var arrHref = ["coating_calculator.html","floor_calculator.html","wallpaper_calculator.html","wallBrick_calculator.html","curtain_calculator.html","floorTile_calculator.html"];
var resultL = 0;//计算出来的结果

$(function(){
	dw = $(window).width() || $("body").width();
	corressT();//点击“计算结果”按钮的函数
});

//tips弹窗
var timer = null;//tips层定时器
function tipsBox(){
	clearTimeout(timer);
	var numB = 0;
	var sumB = $(".IMI_inp input").length;
	$(".IMI_inp input").each(function(){
		var cgTXT = $(this).parents(".IMI_inp").find("span").text();//需要提示的文字
		cgTXT = cgTXT.replace("：","");
		var topT = $(this).offset().top;//输入框到浏览器左顶点的top值
		var leftT = $(this).offset().left;//输入框到浏览器左顶点的left值
		
		//如果输入为空，则弹出提示框提示
		if($(this).val() == ""){
			var baTXT = "请输入" + cgTXT;
			appendLabel(baTXT,topT,leftT);
			
			$(this).focus();
			return false;
		}
		
		//如果输入格式错误，则弹出提示框提示
		if(regInp($(this).val(),topT,leftT,cgTXT) == false){
			$(this).focus();
			return false;
		}
		numB++;
	});
	if(numB < sumB){
		return false;
	}else{
		return true;
	}
}

//给每个input添加正则
function regInp(val,topT,leftT,cgTXT){
	var reg = /^[0-9]+.?[0-9]*$/;
	if(!reg.test(val)){
		var baTXT = cgTXT+"只能输入数字格式";
		appendLabel(baTXT,topT,leftT);
		return false;
	}
}

//插入标签
function appendLabel(baTXT,topT,leftT){
	var tipA = "<div class='tipsT'><span>"+baTXT+"</span><i></i></div>";
	$("body").append(tipA);
	
	//不同设备获取到的offsetTop的值不一样，因此给不一样的算法
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	//var MBnum = 0;
	var MBinpH = $(".IMI_inp").height();
//	if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
//		dw = $(window).width() || $("body").width();
//		if(dw < 350){
//			MBnum = 120;
//		}else if(dw < 640){
//			MBnum = 80;
//		}
//	}else{
//		if(dw <= 640){
//			MBnum = -60;
//		}
//	}
	
	$(".tipsT").css({
		"top":topT,
		"left":leftT + 126,
	});
	
	$(".tipsT").addClass("bounceInT");
	
	timer = setTimeout(function(){
		$(".tipsT").remove();
	},2000);
}



//对应触发函数
function  corressT(){
	var num = $("#container").attr("data-num");
	
	switch (num){
		case "2":
			defaultNum("#floor_long","#floor_width");
			break;
		case "4":
			defaultNum("#floorBrick_long","#floorBrick_width");
			break;
		case "5":
			$("#cloth_width").val(1.5);
			break;
		case "6":
			defaultNum("#floorbrick_long","#floorbrick_width");
			break;
		default:
			break;
	}
	
	$(".result_btn").on("click",function(){
		if(tipsBox() == false){
			return false;
		}
		switch (num){
			case "1":
				coatingCal();
				break;
			case "2":
				floorCal();
				break;
			case "3":
				wallPaper();
				break;
			case "4":
				floorBrickCal();
				break;
			case "5":
				curtainCal();
				break;
			case "6":
				floor_brick();
				break;
			default:
				break;
		}
		
		if(dw <= 640){
			var aHref = $(".result_btn").attr("data-href") + "&CalResultNum=" + resultL;
			$(".result_btn").prop("href",aHref);//赋予移动端中开始计算按钮的href链接
		}
	});
}

//默认值填写
function defaultNum(longT,widthT){
	//将规格尺寸填入到对应的框中(默认值)
	var selNum = $("#select_num").val();
	var selNum = selNum.split("*");
	$(longT).val(selNum[0]);
	$(widthT).val(selNum[1]);
	
	$("#select_num").change(function(){
		//将规格尺寸填入到对应的框中(默认值)
		var selNum = $("#select_num").val();
		var selNum = selNum.split("*");
		$(longT).val(selNum[0]);
		$(widthT).val(selNum[1]);
	});
}

//涂料计算器
function coatingCal(){  
 	var room_long=0,room_width=0,room_height=0,door_height=0,door_width=0,door_num=0;
 	var window_height=0,window_width=0,window_num=0;
 	var paintnum=0;
 	var rate=0;
 	// 给各个变量赋值
 	room_long=$("#room_long").val(); 
 	room_width=$("#room_width").val();
 	room_height=$("#room_height").val();
 
 	door_width=$("#door_width").val();
 	door_height=$("#door_height").val();
 	door_num=$("#door_num").val();
 
 	window_width=$("#window_width").val();
 	window_height=$("#window_height").val();
 	window_num=$("#window_number").val();
 	rate=$("#paint").val();
 	// 开始计算
 	paintnum=(parseFloat(room_long)+parseFloat(room_width))*2*room_height+parseFloat(room_long*room_width);
 	paintnum=paintnum-parseFloat(window_height*window_width*window_num);
 	paintnum=paintnum-parseFloat(door_height*door_width*door_num);
 	var actnum=(Math.round(paintnum/rate*100))/100;
 	$("#wallpaint_num").val(actnum);
 	resultL = actnum;
}

//地板计算器
function floorCal(){
	var room_long = $("#room_long").val()*1000;//房间长度
	var room_width = $("#room_width").val()*1000;//房间宽度
	var floor_long = $("#floor_long").val();//地板长度
	var floor_width = $("#floor_width").val();//地板宽度
	var rate = 0;//损耗量
	var ifFuHe = $("#select_type").val() == "复合地板";
	
	//复合地板的损耗5%左右，实木地板的损耗8%左右
	if(ifFuHe){
		rate = 1.05;
	}else{
		rate = 1.08;
	}
	
	//计算地板数量
	var floorNum = Math.round(((parseFloat(room_long) * parseFloat(room_width)) / (parseFloat(floor_long) * parseFloat(floor_width)))*rate);
	$("#floorNum").val(floorNum);
	resultL = floorNum;
}

//壁纸计算器
function wallPaper(){
    var room_long=0,room_width=0,room_height=0,wallpaperpm=0;
    var wallpapernum=0;
    var rate=1.1;
    // 给各个变量赋值
    room_long=$("#room_long").val();
    room_width=$("#room_width").val();
    room_height=$("#room_height").val(); 
    wallpaperpm=$("#wallpaperpm").val();
    // 开始计算
    // 壁纸用量(卷)＝房间周长×房间高度×1.1÷每卷平米数
    wallpapernum=Math.round(((parseFloat(room_long)+parseFloat(room_width))*2*room_height*rate)/wallpaperpm );
    $("#wallpapernum").val(wallpapernum);
    resultL = wallpapernum;
}

//墙砖计算器
function floorBrickCal(){
	var room_long = $("#room_long").val()*1000;//房间长度
	var room_width = $("#room_width").val()*1000;//房间宽度
	var room_height = $("#room_height").val()*1000;//房间宽度
	var floor_long = $("#floorBrick_long").val();//墙砖长度
	var floor_width = $("#floorBrick_width").val();//墙砖宽度
	
	var door_width = $("#door_width").val()*1000;//房门宽度
 	var door_height = $("#door_height").val()*1000;//房门高度
 	var door_num = $("#door_num").val();//房门扇数
 
 	var window_width = $("#window_width").val()*1000;//窗户宽度
 	var window_height = $("#window_height").val()*1000;//窗户高度
 	var window_num = $("#window_num").val();//窗户扇数
 	
	var rate = 1.05;//损耗量
	
	//计算墙砖数量
	var floorBrickNum = (parseFloat(room_long) + parseFloat(room_width)) * 2 * parseFloat(room_height);//房间墙的面积
	floorBrickNum = floorBrickNum - (parseFloat(door_width*door_height*door_num)) - (parseFloat(window_width*window_height*window_num));//减去房门和窗户的面积
	floorBrickNum = Math.round((floorBrickNum / (parseFloat(floor_long) * parseFloat(floor_width)))*rate);
	$("#floorBrickNum").val(floorBrickNum);
	resultL = floorBrickNum;
}

//窗帘计算器
function curtainCal(){
	var window_width = $("#window_width").val();//窗户宽度
 	var window_height = $("#window_height").val();//窗户高度
 	var cloth_width = $("#cloth_width").val();//窗户高度
 	//窗帘用料计算方法
 	var cloth_num = Math.ceil((parseFloat(window_width) + 0.15 * 2) * 2 / parseFloat(cloth_width) * (0.15 + parseFloat(window_height) + 0.5 + 0.2));
 	$("#cloth_num").val(cloth_num);
 	resultL = cloth_num;
}

//地砖计算器
function floor_brick(){
 	var room_long=0,room_width=0,floorbrick_long=0,floorbrick_width=0;
 	var floorbricknum=0;
 	var rate=1.05;
 	// 给各个变量赋值
 	room_long=$("#room_long").val()*1000;
 	room_width=$("#room_width").val()*1000;
 	floorbrick_long=$("#floorbrick_long").val();
 	floorbrick_width=$("#floorbrick_width").val();
 	// 开始计算
	// 用砖数量（块数）=（房间的长度÷砖长）×（房间宽度÷砖宽）×1.05
	floorbricknum=Math.round((room_long/floorbrick_long)*(room_width/floorbrick_width)*rate);
  	$("#floorbricknum").val(floorbricknum);
  	resultL = floorbricknum;
}


