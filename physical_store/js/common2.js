
var bodys = document.body;
var dw = $(window).width() || $("body").width();//屏幕宽度

$(function(){
	dw = $(window).width() || $("body").width();
	
	if(dw > 640){
		//共同js样式
		susTop("#header");//头部悬浮0113
		hoverPopup(".DP_group",".DP_group_list");//顶部东鹏集团下拉框
		wechat();//底部微信效果
	}
});

//头部悬浮0113
function susTop(obj){
	$(function(){
		var he = $(window).scrollTop();
		var susH = $(obj).height();
		if(he > susH){
			$("#nav").css("margin-top","34px");
			$(obj).css({
				"position":"fixed",
				"top":"0",
				"zIndex":"50",
			});
		}else{
			$("#nav").css("margin-top","0");
			$(obj).css({
				"position":"relative",
				"zIndex":"50",
			});
		}
	});
	
	$(window).scroll(function(){
		var he = $(window).scrollTop();
		var susH = $(obj).height();
		if(he > susH){
			$("#nav").css("margin-top","34px");
			$(obj).css({
				"position":"fixed",
				"top":"0",
				"zIndex":"50",
			});
		}else{
			$("#nav").css("margin-top","0");
			$(obj).css({
				"position":"relative",
				"top":"0",
				"zIndex":"50",
			});
		}
	});
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