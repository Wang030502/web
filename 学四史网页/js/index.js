//校庆倒计时
var timer = null;


window.onload = function(){

	// 升旗模块
//	document.getElementsById("QiZhi").style.marginTop ="400px"; 
	var arr=document.getElementById("QiZhi");
	arr.style.marginTop="400px"


	//开启定时器
	timer = setInterval(show, 100);
	
	//回调函数
	function show() {
		var d1 = (new Date()); //获取到当前的时间
		var d1Ms = d1.getTime();
		var d2 = new Date("2023/10/16 00:00:00");			//ie时间格式
		var d2Ms = d2.getTime();
		var differMs = d2Ms - d1Ms; //相差的毫秒数
		var date = parseInt(differMs / (3600 * 24 * 1000)); //天
		var hours = parseInt((differMs % (3600 * 24 * 1000)) / (3600 * 1000)); //1小时=3600s
		var minutes = parseInt((differMs % (3600 * 1000)) / (60 * 1000)); //分钟
		var seconds = parseInt((differMs % (60 * 1000)) / 1000); //秒
		var ms = differMs % 1000; //毫秒
		//当前分秒为个位数字时，对其进行的处理
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		document.getElementById("spanTimeDay").innerHTML = date;
		document.getElementById("spanTimeHours").innerHTML = hours;
		document.getElementById("spanTimeMin").innerHTML = minutes;
		document.getElementById("spanTimeSec").innerHTML = seconds;
		// document.getElementById("spanTime").innerHTML = date + "天" + hours + "时" + minutes + "分" + seconds + "秒" + ms;
	}
}

//点击跳转页面
function turntopage(pageHref) {
	var Href = "../学四史网页/ChildrenPage/" + pageHref;//ie不支持特殊字符链接
	// self.location=Href;
	window.open(Href);
}

// 升旗模块
function ShenQiMove() {
	var arr=document.getElementById("QiZhi");
	var top = parseFloat(arr.style.marginTop);
	top-=2;//每次上升2像素
	if(top<=38)
	{
		clearInterval(moveId);
		top = 38;
	}
	arr.style.marginTop = top + "px";
}

// 每0.001秒执行一次
function divInterval() {
	moveId = setInterval(ShenQiMove, 25); //设置一个1毫秒定时器,设置轮播速度
}

function startShenQiMove() {
	// clearInterval(moveId);
	divInterval(); //设置一个5秒的定时器。
}

