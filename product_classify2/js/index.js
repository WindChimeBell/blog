/*广告的翻页栏js开始*/
/*初始默认值*/
$(".background-skip-dot:first").css("background-color","white");
/*点击开始*/
$(".background-skip-dot").mousedown(function(){
	$(".background-skip-dot").css("background-color","#CDCDCD");
	$(this).css("background-color","white");
});

/*广告的翻页栏js结束*/


/*免费预约框地址开始*/
function changeProvince() {
	/*
				 *作者：928787753@qq.com
        	            时间：2016-10-07
        	            描述：戴红旭
				 * */
	var province = new Array();
	province[0] = ['广州', '佛山', '东莞', '汕头', '清远', '中山'];
	province[1] = ['长沙', '衡阳', '益阳', '常德', '永州', '株洲', '怀化', '张家界'];
	province[2] = ['武汉', '荆州', '咸宁', '宜昌', '黄冈', '孝感'];
	province[3] = ['桂林', '南宁', '玉林', '百色', '来宾', '柳州'];
	province[4] = ['南昌', '景德镇', '宜春', '吉安', '赣州', '上饶'];
	province[5] = ['济南', '德州', '淄博', '潍坊', '烟台', '菏泽'];
	province[6] = ['石家庄', '张家口', '邯郸', '廊坊', '承德', '保定'];
	province[7] = ['普陀区', '徐汇区', '闵行区', '普陀区', '奉贤区', '松江区'];
	province[8] = ['合肥', '六安', '蚌埠', '安庆', '马鞍山', '芜湖'];
	province[9] = ['昆明', '玉溪', '大理', '丽江', '普洱', '曲靖'];
	var provinceIndex = document.myform.province.selectedIndex - 1;
	var newOption;
	document.myform.city.options.length = 0;
	for(var i = 0; i < province[provinceIndex].length; i++) {
		newOption = new Option(province[provinceIndex][i], province[provinceIndex][i]);
		document.myform.city.options.add(newOption);
	}
	document.myform.city.selectedIndex = 0;
}
/*免费预约框地址结束*/

/*免费预约浮动框滚动效果开始*/
var b = true;
var marginTop = 0;
var isscroll = false;
setInterval(function() {
	if(isscroll) return; //判断运行和停止
	$(".navi-book-success-details li:first").animate({
		marginTop: marginTop--
	}, 0, function() {
		var $f = $(this);
		if(!$f.is(":animated")) { //判断是否有一个动画节点
			if(marginTop < 0 && b) { //开始移动时，并且b为true时执行
				$li = $f.clone(); //克隆一个节点
				$li.css("margin-top", "0px"); //重新设置样式
				$li.appendTo($(".navi-book-success-details ul")); //把新克隆的节点复制到后面去
				b = false; //b为false
			}
		}
		if((-marginTop) >= $f.height()) {
			$(".navi-book-success-details li:first").remove(); //移出去后删除
			b = true; //b为true
			marginTop = 0; //重新设置margTop为0；
		}
	});
}, 100);

$(".navi-book-success-details").mouseover(function() { //li鼠标移入，停止移动
	isscroll = true;
});
$(".navi-book-success-details").mouseout(function() {
	isscroll = false;
});
/*免费预约浮动框滚动效果结束*/

//widow变化事件,当window变化时改变目标大小
window.onresize = function() {
	//table根据widow的变化而变化,设屏幕固定最大宽度1423
	$(".main-floor-f-1f-tb2").each(function() {
		//图片长宽,因为CSS定死了长宽，所以每次取到的值都是相同
		var imgw = $(this).attr("width");
		var imgh = $(this).attr("height");
		//屏幕调整后宽度
		var nowWidth = $(window).width();
		//调整长宽，
		$(this).width(imgw * (nowWidth / 1423));
		$(this).height(imgh * (nowWidth / 1423));
	});
	
	/*大理石的图片，如果小于屏幕尺寸，大小跟着改变*/
	$(".main-dls-img-0 img").each(function() {
		//图片长宽
		var imgw = $("this").attr("width");
		var imgh = $("this").attr("height");
		//屏幕宽度
		var maxWidth = $(window).width();
		//如何图片宽度大于屏幕宽度，调整图片长宽
		if(imgw > maxWidth) {
			$(this).width(maxWidth);
			$(this).height((imgw / maxWidth) * imgh);
		}
	});
	/*当浏览器尺寸小于800PX时，大理石层隐藏*/
	if(($(window).width())<800){
		$(".main-dls").hide();
		$(".main-hotsell").hide();
	}
	/*当浏览器尺寸大于800PX时，大理石层显示*/
	if(($(window).width())>800){
		$(".main-dls").show();
		$(".main-hotsell").show();
	}
	
	
}

	/*页面第一次加载时调整table的尺寸*/
	//table根据widow的变化而变化,设屏幕固定最大宽度1423
	$(".main-floor-f-1f-tb2").each(function() {
		//图片长宽,因为CSS定死了长宽，所以每次取到的值都是相同
		var imgw = $(this).attr("width");
		var imgh = $(this).attr("height");
		//屏幕调整后宽度
		var nowWidth = $(window).width();
		//调整长宽，
		$(this).width(imgw * (nowWidth / 1423));
		$(this).height(imgh * (nowWidth / 1423));
	});
	
	/*当浏览器尺寸小于800PX时，大理石层隐藏*/
	if(($(window).width())<800){
		$(".main-dls").css("display","none");
		$(".main-hotsell").css("display","none");
	}
	/*加载结束*/