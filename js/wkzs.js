var $exist;
var patt=new RegExp("^[A-z]+://[A-z]+.[A-z]+.com/[A-z]+/[A-z]*[0-9]+.html");
if(patt.test(location.href)&&$exist==undefined){
 $exist=true;
 var $css=document.createElement('style');
	$css.innerHTML="#_body{width:100vw;height:100vh;position:fixed;left:0;top:0;background:#ddd;overflow:scroll;z-index:2147483647;}iframe{opacity:0.5;display:none;position:fixed;width:50vw;height:50vh;}._article{width:calc(100vw - 40px);padding:20px;font-size:medium;border-bottom:10px #009688 dashed;padding-bottom:40px;margin-bottom:40px;}._title{text-align:center;font-size:Large;max-width:90vw;margin:0 auto;}#_menu{position:fixed;left:calc(95vw - 128px);top:calc(85vh - 128px);background:#2196f3;border-radius:64px;width:128px;height:128px;transform:scale(0.6);box-shadow:1px 1px 10px rgba(0,0,0,0.5);z-index:2147483647}#_menuImg1,#_menuImg2,#_menuImg3{width:80px;left:24px;top:31px;height:12px;border-radius:10px;background:white;position:absolute;box-shadow:0 0 3px rgba(255,255,255,0.5);transition:top .3s,transform .3s}#_menuImg2{top:58px}#_menuImg3{top:85px}._toolBtn{width:50px;height:50px;background:#2196f3;border-radius:25px;font-size:25px;text-align:center;color:white;line-height:50px;margin:10px;box-shadow:1px 1px 10px rgba(0,0,0,0.5)}#_tool1{position:fixed;left:-20vw;top:calc(50vh - 250px);font-size:20px;width:auto;height:auto;background:#fff;padding:10px;text-align:center;transition:left .3s;box-shadow:1px 0 15px rgba(0,0,0,0.5)}#_tool3{position:fixed;left:110vw;top:calc(50vh - 225px);font-size:20px;width:auto;height:auto;background:#fff;padding:10px;text-align:center;transition:left .3s;box-shadow:-1px 0 15px rgba(0,0,0,0.5)}._menuItems{width:30px;height:30px;padding:15px;margin:5px;background:#2196f3;border-radius:50px;box-shadow:0 0 10px rgba(0,0,0,0.5);}#_tool2{position:fixed;top:-40vh;left:calc(50vw - 220px);font-size:20px;width:auto;height:auto;background:#fff;padding:10px;text-align:left;transition:top .3s;box-shadow:1px 0 15px rgba(0,0,0,0.5)}._colors{height:40px;width:60px;background:black;float:left;margin:10px;color:rgba(0,0,0,0);box-shadow:0 0 10px rgba(0,0,0,0.5)}#textArea{width:100vw;}._notOK{text-align:center;font-size:30pt;padding-top:30px;padding-bottom:30px;background:white;}.wrapper + script + script + div,#pagebottomad2{display:none !important}#_setting{position:fixed;top:calc(15vh - 30px);left:-100vw;font-size:30px;width:70vw;height:70vh;background:#fff;padding:30px;text-align:left;box-shadow:2px 2px 15px rgba(0,0,0,0.5);transition:left 0.3s;}.ptm-card{position:fixed;top:20vh;left:20vw;width:56vw;height:60vh;background:#fff;padding:2vw;display:none;}";
	document.head.appendChild($css);
	var $body=document.createElement('div');
	$body.id='_body';
	$body.innerHTML="<iframe id='_window' onload='$windowLoaded()' src='"+location.href+"' name='iframe'></iframe><div id='textArea'></div><div id='log'></div><div id='_tool1'><div class='_toolBtn' onclick='$textSize(2,true)'>A+</div>标题<br>大小<div class='_toolBtn' onclick='$textSize(-2,true)'>A-</div><br><div class='_toolBtn' onclick='$textSize(2,false)'>A+</div>文本<br>大小<div class='_toolBtn' onclick='$textSize(-2,false)'>A-</div></div><div id='_tool2'>文字颜色<span style='float:right'>自定义<input type='color' value='#000000' onchange='$colorSet(this.value,true)'></span><br><div class='_colors' onclick='$colorSet(this.innerHTML,true)' contenteditable='true'>#000</div><div class='_colors' onclick='$colorSet(this.innerHTML,true)' contenteditable='true'>#333</div><div class='_colors' onclick='$colorSet(this.innerHTML,true)'>#666</div><div class='_colors' onclick='$colorSet(this.innerHTML,true)'>#999</div><div class='_colors' onclick='$colorSet(this.innerHTML,true)'>#ccc</div><div class='_colors' onclick='$colorSet(this.innerHTML,true)'>#fff</div><br>背景颜色<span style='float:right'>自定义<input type='color' value='#000000' onchange='$colorSet(this.value,false)'></span><br><div class='_colors' onclick='$colorSet(this.innerHTML,false)' contenteditable='true'>#000</div><div class='_colors' onclick='$colorSet(this.innerHTML,false)' contenteditable='true'>#333</div><div class='_colors' onclick='$colorSet(this.innerHTML,false)'>#666</div><div class='_colors' onclick='$colorSet(this.innerHTML,false)'>#999</div><div class='_colors' onclick='$colorSet(this.innerHTML,false)'>#ccc</div><div class='_colors' onclick='$colorSet(this.innerHTML,false)'>#fff</div></div><div id='_tool3'><img class='_menuItems' onclick='$tool(1)' src='https://img.icons8.com/ios/90/ffffff/home-filled.png'><img class='_menuItems' onclick='$tool(2)' src='https://img.icons8.com/material/90/ffffff/align-justify.png'><img class='_menuItems' onclick='$tool(3)' src='https://img.icons8.com/material/90/ffffff/link.png'><img class='_menuItems' onclick='$tool(4)' src='https://img.icons8.com/material-rounded/90/ffffff/settings.png'><img class='_menuItems' onclick='$tool(5)' src='https://img.icons8.com/metro/90/ffffff/shutdown.png'></div><div id='_setting'><span onclick='$reload()'>暂时没有想到ヽ(゜-゜)</span></div><div id='_menu' onclick='$switch()'><div id='_menuImg1'></div><div id='_menuImg2'></div><div id='_menuImg3'></div></div>";
	document.body.appendChild($body);
	$DQS("meta",true)[2].content="width=720,inital-scale=1.0,user-scalable=no;"
	
 function $DQS($E,$A){
  if($A){return document.querySelectorAll($E);}else{return document.querySelector($E);}
 }
 var $menu=true,timer=true;
 function $switch(){
 if(timer){
  timer=false;
  setTimeout(function (){
   if(!timer){
    if($menu){$showMenu();}else{$hideMenu();}$menu=!$menu;
   }
   timer=true;
  },200);
 }else{
  document.querySelector("iframe").style.display=prompt("display","none");
	 document.querySelector("iframe").style.opacity=prompt("opacity","1");
  timer=true;
 }
}
function $showMenu(){
$DQS("#_tool1").style.left="0";
$DQS("#_tool2").style.top="0";
$DQS("#_tool3").style.left="calc(100vw - 90px)";
$DQS("#_menuImg1").style.top="58px";
$DQS("#_menuImg3").style.top="58px";
$DQS("#_menuImg1").style.transform="rotate(45deg)";
$DQS("#_menuImg2").style.transform="rotate(135deg)";
$DQS("#_menuImg3").style.transform="rotate(45deg)";
}
function $hideMenu(){
$DQS("#_tool1").style.left="-20vw";
$DQS("#_tool2").style.top="-40vh";
$DQS("#_tool3").style.left="110vw";
$DQS("#_menuImg1").style.top="31px";
$DQS("#_menuImg3").style.top="85px";
$DQS("#_menuImg1").style.transform="rotate(0deg)";
$DQS("#_menuImg2").style.transform="rotate(0deg)";
$DQS("#_menuImg3").style.transform="rotate(0deg)";
}
var $setting=false,$source=false;
function $tool($S){
if($S==1){location.href="https://m.wukongzhuishu.com/";}
if($S==2){$DQS("#pb_mulu").click();}
if($S==3){if($source){$DQS(".ptm-card").style.display="none"}else{$DQS(".ptm-card").style.display="block";alert("警告！\n换源之后拼页可能无法使用且需要回目录重新选择章节")}$source=!$source;}
if($S==4){if($setting){$DQS("#_setting").style.left="-100vw";}else{$DQS("#_setting").style.left="calc(15vw - 30px)";}$setting=!$setting;}
if($S==5){$DQS("#_body").style.display="none";}
}
}
if(!localStorage.titleSize){localStorage.titleSize="25";localStorage.textSize="20";localStorage.bgColor="#dddddd";localStorage.textColor="#ffffff";}
function $load(){
var $style=document.createElement("style");
$style.innerHTML="._article{font-size:"+localStorage.textSize+"px;}._title{font-size:"+localStorage.titleSize+"px;}#_body{background:"+localStorage.bgColor+";}._article,._title{color:"+localStorage.textColor+"}";
document.body.appendChild($style);
}
function $colorLoader(){var $colorElements=$DQS("._colors",true);for(var i=0;i<$colorElements.length;i++){$colorElements[i].style.background=$colorElements[i].innerHTML}}
function $colorSet($C,$S){$E=document.createElement("style");if($S){localStorage.textColor=$C;$E.innerHTML="._article,._title{color:"+$C+"}";}else{localStorage.bgColor=$C;$E.innerHTML="#_body{background:"+$C+"}";}document.body.appendChild($E);}
function $textSize($M,$W){var $size;var $E=document.createElement("style");if($W){$size=parseInt(localStorage.titleSize);$size+=$M;$E.innerHTML="._title{font-size:"+$size+"px}";localStorage.titleSize=$size;}else{$size=parseInt(localStorage.textSize);$size+=$M;$E.innerHTML="._article{font-size:"+$size+"px}";localStorage.textSize=$size;}document.body.appendChild($E);}
$colorLoader();$load();
$DQS("#_body").appendChild($DQS(".ptm-card"));
function log($T){$DQS("#log").innerHTML+="▶"+$T+"<br>";}
function $reload(){
	$DQS("iframe").contentWindow.location.reload();
}
var $loaded=true,$listener=0;
window.ontouchstart=function (){
if($loaded){if($DQS("._article",true)[$listener].getBoundingClientRect().top<100)loadIframe();}
}
function $windowLoaded(){
  try{
		document.querySelector('#textArea').innerHTML+="<div class='_title'>"+document.querySelector('iframe').contentWindow.document.querySelector('.title').innerHTML+"</div><div class='_article'>"+document.querySelector('iframe').contentWindow.document.querySelector('#articlecon').innerHTML+"</div><div class='_notOK'>(# ﾟДﾟ)还没加载出来呢</div>";
		$loaded=true;document.querySelector("#articlecon").innerHTML="";
		}catch(err){document.querySelector('#textArea').innerHTML+="<div class='_article' align=center>Σ(ﾟДﾟ)居然就没有惹！</div>"}
}
function loadIframe(){
$DQS("#textArea").removeChild($DQS("._notOK"));
$DQS("iframe").contentWindow.document.querySelector("#pb_next").click();
$loaded=false;
$listener++;
}
