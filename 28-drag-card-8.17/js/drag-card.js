window.onload = function(){
	var box = document.getElementById("drag_card");
	var card = document.getElementById("card");
	var endX = 0;
	var endY = 0;
	var mouseX = 0;
	var mouseY = 0;
	
	//卡片点击
	card.onmousedown = function(){
		card.style.cursor = "url(img/hearthstone-grab.png),auto";
		var event = event || window.event;
		var tmpX = event.clientX - card.offsetLeft - box.clientLeft;
		var tmpY = event.clientY - card.offsetTop - box.clientTop;
		card.style.width = "180px";
		
		event.preventDefault && event.preventDefault();
		//卡片拖拽
		document.onmousemove = function(){
			var event = event || window.event;
			
			//X方向判断card向左还是向右移动
			if(endX < event.clientX - tmpX - box.clientLeft){
				card.style.transform = "rotateY(40deg)";
			}else{
				card.style.transform = "rotateY(-40deg)";
			}
			
			endX = event.clientX - tmpX - box.clientLeft;
			endY = event.clientY - tmpY - box.clientTop;
			mouseX = box.clientWidth - card.offsetWidth;
			mouseY = box.clientHeight - card.offsetHeight;
			
			//检测碰壁
			if(endX >= mouseX){
				endX = mouseX;
			}
			if(endX <= 0){
				endX = 0;
			}
			if(endY >= mouseY){
				endY = mouseY;
			}
			if(endY <= 0){
				endY = 0;
			}
			
			card.style.left = endX + "px";
			card.style.top = endY + "px";
		}
	}
	//当鼠标松开取消move事件
	document.onmouseup = function(){
		card.style.width = "150px";
		card.style.transform = "rotateY(0deg) rotateX(0deg)";
		card.style.cursor = "url(img/hearthstone-cursor.png),auto";
		document.onmousemove = null;
	}
}