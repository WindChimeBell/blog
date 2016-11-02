
var dw = $(window).width();//屏幕宽度
var siftCtrl = false;
var changeNum = 0;

screenChange();

//当html页面加载完成触发
$(window).on("load",function(){
	screenChange();
	//头部弹窗
	setTimeout(function(){
		$("#product-banner").slideToggle(1000);
	},3000);
	
	$("#seMask").css("height",$("body").height());
	siftT();
});

//当屏幕宽度改变时触发
$(window).on("resize",function(){
	dw = $(window).width();
	screenChange();
});

//移动端和PC端的切换
function screenChange(){
	(dw < 640) ? $("#class_link").prop("href","css/product_classify_MB.css") : $("#class_link").prop("href","css/product_classify_PC.css");
}

//筛选页面效果
function siftT(){
	//点击筛选弹出筛选页
	$(".sift").click(function(){
		$("#cplb").css("display","block");
		$("#seMask").css("display","block");
	});
	$("#seMask").click(function(){
		$("#cplb").css("display","none");
		$(this).css("display","none");
	});
	
	//筛选页面下拉部分效果
	$(".CT_arrowT").click(function(){
		var Cindex = $(this).attr("data-index");
		siftCtrl = ($(this).attr("data-ctrl") == "0")? false : true;
		$(".cplb-main-m-lb-one-1").eq(Cindex).find("li:gt(2)").stop().slideToggle();
		if(siftCtrl){
			siftCtrl = false;
			$(this).attr("data-ctrl","0");
			$(this).css("background-image","url(img/product_classify_MB/PR_arrowB.png)");
		}else{
			siftCtrl = true;
			$(this).attr("data-ctrl","1");
			$(this).css("background-image","url(img/product_classify_MB/PR_arrowT.png)");
		}
	});
	
	$(".cplb-main-m-lb-one-1").find("li").click(function(){
		$(this).css({
			"background-color":"red",
			"color":"#fff",
		});
	});
	
	//重选
	$(".select_btn1").click(function(){
		$(".cplb-main-m-lb-one-1").find("li").css({
			"background-color":"#E8E8E8",
			"color":"#000",
		});
	});
	//确定选项
	$(".select_btn2").click(function(){
		$("#cplb").css("display","none");
		$("#seMask").css("display","none");
	});
}
