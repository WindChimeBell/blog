$(function(){
	QRcode(".immediately_join1",".QRcode1");
	QRcode(".immediately_join2",".QRcode2");
	intevalAni(".camera","flash","2000");//相机
	intevalAni(".serial1","tada","2000");
	intevalAni(".serial2","wobble","3000");
	intevalAni(".serial3","tada","3000");
	intevalAni(".serial4","bounce","3000");
	intevalAni(".serial5","flash","3000");//以上1-5送
	intevalAni(".buy1","bounce","3000");
	intevalAni(".buy2","bounce","3000");
	intevalAni(".buy3","bounce","3000");
	intevalAni(".Photo-frame","tada","3000");//相框
});


/*二维码弹出效果*/
function QRcode(clas,block) {
	$(clas).hover(function(){
		$(block).stop().show(300);
	},function(){
		$(block).stop().hide(300);
	})
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

$(window).scroll(function() {
    $('div[isLoaded != 1]').each(function() {
        var oT = $(this).offset().top;
        var sT = $(window).scrollTop();
        var cH = $(window).height();
        if (sT + cH >= oT) {
            var s = $(this).find('img').attr('Imgsrc');
            $(this).find('img').attr('src', s);
            $(this).attr('isLoaded', 1).addClass("animated");
            if($(this).hasClass("rocket2")){
            	$(this).css("animation","rocket2 1.5s linear 0s infinite")
            }
        }
    })
})