/*https://mhpic5.szsjcd.cn/mh160tuku/x/%E4%BB%99%E9%80%86_12991/%E7%AC%AC139%E8%AF%9D%E7%BD%97%E6%9C%88%EF%BC%881%EF%BC%89_269350/0002.jpg@!webp*/
patt2=new RegExp("https://m.laimanhua.com/kanmanhua/[0-9]*/[0-9]*.html");
if(location.href.match(patt2))��
function $($_$,$__$){
	if($__$){
		return document.querySelectorAll($_$)[$__$];
	}else if(document.querySelectorAll($_$).length===1||$__$==0){
		return document.querySelector($_$);
	}else{
		return document.querySelectorAll($_$);
	}
}
Object.prototype.on=function ($_$,$__$){
	if(this  instanceof NodeList){
		[].forEach.call(this, function ($$_$){$$_$.addEventListener($_$,$__$,false);});
	}else{
		this.addEventListener($_$,$__$);
	}
}
/*�������*/
var adBlock=setInterval(function (){
	var kids=document.body.children;
	for(var i=0;i<kids.length;i++)
		if(parseInt(window.getComputedStyle(kids[i]).zIndex)>10000 && !kids[i].className.match("skip")){
			document.body.removeChild(kids[i]);
			window.clearInterval(adBlock);
		}
},4000);

/*�������*/
var _style=document.createElement("style");
_style.innerHTML="#_body{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;z-index:2147483584}#_header{position:absolute;top:0;left:0;height:8vh;width:100vw;background:#2196f3;box-shadow:0 2px 15px rgba(0,0,0,1);text-align:center}#_home,#_close,#_menuBtn{height:5vh;width:5vh;padding:1.5vh}#_home{float:left}#_close{float:right}#_comic{position:absolute;bottom:0;left:0;height:92vh;width:100vw;background:#fff;overflow:auto}._pages{width:94vw;margin:3vw;box-shadow:2px 2px 10px rgba(0,0,0,0.5)}#_menu{position:fixed;left:0;top:-10vh;width:100vw;height:10vh;background:#607d8b;color:#fff;font-size:2vh;transition:top .3s}._link{color:#fff}#_btn{width:10vh;height:10vh;position:fixed;top:50vh;right:5vw;z-index:2147483584}#_btn img{width:50%;height:50%;padding:15%;margin:10%;background:#2196f3;border-radius:50%;transform:rotate(45deg);box-shadow:2px 0 15px rgba(0,0,0,0.5)}";
document.head.appendChild(_style);
var btn=document.createElement("div");
btn.id="_btn";
btn.className="skip";
btn.innerHTML="<a href=\"javascript:createUI()\"><img src=\"https://img.icons8.com/ios-glyphs/90/ffffff/multiply.png\"></a>";
document.body.appendChild(btn);
$("#viewport").content+=",user-scalable=no";

/*UI����*/
function createUI(){
	var $body=document.createElement("div");
	$body.id="_body";
	$body.className="skip";
	$body.innerHTML="<div id=\"_body\"><div id=\"_comic\"></div><div id=\"_header\"><a href=\"/\"><img src=\"https://img.icons8.com/material-rounded/90/ffffff/home-page.png\" id=\"_home\"></a><a href=\"javascript:closeUI()\"><img src=\"https://img.icons8.com/ios-glyphs/90/ffffff/multiply.png\" id=\"_close\"></a><img src=\"https://img.icons8.com/cotton/90/ffffff/menu.png\" id=\"_menuBtn\"></div><table id=\"_menu\"><tr align=\"center\"><td>��һ��</td><td>��NANҳ</td><td>��һ��</td></tr></table></div>";
	$("body").appendChild($body);
	/*��������*/
	var $page=document.querySelector(".manga-page").innerText;
	$page=parseInt($page.slice($page.indexOf("/")+1,$page.length-1));
	$("#_menu td",1).innerHTML="��"+$page+"ҳ";
	patt=new RegExp("https://[A-z]+.+/+");
	var $src=document.querySelector("#manga img").src;
	$src=$src.match(patt);
	for(var i=10001;i<=10000+$page;i++){
		$("#_comic").innerHTML+="<img src=\""+$src+(i+"").slice(1,5)+".jpg@!webp"+"\" class=\"_pages\"><hr>";
	}
	$("#_comic").innerHTML+="<div onclick=\"$('#action').querySelectorAll('a')[3].click();\" style=\"width:100vw;height:10vh; background:#607D8B;color:white;font-size:3vh;line-height:10vh;text-align:center;\">��һ��</div>";
	/*�˵�����*/
	var menu=true;
	$("#_menuBtn").on("click", function (){
		if(menu)
			$("#_menu").style.top="8vh";
		else
			$("#_menu").style.top="-10vh";
		menu=!menu;
	});
	/*�½���ת*/
	$("#_menu td",0).on("click", function (){
		document.querySelector("#action").querySelectorAll("a")[0].click();
	});
	$("#_menu td",2).on("click", function (){
		document.querySelector("#action").querySelectorAll("a")[3].click();
	});
}
/*ɾ������*/
function closeUI(){
	if(confirm("ȷ�Ϲر�"))
		document.body.removeChild(document.querySelector("#_body"));
}
/*�Զ�������*/
var timer2=setInterval(function (){
	if(document.querySelector("#manga img").src.match("jpg@!webp")){
		createUI();
		window.clearInterval(timer2);
	}
},1000);
��