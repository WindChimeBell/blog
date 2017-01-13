
var bodys = document.body;
var dw = $(window).width() || $("body").width();//屏幕宽度

//页面结构加载完成触发
$(function(){
	dw = $(window).width() || $("body").width();
	
	if(dw <= 640){
		addHrefT(".MBhref","phyStore_map.html");
		resetIMG(".loadImg","data-srcm");
	}else{
		sendTel(".AD_tel",".AD_box");//发送地址到手机
		sendTel(".telIcon",".NSS_addr li");//发送地址到手机
		txtTipsT(".cityO");//赋予地址title属性
		resetIMG(".loadImg","data-srcp");
		PHeffect(".send_main input",".phTXT");//placeholeder效果
		clickCloseT(".close",".send_box","#seMask");//点击关闭发送地址弹窗
		clickCloseT(".succ-del",".succ_box","#seMask");//点击关闭发送地址弹窗
		clickClopen(".send_btn",".send_box",".succ_box");
		
		//共同js样式
		hoverPopup(".DP_group",".DP_group_list");//顶部东鹏集团下拉框
		backTop(".backTop");//置顶
		susNavT("#container","#susNav");//悬浮栏
		wechat();//底部微信效果
	}
});

//页面加载完成触发
$(window).load(function(){
	dw = $(window).width() || $("body").width();
	
	if(dw <= 640){
		getCityName();
	}else{
		
	}
});

//添加跳转链接
function addHrefT(obj,objT){
	$(obj).prop("href",objT);
}

//发送到手机效果
function sendTel(obj,objP){
	$(obj).click(function(){
		var name = $(this).parents(objP).find(".AD_sp3").text();
		var addr = $(this).parents(objP).find(".cityO").text();
		var tele = $(this).parents(objP).find(".telO").text();
		$(".send_box").show();
		$("#seMask").show();
		$(".SMname").text(name);
		$(".SMaddr").text(addr);
		$(".SMtel").text(tele);
	});
}

//点击关闭弹窗，打开其他弹窗效果
function clickClopen(obj,objT1,objT2){
	$(obj).click(function(){
		$(objT1).hide();
		$(objT2).show();
	});
}

//点击关闭弹窗效果
function clickCloseT(obj,objT,mask){
	$(obj).click(function(){
		$(objT).hide();
		$(mask).hide();
	});
}

//placeholeder效果 
function PHeffect(obj,txt){
	$(obj).keyup(function(){
		if($(this).val() != ""){
			$(this).parents("label").find(txt).hide();
		}else{
			$(this).parents("label").find(txt).show();
		}
	});
}

//移动端获取省市
function getCityName(){
	$(".AD_box").each(function(){
		var Cname = $(this).find(".AD_sp1").text() + $(this).find(".AD_sp2").text();
		$(this).find(".MBcity").text(Cname);
	});
}

//图片初始化加载
function resetIMG(obj,objImg){
	$(obj).each(function(){
		$(this).prop("src",$(this).attr(objImg));
	});
}

//common
//文本title提示
function txtTipsT(obj){
	$(obj).each(function(){
		$(this).prop("title",$(this).text());
	});
}

//置顶
function backTop(obj){
	$(obj).click(function(){
		var topT = $(document).scrollTop();
		var timer = setInterval(function(){
			topT -= 220;
			if(topT <= 0){
				topT = 0;
				clearInterval(timer);
			}
			$(window).scrollTop(topT);
		},36);
	});
}

//悬浮栏
function susNavT(objA,objB){
	susNavTZ(objA,objB);
	$(window).scroll(function(){
		susNavTZ(objA,objB);
	});
}

//悬浮栏整合
function susNavTZ(objA,objB){
	var topT = $(document).scrollTop();
	var posA = $(objA).offset().top;
	if(topT >= posA){
		$(objB).show();
	}else{
		$(objB).hide();
	}
}

//hover弹出窗口
function hoverPopup(obj,pup){
	//移上去弹窗出现
	$(obj).mouseenter(function(){
		$(pup).show();
	});
	
	//离开弹窗关闭
	$(obj).mouseleave(function(){
		$(pup).hide();
	});
}

/*底部微信公众号效果*/
function wechat(){
	$(".foot-dd").hover(function(){
		$(this).find("img").stop(true).show(200);
	},function(){
		$(this).find("img").stop(true).hide(200);
	})
}