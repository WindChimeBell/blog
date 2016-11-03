
var dw = $(window).width();//屏幕宽度
var siftCtrl = false;
var changeNum = 0;

screenChange();

//当html页面加载完成触发
$(window).on("load",function(){
	screenChange();
	
	if(dw < 640){
		searchT();
		siftT();
		selectPageT("#E8E8E8","red","#fff");
		
		$(".banBox").css("display","none");//关闭弹窗广告
		$("#seMask").css("height",$("body").height());//使蒙版的高度和body高度一致
	}else{
		adBan();
		productFP();
		selectPageT("#fff","#fff","red");
	}
	adaptHlist(dw);
});

//移动端左右产品图片自适应高度
function adaptHlist(dw){
	if(dw < 640 && dw > 360){
		$(".product-right").css("height",$(".productes-main-one-img").find("img").height());
	}
}

//点击搜索框弹出搜索页面
function searchT(){
	$("#search_MB").click(function(){
		$(".productes").css("display","none");
		$("#sePage_MB").css("display","block");
	});
	$(".head_back").click(function(){
		$(".productes").css("display","block");
		$("#sePage_MB").css("display","none");
	});
}

//当屏幕宽度改变时触发
$(window).on("resize",function(){
	dw = $(window).width();
	adaptHlist(dw);
	screenChange();
});

//商品分页数字效果
function productFP(){
	$("#PCB_page LI").click(function(){
		$("#PCB_page").find("li").css({
			"background-color":"#fff",
			"color":"#000",
		}).eq($(this).index()).css({
			"background-color":"#D22B34",
			"color":"#fff",
		});
	});
}

//头部弹窗效果
function adBan(){
	var banNum = 45;
	var banChange = 3;
	setTimeout(function(){
		$("#product-banner").slideToggle(1000);
	},1000);
	setTimeout(function(){
		$(".banBox").css("display","block");
		var timerBan = setInterval(function(){
			banNum -= banChange;
			if(banNum < 20){
				banChange = 1.5;
			}else if(banNum < 30){
				banChange = 2;
			}
			if(banNum <= 0){
				banNum = 0;
				clearInterval(timerBan);
			}
			$(".banBox").css("right",banNum + "%");
		},45);
	},2000);
	//点击弹窗按钮弹出关闭弹窗
	$(".banBox").click(function(){
		setTimeout(function(){
			$("#product-banner").slideToggle();
		},200);
	});
}

//移动端和PC端的切换
function screenChange(){
	if(dw < 640){
		$("#class_link").prop("href","css/product_classify_MB.css");
	}else{
		$("#class_link").prop("href","css/product_classify_PC.css");
	}
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
		$(".cplb-main-m-lb-one-1").eq(Cindex).find("li:gt(2)").toggle();
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

//筛选效果
function selectPageT(bgCa,bgCb,Tcolor){
	$(".cplb-main-m-lb-one-1 ul li").on("click",function(){
		$(this).parent().find("li").css({
			"background-color": bgCa,
			"color":"#000",
		});
		$(this).css({
			"background-color": bgCb,
			"color":Tcolor,
		});
	});
}
