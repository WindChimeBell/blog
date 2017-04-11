var dw = $(window).width() || $("body").width();
$(window).on("load",function(){
	
	bespeak();
	
});

function bespeak(){
	$(".sure-btn").click(function(){
		$(".free-one").hide();
		$(".free-two").show();
		$(".MB_title").text('免费预约成功')
	})
	
}
