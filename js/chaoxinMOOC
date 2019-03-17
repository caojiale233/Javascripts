var finish,state=0,timer1,timer2,result="错误";
function start(){
	hide();
	log("开始");
	document.querySelector("iframe").contentWindow.document.querySelectorAll("iframe")[state].contentWindow.document.querySelector(".vjs-poster").click();
	timer1=setInterval(function (){
		finish=document.querySelector("iframe").contentWindow.document.querySelectorAll("#ext-gen1039")[state].className;
		if(finish.match("finished")){next();}
		if(document.querySelector("iframe").contentWindow.document.querySelector("iframe").contentWindow.document.querySelector("#videoquiz-1037")){if(document.querySelector("#auto").checked){answer();}else{document.querySelector("#_body").style.width="25vw";}}
	},10000);
}
function next(){
	stop();
	console.log("next");
	if(document.querySelector("iframe").contentWindow.document.querySelectorAll("iframe").length==2&&state==0){
		log("下一个视频");
		state=1;
		start();
	}else{
		state=0;
		log("下一节");
		document.querySelector(".orange01").click();
		setTimeout(function() {
			start();
		}, 5000);
	}
}
alert=function (msg){
	result=msg;
}
function stop(){
	log("已停止");
	window.clearInterval(timer1);
}
function play(){
	log("播放/暂停");
	document.querySelector("iframe").contentWindow.document.querySelectorAll("iframe")[state].contentWindow.document.querySelector(".vjs-poster").click();
}
function log(msg){
	document.querySelector("#_log").innerHTML+="&nbsp;&nbsp;"+msg+";<br>";
}
function answer(){
	show();
	var dom=document.querySelector("iframe").contentWindow.document.querySelector("iframe").contentWindow.document.querySelector("#videoquiz-1037");
	var ans=dom.querySelectorAll("label");
	var count=0;
	timer2=setInterval(function (){
		if(result.match("错误")&&count<4){
			result="";
			ans[count].click();
			count++;
			dom.querySelector("#ext-gen1045").click();
		}else{
			window.clearInterval(timer2);
			hide();
			result="错误";
			if(count>=4){
				log("<span style='color:#f44336'>出错了！请手动答题</span>");
			}
		}
	},1000);
}
function hide(){
	document.querySelector("#_body").style.width="100vw";
}
function show(){
	document.querySelector("#_body").style.width="calc(25vh - 40px)";
}
var style=document.createElement("style");
style.innerHTML=".md_ripple{position:relative;width:200%;height:200%;left:-50%;top:-50%;background:#000;opacity:0;border-radius:100%;transition:background .2s,opacity .2s}.md_button{cursor: pointer;position:relative;left:0;top:-72px;background:rgba(0,0,0,0);color:inherit;line-height:72px;border:0;outline:0;font-size:32px;width:100%;height:100%}.md_checkbox_1{width:55px;height:55px}.md_checkbox_2{cursor: pointer;width:100%;height:100%;position:relative;z-index:1;opacity:0;margin:0;padding:0}.md_checkbox_3{width:80%;height:80%;padding:calc(10% - 5px);border:5px rgba(0,0,0,0.54) solid;position:relative;left:0;top:-60px;border-radius:10px;transition:width .2s,height .2s,border .2s,padding .2s,margin .2s}.md_checkbox_4{width:100%;height:100%;position:relative;opacity:0;transition:height .2s,width .2s,opacity .2s}.md_checkbox_5{top:calc(-250% - 5px)}.md_button_bg{cursor: pointer;width:124px;height:72px;margin:32px;margin-left:64px;margin-right:64px;padding:0;padding-left:32px;padding-right:32px;box-shadow:0 4px 6px 1px rgba(0,0,0,.37);border-radius:4px;overflow:hidden}.md_button_ripple{position:relative;left:50%;top:50%;border-radius:100px;width:0;height:0;background:rgba(0,0,0,0.14);transition:top .2s,left .2s,width .2s,height .2s}.md_button_rippleBox{width:100%;height:100%}#_body{transition:width 0.3s;background:rgba(0,0,0,0.15);position:fixed;top:0;left:0;width:calc(25vh + 40px);height:100vh}.md_button_bg{transform:scale(0.5);margin:0 auto}.md_checkbox_1{transform:scale(0.5);margin:0 auto}#_contain{text-align:center;width:15vw;position:absolute;height:80vh;margin-top:10vh}._btnImg{height:50px;padding-top:10px}#_log{width:25vh;padding:20px;height:50vh;position:absolute;bottom:0;left:0;background:#fff;box-shadow:2px -2px 10px rgba(0,0,0,0.5);overflow:auto}#_answer{width:50vw;padding:20px;height:50vh;position:absolute;bottom:25vh;left:25vw;background:#fff;box-shadow:2px 2px 10px rgba(0,0,0,0.5)}#_hide{position:absolute;right:-40px;background:#2196f3;height:40px;width:40px;top:calc(35vh - 20px);box-shadow:0 0 10px rgba(0,0,0,0.5);border-radius:5px;}#_hide img{width:80%;padding:10%}";
document.head.appendChild(style);
var body=document.createElement("div");
body.innerHTML="<div onclick=\"hide()\" id=\"_hide\"><img src=\"https://img.icons8.com/ios/90/ffffff/chevron-right.png\"></div><div id=\"_contain\"><div data-md-bgColor=\"#2196f3\" data-md-fontColor=\"#ffffff\" class=\"md_button_bg\" onclick=\"md_button_change(this.querySelector('.md_button_ripple').style)\"><div class=\"md_button_rippleBox\"><div class=\"md_button_ripple\"></div></div><input class=\"md_button\" type=\"button\" value=\"开始\" onclick=\"start()\"></div><div data-md-bgColor=\"#2196f3\" data-md-fontColor=\"#ffffff\" class=\"md_button_bg\" onclick=\"md_button_change(this.querySelector('.md_button_ripple').style)\"><div class=\"md_button_rippleBox\"><div class=\"md_button_ripple\"></div></div><button onclick=\"play()\" class=\"md_button\"><img class=\"_btnImg\" src=\"https://img.icons8.com/ios-glyphs/90/ffffff/pause.png\"><img class=\"_btnImg\" src=\"https://img.icons8.com/ios-glyphs/90/ffffff/play.png\"></button></div><br><strong>自动答题</strong><br><div data-md-color=\"#2196f3\" class=\"md_checkbox_1\"><input id=\"auto\" onclick=\"md_checkbox_change(this.parentNode)\" class=\"md_checkbox_2\" type=\"checkbox\"><div class=\"md_checkbox_3\"><img class=\"md_checkbox_4\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKOSURBVGhD7Zg9aFRREIU3PwQSFBQCkgixiI0WIhYRG9FGJBbRwoClWClWYicKIoiVYCVaiZ1YWFgkYBAJaWIlFqKCNgoK/mARCGLc9bt7T5SQ3Xlv477deXA/GO567zkzZ0BD3EoikUgkukG1Wh2lztRqtUO6Ki8sMcYynznr8PkRtU3P5YL8PYSfi6v8g7svHCclKw8EPx9XaAzvdzh6JPcNYXdSSzF6c9AclsUv5Owj6EKMbIPumGx+IeRF5TVB94pjQDafEHI3tRwjNwfNL2pCNp+Qs5+Qz2NkG3TXZPMLIS8rrwm6Fxy+/6oRcC9Bf9YTGwQNtUc2n5BzgJAvY2QbdJdk8wshryuvCbpFjn7ZfELI/dRKjNwcNMvULtl8QsBB6rUym6C7IJtfCHlTeU3QzXP0yuYTQh6kfsfIzUGzRI3L5hNybiLkuxjZBt052YqBGeFH7FnqCrVD1y2B73aMa4PuCUdx/z2g+RBDntanAZ+/U/v0nAv0R6iqWlj8oMZkaz80X7PMKtzlXgr5FrQfotMG3WnZ2g/9Gy6zSt6lkN6LDht6PZalGJiRGSRrKd6mJDVB940aka0YQljNMwk6at1SPA1z/ymqbNCdkq04GDKreZk0Woo/P9CzCbqHshQLg7ZTbzU3E7R/l+Kc1rUJuvDd23B9YCdg4EaWmqS+6soE3QmN6hwMbWmpvNDzvkZ0nnYvRa+PHFvVvju0ayl6BI6qbXchyH8vhf+u2vlAS71RvpbA957arFZ+2MhS6AN+v5MmXEtLob0lq1/yLoUm/Lsbks03WUvxtkIdkLwcZCx1Q7JywUKjhH8Wd4hwN8Ph+/toC8L3UsdZ5CoVfkHt01MikUgkEuupVP4AXiRmS//fUV4AAAAASUVORK5CYII=\"></div><div class=\"md_ripple md_checkbox_5\"></div></div></div><div id=\"_log\">日志:<br></div>";
body.id="_body";
document.body.appendChild(body);
function md_button_check(md_element){md_element.style.background=md_element.getAttribute("data-md-bgColor");md_element.style.color=md_element.getAttribute("data-md-fontColor");}
function md_checkbox_change(md_element){if(md_element.querySelector(".md_checkbox_2").checked){var md_color=md_element.getAttribute("data-md-color");md_element.querySelector(".md_checkbox_5").style.opacity="0.17";md_element.querySelector(".md_checkbox_3").style.width="0";md_element.querySelector(".md_checkbox_3").style.height="0";md_element.querySelector(".md_checkbox_3").style.padding="30%";md_element.querySelector(".md_checkbox_3").style.margin="calc(20% - 5px)";md_element.querySelector(".md_checkbox_4").style.opacity="1";setTimeout(function (){md_element.querySelector(".md_checkbox_5").style.background=md_color;md_element.querySelector(".md_checkbox_3").style.borderColor=md_color;md_element.querySelector(".md_checkbox_3").style.background=md_color;md_element.querySelector(".md_checkbox_3").style.width="80%";md_element.querySelector(".md_checkbox_3").style.height="80%";md_element.querySelector(".md_checkbox_3").style.padding="calc(10% - 5px)";md_element.querySelector(".md_checkbox_3").style.margin="0";},200);setTimeout(function (){md_element.querySelector(".md_checkbox_5").style.opacity="0";},500);}else{md_element.querySelector(".md_checkbox_5").style.opacity="0.17";md_element.querySelector(".md_checkbox_3").style.width="0";md_element.querySelector(".md_checkbox_3").style.height="0";md_element.querySelector(".md_checkbox_3").style.padding="30%";md_element.querySelector(".md_checkbox_3").style.margin="calc(20% - 5px)";md_element.querySelector(".md_checkbox_4").style.opacity="0";setTimeout(function (){md_element.querySelector(".md_checkbox_5").style.background="#000000";md_element.querySelector(".md_checkbox_3").style.borderColor="rgba(0,0,0,0.54)";md_element.querySelector(".md_checkbox_3").style.background="rgba(0,0,0,0)";md_element.querySelector(".md_checkbox_3").style.width="80%";md_element.querySelector(".md_checkbox_3").style.height="80%";md_element.querySelector(".md_checkbox_3").style.padding="calc(10% - 5px)";md_element.querySelector(".md_checkbox_3").style.margin="0";},200);setTimeout(function (){md_element.querySelector(".md_checkbox_5").style.opacity="0";},500);}}
function md_button_change(md_element){md_element.top="-64px";md_element.left="-38px";md_element.width="200px";md_element.height="200px";setTimeout(function (){md_element.display="none";md_element.top="50%";md_element.left="50%";md_element.width="0";md_element.height="0";},800);setTimeout(function (){md_element.display="block";},1100);}
window.onload=function (){
	var md_button=document.querySelectorAll(".md_button_bg");
	for(var i=0;i<md_button.length;i++){md_button_check(md_button[i]);}
}
/*
<div class="x-component ans-videoquiz x-component-default" id="videoquiz-1037"><div class="ans-videoquiz-title">[单选题] 设有如下定义:
 int   a=1,b=2,c=3,d=4,m=2,n=2;
则执行表达式:(m=a&gt;b)&amp;&amp;(n=c&gt;d)后,n的值为______________.</div><ul class="ans-videoquiz-opts"><li class="ans-videoquiz-opt"><label><input type="radio" name="ans-videoquiz-opt" value="false">A 1</label></li><li class="ans-videoquiz-opt"><label><input type="radio" name="ans-videoquiz-opt" value="true">B 2</label></li><li class="ans-videoquiz-opt"><label><input type="radio" name="ans-videoquiz-opt" value="false">C 3</label></li><li class="ans-videoquiz-opt"><label><input type="radio" name="ans-videoquiz-opt" value="false">D 0</label></li> </ul><div class="ans-videoquiz-submit" id="ext-gen1045">提交</div></div>
*/
