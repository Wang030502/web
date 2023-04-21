window.onload = function() {
	var arr = document.getElementsByClassName("Slide");
	for (var i = 0; i < arr.length; i++) {
		 arr[i].style.left = (i * 1200-1050) + "px";//800
	}
}


// 下拉菜单隐藏效果
var main = document.getElementsByClassName("main")[0];
var lis = main.children;
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseenter = function() {
		this.children[0].style.display = "block";
	}
	lis[i].onmouseleave = function() {
		this.children[0].style.display = "none";
	}
}

//点击跳转页面
function turntopage(pageHref) {
	var Href = "../ChildrenPage/" + pageHref; //ie不支持特殊字符链接
	// self.location=Href;
	window.open(Href);
}

//轮播图
var lept=1050;//初始图片左偏移距离
function LeftMove() {
	var arr = document.getElementsByClassName("Slide"); //获取多个子div
	for (var i = 0; i < arr.length; i++) {
		var left = parseFloat(arr[i].style.left);
		left -= 3; // 每次移动2像素
		var width = 1200; //图片的宽度
		if (left <= -width-lept) {
			left = (arr.length - 1) * width-lept; //当图片完全走出显示框，拼接到末尾
			clearInterval(moveId);
		}
		arr[i].style.left = left + "px";
	}
}


//每0.001秒执行一次
function divInterval() {
	moveId = setInterval(LeftMove, 1); //设置一个1毫秒定时器,设置轮播速度
}

timeId = setInterval(divInterval, 5000); //设置一个1秒的定时器。

function stop() {
	clearInterval(timeId);
}

function start() {
	clearInterval(timeId);
	timeId = setInterval(divInterval, 5000); //设置一个5秒的定时器。
}

//页面失去焦点停止
onblur = function() {
	stop();
}
//页面获取焦点时开始
onfocus = function() {
	start();
}

function LastMove() {
	// RightMove();
	// start();
}

//改变图片左边距，每次变化-800像素
function RightMove() {
	// var arr = document.getElementsByClassName("Slide"); //获取多个子div
	// for (var i = 0; i < arr.length; i++) {
	// 	var left = parseFloat(arr[i].style.left);
	// 	left += 800;
	// 	var width = 800; //图片的宽度
	// 	if (left >= ((arr.length) * width)) {
	// 		left %= width; //当图片完全走出显示框，拼接到末尾
	// 		clearInterval(moveId);
	// 	}
	// 	arr[i].style.left = left + "px";
	// }

}


function NextMove() {
	// clearInterval(timeId);
	// LeftMove();
	// start();
}




