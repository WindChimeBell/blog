var dw = $(window).width() || $("body").width();//屏幕宽度

//页面结构加载完成触发
$(function(){
	dw = $(window).width() || $("body").width();
	
	if(dw <= 640){
		breviaryT();
	}
});

//分类收起展开
function breviaryT(){
	$(".sebox2").each(function(){
		var num = $(this).find("li").length;
		
		if(num > 8){
			//如果超过8个，贼在第七个后面添加箭头的元素，然后将后面隐藏
			$(this).find("li:eq(6)").addClass("guide");
			$(this).find("li:eq(6)").after('<li class="unfold"><a href="javascript:void(0);"><img src="img/classifyImg/ClassBot.png\"/></a></li>');
			$(this).find("li:gt(7)").hide();
			
			$(".unfold").click(function(){
				$(this).parents("ul").find("li:gt(7)").show();
				$(this).remove();
			});
		}
	});
}
