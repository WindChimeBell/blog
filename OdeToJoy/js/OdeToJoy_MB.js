var dw = $(window).width() || $("body").width();//屏幕宽度
var cH = $(window).height();//屏幕高度
var zoomo = $(window).width() / 640;
var rocketCtrl = true;

//页面结构加载完成触发
$(function(){
	dw = $(window).width() || $("body").width();
	
	/*五个环节动画*/
	intevalAni(".part1","tada","3000");
	intevalAni(".part2","bounce","3000");
	intevalAni(".part3","tada","3000");
	intevalAni(".part4","bounce","3000");
	intevalAni(".part5","flash","3000");
	
	/*产品优惠动画*/
	intevalAni(".favorable1_ani","bounce","3000");
	intevalAni(".favorable2_ani","bounce","3000");
	intevalAni(".favorable3_ani","bounce","3000");
	
	intevalAni(".photo_ani","flash","3000");//照相机动画
	intevalAni(".photoFrame_ani","tada","3000");//相框动画
});

$(window).scroll(function() {
	var sT = $(window).scrollTop() * zoomo;
	/*图片懒加载*/
    $('img[isLoaded != 1]').each(function() {
        var oT = $(this).offset().top * zoomo;
        if (sT + cH >= oT) {
            var s = $(this).attr('data-src');
            $(this).attr('src', s);
            $(this).attr('isLoaded', 1);
            $(this).parents("span").show();
        }
    });
    
    /*动态加载动画*/
    $("#OdeToJoy_box span").each(function(){
    	var aniT = $(this).offset().top * zoomo;
    	if (sT + cH >= aniT) {
    		$(this).attr('isanied', 1);
    		$(this).addClass("animated");
    	}else{
    		$(this).removeClass("animated");
    	}
    	if(aniT < sT){
    		$(this).removeClass("animated");
    	}
    });
    
    /*火箭上升动画*/
   	var rocketT = $(".rocket_ani").offset().top * zoomo;
   	if(sT + cH >= rocketT && rocketCtrl){
   		rocketCtrl = false;
   		oneAni(".rocket_ani","bounceOutUp");
   	}else{
   		$(".rocket_ani").removeClass("animated");
   	}
   	
});

//手指水纹动画
function handWater(){
	
}



/*只执行一次的动画*/
function oneAni(obj,ani){
	$(obj).addClass(ani);
    setTimeout(function(){
        $(obj).removeClass(ani);
    }, 2000);
}

/*每间隔多少秒执行动画*/
function intevalAni(obj,ani,timeInt){
	var timer0 = setInterval(function(){
		$(obj).addClass(ani);
	    setTimeout(function(){
	        $(obj).removeClass(ani);
	    }, 1000);
	},timeInt);
}
