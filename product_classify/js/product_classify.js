
var dw = $(window).width() || $("body").width();//屏幕宽度
var loadNumDY = 0;//对应的数据的第几条
var loadNumOne = 10;//每一次加载的数量

//当html页面加载完成触发
$(function(){
	dw = $(window).width() || $("body").width();
	
	if(dw <= 640){
		ajaxGetT();
		screenTMB();//筛选移动端0306
		MBscreenBor();
		
		$(".banBox").css("display","none");//关闭弹窗广告
	}else{
		imgAdapt(".banImg");
		screenT();//筛选PC端0306
		overHide(".priceL",".productes-main-one-price span",95);
		overPrice(".sumNum",".evaluateNum");
		txtTipsT(".tipsTXT");//商品名称title提示
		
		$(".swiper-wrapper").css("height",$(".cplb-main-m-b").height());
		$(".swiper-slide").css("height",$(".cplb-main-m-b").height());
	}
});

//屏幕宽度改变触发
$(window).resize(function(){
	dw = $(window).width() || $("body").width();
	if(dw >= 1210){
		imgAdapt(".banImg");
	}
});

//商城列表数据ajax获取解析正在编写
function ajaxGetT(){
	$.ajax({
		type:"get",
		url:"json/product_classify.json",
		dataType:"json",
		success:function(data){
			if(data.success == true){
				var sum = data.data[0].children.length;
				console.log(sum);
				
				var DiffNum = sum - loadNumDY;
				//当需要加载的数据量没有达到一次加载的数量（10次），则加载剩下数据的数量
				if(DiffNum < loadNumOne){
					dataInput(data.data[0].children,loadNumDY,DiffNum);
				}else{
					dataInput(data.data[0].children,loadNumDY,loadNumOne);
				}
				
				//点击加载更多
				$(".load_more").click(function(){
					console.log(loadNumDY,sum)
					if(loadNumDY < sum){
						var DiffNum = sum - loadNumDY;
						//当需要加载的数据量没有达到一次加载的数量（10次），则加载剩下数据的数量
						if(DiffNum <= loadNumOne){
							dataInput(data.data[0].children,loadNumDY,DiffNum);
						}else{
							dataInput(data.data[0].children,loadNumDY,loadNumOne);
						}
					}else{
						$(".load_more").text("没有更多产品了");
					}
				});
			}else{
				
			}
		}
	});
}

//懒加载商品详情数据dataN获取到的数据
function dataInput(dataN,loadnum,numOne){
	var liBox = "";//获取到的数据字符串
	for (var i=0;i<numOne;i++) {
		var proUrl = dataN[loadnum].proUrl;//产品跳转链接
		var imgSrc = dataN[loadnum].imgSrc;//图片路径
		var titleT = dataN[loadnum].titleT;//标题
		var priceL = dataN[loadnum].priceL;//销售价
		var price_ori = dataN[loadnum].price_ori;//原价
		var sumNum = dataN[loadnum].sumNum;//总销量
		var evaluateNum = dataN[loadnum].evaluateNum;//评价数
		var contrastUrl = dataN[loadnum].contrastUrl;//对比的跳转链接
		
		liBox = liBox + 
					'<li>\
						<div class="productes-main-one">\
							<div class="productes-main-one-img"><a href="'+ proUrl +'"><img src="'+ imgSrc +'"/></a></div>\
							<div class="product-right">\
								<div class="productes-main-one-describe"><a href="'+ proUrl +'" class="tipsTXT">'+ titleT +'</a></div>\
								<div class="productes-main-one-price">¥<var class="priceL">'+ priceL +'</var><span>原价：¥<var class="price_ori">'+ price_ori +'</var></span></div>\
								<div class="situation">\
									<div class="productes-main-one-sale">总销量：<span class="sumNum">'+ sumNum +'</span></div>\
									<div class="productes-main-one-evaluate">评价：<span class="evaluateNum">'+ evaluateNum +'</span></div>\
								</div>\
								<a href="'+ contrastUrl +'" class="productes-main-one-compare">对比</a>\
							</div>\
						</div>\
					</li>';
					
		loadnum++;
		
	}
//	console.log(liBox);
	$(".data_box").append(liBox);
	loadNumDY = loadnum;
}

//大图自动调整居中
function imgAdapt(obj){
	if(dw >= 640){
		var numL = (1920 - dw) / 2;
		$(obj).css("left",- numL);
	}
}

//移动端的筛选边框处理
function MBscreenBor(){
	var numB = $(".screen_box li").length;
	
	if(numB < 4){
		$(".screen_box li").find(".scr_title").css("border-bottom","1px solid #A2A2A2");
	}else if(numB <= 8){
		$(".screen_box li:gt(3)").find(".scr_title").css("border-bottom","none");
	}else if(numB <= 12){
		$(".screen_box li:gt(7)").find(".scr_title").css("border-bottom","none");
	}else if(numB <= 16){
		$(".screen_box li:gt(11)").find(".scr_title").css("border-bottom","none");
	}else if(numB <= 20){
		$(".screen_box li:gt(15)").find(".scr_title").css("border-bottom","none");
	}
	
	if(numB % 4 == 0){
		$(".screen_box li").css("border-right","none");
	}
}

//文本title提示
function txtTipsT(obj){
	$(obj).each(function(){
		$(this).prop("title",$(this).text());
	});
}

//价格超出则隐藏掉原价
function overHide(obj,objH,baseW){
	$(obj).each(function(){
		var wid = $(this).width();
		if(wid > baseW){
			$(this).parents(".productes-main-one-price").find("span").hide();
		}
	});
}

//当价格和评价数量超出的处理
function overPrice(obj,objP){
	$(obj).each(function(){
		var numC = $(this).text();
		if(numC > 10000){
			var YuS = parseInt(numC / 10000);
			$(this).text(YuS + "万+");
		}
	});
	
	$(objP).each(function(){
		if($(this).text() > 1000){
			$(this).text(999 + "+");
		}
	});
}


//服务分类筛选MB
function screenTMB(){
	$(".scr_title").click(function(){
		$(".scr_title").css("color","#333");
		$(this).css("color","#D21E2F");
		$(".SSBox").hide();
		$(this).parents("li").find(".SSBox").show();
		$("#seMask").show();
		$(".scr_title i").prop("class","selArrowB");
		$(this).find("i").prop("class","selArrowT");
	});
	//选择选项
	$(".SSBox").on("click",">a,>em",function(){
		$(".scr_title").css("color","#333");
		$(this).parents("li").find(".scr_title i").prop("class","selArrowB");
		$(this).parents(".SSBox").find("a,em").removeClass("SeledO");
		$(this).addClass("SeledO");
		$(".SSBox,#seMask").hide();
	});
	
	//点击蒙版关闭筛选
	$("#seMask").click(function(){
		$(".scr_title").css("color","#333");
		$(".scr_title i").prop("class","selArrowB");
		$(".SSBox").hide();
		$(this).css("display","none");
	});
}

//服务分类筛选PC
function screenT(){
	var scrH = $(".scr_select").height() + 10;
	$(".SSBox").each(function(){
		if($(this).height() > scrH){
			$(this).parents(".scr_select").find(".CT_ALL_SP").show();
		}
	});
	//筛选更多和收起
	$(".CT_ALL_SP").click(function(){
		var Octrl = $(this).attr("data-ctrl");
		if(Octrl == "0"){
			$(this).parents(".scr_select").css("height","auto");
			$(this).find("em").text("收起");
			$(this).attr("data-ctrl","1");
			$(this).find("i").css("background-position","-117px 3px");
		}else{
			$(this).parents(".scr_select").css("height",scrH - 10);
			$(this).find("em").text("更多");
			$(this).attr("data-ctrl","0");
			$(this).find("i").css("background-position","0px 2px");
		}
	});
	//筛选条件
	var selNum = 0;
	$(".SSBox").on("click",">a",function(){
		var indexS = $(this).index();
		var SSpar = $(this).parents(".SSBox");
		var thisTxT = $(this).text();//获取选择的文字
		var SSattr = SSpar.hasClass("SS_both");
		SSpar.find("em").css("border-color","transparent");
		SSpar.find("span").css("border-color","transparent").eq($(this).index() - 1).css("border-color","#6B6B6B");
		//判断是否含有SS_both的类，有的话就代表这个类型已经筛选了
		if(SSattr){
			var dataNum = SSpar.prop("class").indexOf("Oseled");
			var num = SSpar.prop("class").substr(dataNum + 6,2);
			$(".SS_seled"+ num +"").html(thisTxT + "<i>×</i>");
		}else{
			var titleW = $(this).parents("li").find(".titleM").text() + "：";
			//动态插入筛选的标签
			$(".search_word var").show();
			$(".search_word").before("<a class='SS_seled SS_seled" + selNum +"'>"+ "<em>"+ titleW +"</em>" + thisTxT +"<i>×</i></a>");
			SSpar.addClass("SS_both");
			SSpar.addClass("Oseled" + selNum);
			selNum++;
			$(this).parents("li").remove();
		}
	});
	//去掉筛选标签
	$(".SS_label").on("click",">span",function(){
		$(this).remove();
		
		//移除class标签，表示没有筛选
		var laNum = $(this).prop("class").indexOf("SS_seled");
		var num = $(this).prop("class").substr(laNum + 8,2);
		
		$(".Oseled" + num).find("span").css("border-color","transparent");
		$(".Oseled" + num).find("em").css("border-color","#6B6B6B");
		$(".Oseled" + num).removeClass("SS_both");
		$(".Oseled" + num).removeClass("Oseled" + num);
	});
	//当点击全部的时候
	$(".SSBox em").click(function(){
		var dataNum1 = $(this).parents(".SSBox").prop("class").indexOf("Oseled");
		var num1 = $(this).parents(".SSBox").prop("class").substr(dataNum1 + 6,2);
		$(this).parents(".SSBox").find("span").css("border-color","transparent");
		$(this).css("border-color","#6B6B6B");
		$(".SS_seled"+ num1).remove();
		$(".Oseled" + num1).removeClass("SS_both");
		$(".Oseled" + num1).removeClass("Oseled" + num1);
	});
}

//0306END



