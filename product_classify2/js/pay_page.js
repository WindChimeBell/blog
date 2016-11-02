/**支付方式**/
$(".paypage-way-chose").mousedown(function(){
	$(".paypage-way-chose-dot").css("background-color","#B0AFAF");
	$(".paypage-way-next").css("background-color","#D7000F");//设置下一步按钮的背景颜色
	$(this).children().first().children().css("background-color","#D7000F");//改变点的样式
	/*获取id改变下一步的地址*/
	$id=$(this).attr("id");
	if($id=="alipay"){
		$(".paypage-way-next a").attr("href","alipay.html");
	}
	if($id=="wechat"){
		$(".paypage-way-next a").attr("href","wechat.html");
	}
	/*去掉网银支付的下一步功能和样式*/
	$(".paypage-E-bank-next").css("background-color","#D2D2D2");
	$(".paypage-E-bank-next a").attr("href","javascript:void(0);");
});
/**网银支付**/
$(".paypage-E-bank-chose").mousedown(function(){
	$(".paypage-way-chose-dot").css("background-color","#B0AFAF");
	$(".paypage-E-bank-next").css("background-color","#D7000F");//设置下一步按钮的背景颜色
	$(this).children().first().children().css("background-color","#D7000F");//改变点的样式
	/*获取id改变下一步的地址*/
	$id=$(this).attr("id");
	if($id=="ICBC"){
		$(".paypage-E-bank-next a").attr("href","ICBC.html");
	}
	if($id=="BCC"){
		$(".paypage-E-bank-next a").attr("href","BCC.html");
	}
	/*去掉支付方式的下一步功能和样式*/
	$(".paypage-way-next").css("background-color","#D2D2D2");
	$(".paypage-way-next a").attr("href","javascript:void(0);");
});