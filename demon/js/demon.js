//全屏适应剪切右边
var body = document.getElementsByTagName("body")[0];
var bodyw = document.getElementsByTagName("body")[0].clientWidth;
var dw = document.documentElement.clientWidth;
var j = 0;

window.onload = function() {
	if(dw <= 1920) {
		body.style.width = dw + "px";
	} else {
		body.style.width = 1920 + "px";
	}
	if(dw <= 1024) {
		body.style.width = 1024 + "px";
	}
	allmove(); //总移动函数
	txtmove(); //txt移动函数
}
//获取切换按钮，内容
var tab_btn = document.getElementById("left_tab").getElementsByTagName("span");
var page = document.getElementById("content").children;
//获取选中按钮，内容
var tab_sel = document.getElementsByClassName("tab_sel");
var cot_sel = document.getElementsByClassName("cot_sel");
var timer = null;
for(var i = 0; i < tab_btn.length; i++) {
	tab_btn[i].index = i;
	//存储当前下标
	tab_btn[i].onclick = function() {
		clearInterval(timer);
		clearClassName();
		allmove(); //总移动函数
		page[this.index].className = "cot_sel";
		this.className = "tab_sel";
	}
}

//清理页面类名
function clearClassName() {
	for(var i = 0; i < page.length; i++) {
		page[i].className = "cot_not";
		tab_btn[i].className = "tab_not";
	}
}
//page移动函数
function pagemove() {
	j = tab_sel[0].innerText;
	clearClassName();
	j++;
	if(j > 4) {
		j = 0;
	}
	page[j].className = "cot_sel";
	tab_btn[j].className = "tab_sel";
}
//总移动函数
function allmove() {
	timer = setInterval(pagemove, 5000);
}

//ctrl控制按钮切换
var ctrl_left = document.getElementById("ctrl_left");
var ctrl_right = document.getElementById("ctrl_right");
//上一页
//var j = tab_sel[0].innerText;
ctrl_left.onclick = function() {
		j--;
		if(j < 0) {
			j = 4;
		}
		clearInterval(timer);
		allmove();
		clearClassName();
		page[j].className = "cot_sel";
		tab_btn[j].className = "tab_sel";
	}
	//下一页
ctrl_right.onclick = function() {
	j++;
	if(j > 4) {
		j = 0;
	}
	clearInterval(timer);
	allmove();
	clearClassName();
	page[j].className = "cot_sel";
	tab_btn[j].className = "tab_sel";
}

//news新闻
var news = document.getElementById("news");
var news_block = document.getElementById("news_block");
var news_bar = document.getElementById("news_bar");
//新闻版移动
news.onmouseenter = function() {
	clearTimeout(timer_news);
	news_block.style.display = "flex";
	news_block.style.top = 218 + "px";
	news.style.right = 0;
	var timer_news = setTimeout(function() {
		news_block.style.top = 0;
	}, 300);
	news_bar.style.backgroundImage = "url(img/news_shrink.png)"
}

news.onmouseleave = function() {
	news_block.style.display = "none";
	news.style.right = -235 + "px";
	news_bar.style.backgroundImage = "url(img/news_open.png)"
}

//media官媒
var media = document.getElementById("media");
var media_yixin = document.getElementById("media_yixin");
var media_code = document.getElementById("media_code");
var media_div = document.getElementById("media").getElementsByTagName("div")[0];

media.onmouseover = function() {
	media_div.style.backgroundImage = "url(img/media_shrink.png)";
}

media.onmouseout = function() {
	media_div.style.backgroundImage = "url(img/media_open.png)";
}

media_yixin.onmouseover = function() {
	media_code.style.display = "block";
}

media_yixin.onmouseout = function() {
	media_code.style.display = "none";
}

//弹窗cpm
var cpm_bg = document.getElementById("cpm_bg");
var play_btn = document.getElementsByClassName("play"); //获取按钮
//play和subscribe位置暂停定时器
var subscribe = document.getElementsByName("subscribe");
for(var i = 0; i < play_btn.length; i++) {
	//鼠标进入
	subscribe[i].onmouseenter = function() {
		clearInterval(timer);
	}
	play_btn[i].onmouseenter = function() {
		clearInterval(timer);
	}
	//鼠标离开
	subscribe[i].onmouseleave = function() {
		allmove();
	}
	play_btn[i].onmouseleave = function() {
		allmove();
	}
	//play按钮点击事件
	play_btn[i].onclick = function() {
//		clearInterval(timer);
		cpm_bg.style.display = "block";
		cpm_bg.style.display = "flex";
		cpm_bg.style.opacity = "1";
	}
}

//关闭弹窗close cpm
var close = document.getElementById("close");

close.onclick = function() {
//	allmove();
	cpm_bg.style.display = "none";
	cpm_bg.style.opacity = "0";
}

//文本切换
var last = document.getElementsByClassName("last");
var next = document.getElementsByClassName("next");
//文本获取
var p1_p1 = document.getElementById("p1_p1");
var p1_p2 = document.getElementById("p1_p2");
var p3_p1 = document.getElementById("p3_p1");
var p3_p2 = document.getElementById("p3_p2");
//第1页文本
for(var i = 0; i < last.length; i++) {
	last[i].onclick = function() {
		clearInterval(timer_txt);
		txtmove();
		clearInterval(timer);
		allmove();
		//第1页txt
		if(p1_p1.innerHTML == "多元攻防体系") {
			p1_p1.innerHTML = "强敌怪诞入侵";
			p1_p2.innerHTML = "炫萌恶魔，诡秘招式，海陆空三重势力席卷";
		} else {
			p1_p1.innerHTML = "多元攻防体系";
			p1_p2.innerHTML = "极致关卡设计，爆刷模式开启";
		}
		//第3页txt
		if(p3_p1.innerHTML == "排兵布阵") {
			p3_p1.innerHTML = "全屏大招";
			p3_p2.innerHTML = "指尖呼风唤雨";
		} else {
			p3_p1.innerHTML = "排兵布阵";
			p3_p2.innerHTML = "酷爽打击乐趣";
		}
	}

	next[i].onclick = function() {
		clearInterval(timer_txt);
		txtmove();
		clearInterval(timer);
		allmove();
		//第1页txt
		if(p1_p1.innerHTML == "多元攻防体系") {
			p1_p1.innerHTML = "强敌怪诞入侵";
			p1_p2.innerHTML = "炫萌恶魔，诡秘招式，海陆空三重势力席卷";
		} else {
			p1_p1.innerHTML = "多元攻防体系";
			p1_p2.innerHTML = "极致关卡设计，爆刷模式开启";
		}
		//第3页txt
		if(p3_p1.innerHTML == "排兵布阵") {
			p3_p1.innerHTML = "全屏大招";
			p3_p2.innerHTML = "指尖呼风唤雨";
		} else {
			p3_p1.innerHTML = "排兵布阵";
			p3_p2.innerHTML = "酷爽打击乐趣";
		}
	}
}

//文本定时器
var timer_txt = null;

function txtmove() {
	timer_txt = setInterval(function() {

		if(p1_p1.innerHTML == "多元攻防体系") {
			p1_p1.innerHTML = "强敌怪诞入侵";
			p1_p2.innerHTML = "炫萌恶魔，诡秘招式，海陆空三重势力席卷";
		} else {
			p1_p1.innerHTML = "多元攻防体系";
			p1_p2.innerHTML = "极致关卡设计，爆刷模式开启";
		}

		if(p3_p1.innerHTML == "排兵布阵") {
			p3_p1.innerHTML = "全屏大招";
			p3_p2.innerHTML = "指尖呼风唤雨";
		} else {
			p3_p1.innerHTML = "排兵布阵";
			p3_p2.innerHTML = "酷爽打击乐趣";
		}
	}, 3000)
}

//技能鼠标悬浮暂停定时器
var skills = document.getElementById("skills").children;
for (var i = 1;i<4;i++) {
	skills[i].onmouseover = function(){
		clearInterval(timer);
	}
	skills[i].onmouseout = function(){
		allmove();
	}
}