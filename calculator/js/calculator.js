
var bodys = document.body;
var dw = $(window).width() || $("body").width();//屏幕宽度

$(function(){
	dw = $(window).width() || $("body").width();
	
	$(".baseInp input").val($(".baseNum").text());
	if(dw <= 640){
		calInputWidth();
	}else{
		appointSucc();//预约申请成功
		PHeffect(".send_main input",".phTXT");//placeholeder效果
		hoverAddClass(".MRH_icons li","MRHI_Active");
		txtTipsT(".informationL ul li a");
	}
});

//文本title提示
function txtTipsT(obj){
	$(obj).each(function(){
		$(this).prop("title",$(this).text());
	});
}

//移动端动态计算input宽度
function calInputWidth(){
	$(".IMI_inp").each(function(){
		var thisO = $(this);
		var lenSum = thisO.width();
		var lenA = thisO.find("span").width();
		var lenB = thisO.find("em").width();
		var numL = lenSum - lenA - lenB - 14;
		thisO.find("input").width(numL);
	});
}

//hover添加class效果
function hoverAddClass(obj,objT){
	//获取该页面显示的active的index
	var index = 0;
	$(obj).each(function(){
		var classT = $(this).prop("class");
		if(classT.indexOf(objT) > -1){
			index = $(this).index();
		}
	});
	
	//hover添加对应的class
	$(obj).hover(function(){
		$(obj).removeClass(objT);
		$(this).addClass(objT);
		$(obj).eq(index).addClass(objT);
	},function(){
		$(obj).removeClass(objT);
		$(obj).eq(index).addClass(objT);
	});
	
}

//placeholeder效果Right
function PHeffect(obj,txt){
	$(obj).keyup(function(){
		if($(this).val() != ""){
			$(this).parents("label").find(txt).hide();
		}else{
			$(this).parents("label").find(txt).show();
		}
	});
}

//预约申请成功弹窗
function appointSucc(){
	$(".AB_submit").click(function(){
		$(".free-two").show();
		$("#seMask").show();
	});
	$(".two-del").click(function(){
		$(".free-two").hide();
		$("#seMask").hide();
	});
}