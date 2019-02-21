var loaded;
if(navigator.userAgent.match("Android")&&!loaded){
loaded=true;
var meta=document.createElement("meta");
meta.name="viewport";
meta.content="width=720,inital-scale=1.0,user-scalable=no;";
document.head.appendChild(meta);
var newCss;
if(document.title.match("登录")){
//Login Section Start
document.querySelectorAll('.input_li')[2].innerHTML+="<label style='margin-left: 30vw;'><input type='checkbox' class='autoLogin'>记住密码</label>";
function load(){
	if(localStorage.userName){
		document.querySelector('#userAccount').value=localStorage.userName;
	}
	if(localStorage.userPassword&&localStorage.userPassword!="undefined"){
		document.querySelector('.autoLogin').checked=true;
		document.querySelector('#userPassword').value=localStorage.userPassword;
	}
}
load();
document.querySelector('#userAccount').addEventListener("change",function(){
	localStorage.userName=this.value;
});
document.querySelector('.login_btn').addEventListener("click",function(){
	if(document.querySelector('.autoLogin').checked){localStorage.userPassword=document.querySelector('#userPassword').value;}else{localStorage.userPassword=undefined}
});
newCss=".box_right{margin:0 auto;margin-top:5vh;}.box_left{float:none;}";
//Login Section End
}else{
//Main Section Start
var btn1=document.createElement('div'),btn2=document.createElement('div');
btn1.id="btn1";btn2.id="btn2";
btn1.innerHTML="<div id='btn1_1'></div><div id='btn1_2'></div><div id='btn1_3'></div>";
btn2.innerHTML="<img id='btn2_img' src='https://img.icons8.com/ios-glyphs/90/ffffff/plus-math.png'>";
document.querySelector('#mainNorthPanle').innerHTML+="<img src='/jsxsd/css/images/head_bg.jpg' style='height: 10vw;margin-left: 10vw;'>";
document.querySelector('#mainNorthPanle').appendChild(document.querySelector('.pull-right'));
document.querySelector('#mainNorthPanle').appendChild(btn1);
document.body.appendChild(btn2);
document.querySelector("#onesidebar").onmouseout=function (){setTimeout(function() {document.querySelector("#onesidebar").style.marginLeft="0";}, 10);}
var menuSwitch=false;
btn1.addEventListener("click",function (){
	if(menuSwitch){
		$("#onesidebar").css("left","-45vw");
		$("#btn1_1").css({"top":"1.75vw","transform":"rotate(0deg)"});
		$("#btn1_2").css("transform","rotate(0deg)");
		$("#btn1_3").css({"top":"7.25vw","transform":"rotate(0deg)"});
	}else{
		$("#onesidebar").css("left","0");
		$("#btn1_1").css({"top":"4.5vw","transform":"rotate(135deg)"});
		$("#btn1_2").css("transform","rotate(45deg)");
		$("#btn1_3").css({"top":"4.5vw","transform":"rotate(135deg)"});
	}menuSwitch=!menuSwitch;
});
var plusSwitch=false;
btn2.addEventListener("click",function (){
	if(plusSwitch){
		$("#btn2_img").css("transform","rotate(0deg)");
		$(".main-sidebar").css("left","-25vw");
		for(var i=1;i<$("iframe").length;i++){
			console.log(i);
		document.querySelectorAll("iframe")[i].style.width="100vw";
		document.querySelectorAll("iframe")[i].style.left="0vw";}
	}else{
		$("#btn2_img").css("transform","rotate(135deg)");
		$(".main-sidebar").css("left","0");
		for(var i=1;i<$("iframe").length;i++){
			console.log(i);
		document.querySelectorAll("iframe")[i].style.width="75vw";
		document.querySelectorAll("iframe")[i].style.left="25vw";}
	}plusSwitch=!plusSwitch;
});
newCss="body{width:100vw;overflow:hidden}.leftsidebar{left:-100vw}#mainNorthPanle{overflow:hidden;position:relative;z-index:99999;height:10vw !important;background:#36B9FD;box-shadow:0 3px 15px rgba(0,0,0,0.5)}#onesidebar{top:10vw;left:-45vw;transition:left .3s;width:40vw;height:calc(96vh - 10vw);background:#fff;box-shadow:2px 0 10px rgba(0,0,0,0.5);}#btn1{width:10vw;height:10vw}#btn2{background:#2196f3;width:10vw;height:10vw;position:fixed;border-radius:10vw;z-index:99999;box-shadow:2px 2px 15px rgba(0,0,0,0.5);right:5vw;bottom:10vh}#btn1_1,#btn1_2,#btn1_3{background:#fff;width:8vw;height:1.25vw;border-radius:1vw;position:absolute;left:1vw;top:1.75vw;transition:top .15s,transform .2s}#btn1_2{top:4.5vw}#btn1_3{top:7.25vw}#btn2_img{width:70%;margin:15%;transition:transform .3s}.main-sidebar{width:25vw;height:calc(80vh - 10vw);top:10vw;position:fixed;left:-25vw;transition:left .3s,width .3s}.tabs-close{background:url('https://img.icons8.com/ios-glyphs/90/000000/multiply.png') no-repeat center center / 100% 100% !important;width:2vh !important;height:2vh !important;margin:1vh;margin-right:.5vh;top:0 !important;right:0 !important;opacity:1 !important;margin-top:1vh !important}#Frame0{width:100vw!important;left:0!important}iframe{width:100vw;left:0;transition:left .3s,width .3s}.tabs-title{line-height:4vh;font-size:2vh}.tabs{height:4vh!important}.tabs-inner{height:4vh!important;padding-left:2vw;padding-right:5vw}.maintext{color:#333 !important;font-size:3vh}#mainTagPanle{position:fixed;bottom:0;margin-left:0!important;width:100vw;height:4vh!important}.first-menu>li{color:#333;font-size:3vh;margin-top:1vh;padding:1vh}header,.cd-morph-dropdown{display:none;}.pull-right{text-align:center;position:fixed;top:-32vw;right:-16vw;font-size:4vw;line-height:6vw;background:#f44336;color:#fff;padding:4vw;border-bottom-left-radius:3vw;box-shadow: -2px -2px 10px rgba(0,0,0,0.5);transition: right .3s;}.tabs li a.tabs-inner{margin-right: 3vh !important}.tabs-wrap{overflow: auto}";
//Main Section End
}
var newStyle=document.createElement("style");
newStyle.innerHTML=newCss;
document.body.appendChild(newStyle);
}
