$('#login-button').click(function (event) {
	// 获取用户名和密码输入框的值
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;

	// 验证用户名和密码
    if(userName=="姚汐芸" &&  pwd=="1228"){ 
		event.preventDefault();										// 阻止表单默认提交行为
		$('form').fadeOut(500);										// 淡出表单，持续时间为500毫秒
		$('.wrapper').addClass('form-success');						// 给.wrapper添加类名form-success
		// requestFullScreen();										// 请求全屏显示
		setTimeout(function(){location.href="/happy_birthday/html/index1.html";},1500);	// 延迟1.5秒后跳转到  /happy_birthday/html/index1.html   ../html/index1.html
	}
	else{
		alert("密码是你的生日哦!（密码为4位数）");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
 // 判断各种浏览器，找到正确的方法
 //alert(element.webkitRequestFullScreen);
 var requestMethod = element.requestFullScreen || //W3C
 element.webkitRequestFullScreen || //Chrome等
 element.mozRequestFullScreen || //FireFox
 element.msRequestFullScreen; //IE11
 if (requestMethod) {
  requestMethod.call(element);
 }
 else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript !== null) {
   wscript.SendKeys("{F11}");
  }
 }
}
function changeFrameHeight(){
    var ifm= document.getElementById("iframepage"); 
    ifm.height=document.documentElement.clientHeight;

}

window.onresize=function(){  
     changeFrameHeight();  

} 