var loaded;
if(!loaded&&location.href.match(".html")){loaded=true;
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
}}
//删除界面
function closeUI(){
if(confirm("确认关闭"))
document.body.removeChild(document.querySelector("#_body"));
}
//初始化
var $style=document.createElement("style");
$style.innerHTML="#_body{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;z-index:2147483584}#_header{position:absolute;top:0;left:0;height:8vh;width:100vw;background:#2196f3;box-shadow:0 2px 15px rgba(0,0,0,1);text-align:center}#_home,#_close,#_menuBtn{height:5vh;width:5vh;padding:1.5vh}#_home{float:left}#_close{float:right}#_comic{position:absolute;bottom:0;left:0;height:92vh;width:100vw;background:#fff;overflow:auto}._pages{width:94vw;margin:3vw;box-shadow:2px 2px 10px rgba(0,0,0,0.5)}#_menu{position:fixed;left:0;bottom:-10vh;width:100vw;height:10vh;background:#607d8b;color:#fff;font-size:2vh;transition:bottom .3s}._link{color:#fff}#_btn{width:10vh;height:10vh;position:fixed;bottom:10vh;right:5vw;z-index:2147483584}#_btn img{width:50%;height:50%;padding:15%;margin:10%;background:#2196f3;border-radius:50%;transform:rotate(45deg);box-shadow:2px 0 15px rgba(0,0,0,0.5)}";
document.body.appendChild($style);
var $btn=document.createElement("div");
$btn.id="_btn";
$btn.innerHTML="<a href=\"javascript:createUI()\"><img src=\"https://img.icons8.com/ios-glyphs/90/ffffff/multiply.png\"></a>";
document.body.appendChild($btn);
$("#viewport").content+=",user-scalable=no";
function createUI(){
//UI
var $body=document.createElement("div");
$body.id="_body";
$body.innerHTML="<div id=\"_body\"><div id=\"_comic\"></div><div id=\"_header\"><a href=\"/\"><img src=\"https://img.icons8.com/material-rounded/90/ffffff/home-page.png\" id=\"_home\"></a><a href=\"javascript:closeUI()\"><img src=\"https://img.icons8.com/ios-glyphs/90/ffffff/multiply.png\" id=\"_close\"></a><img src=\"https://img.icons8.com/cotton/90/ffffff/menu.png\" id=\"_menuBtn\"></div><table id=\"_menu\"><tr align=\"center\"><td>上一章</td><td>共NAN页</td><td>下一章</td></tr></table></div>";
$("body").appendChild($body);
//漫画生成算法
var $page=parseInt(__cr.totalPage);
$("#_menu td",1).innerHTML="共"+$page+"页";
var $src="https://mhpic.zymkcdn.com/comic/"+__cr.imgpath;
for(var i=1;i<=$page;i++){
$("#_comic").innerHTML+="<img src=\""+$src+i+".jpg-zymk.middle"+"\" class=\"_pages\"><hr>";
}
$("#_comic").innerHTML+="<div onclick=\"document.querySelector('#_menu td',2).click();\" style=\"width:100vw;height:10vh; background:#607D8B;color:white;font-size:3vh;line-height:10vh;text-align:center;\">下一章</div>";
//菜单开关
var menu=true;
$("#_menuBtn").on("click", function (){
if(menu)
$("#_menu").style.bottom="0";
else
$("#_menu").style.bottom="-10vh";
menu=!menu;
});
//章节跳转
$("#_menu td",0).on("click", function (){
document.querySelector(".catalog[title='下一话']").click();
});
$("#_menu td",2).on("click", function (){
document.querySelector(".catalog[title='下一话']").click();
});
}
window.onload=createUI();
}
