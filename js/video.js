var $style$=document.createElement("style");
$style$.innerHTML="";
document.body.appendChild($style$);
var youku = '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:#0078FF;margin:3.78vw 2.1vw;">浼�</span>'

var qq = '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:#0078FF;margin:3.78vw 2.1vw;">鑵�</span>'

var nothing = '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:transparent;margin:3.78vw 2.1vw;">缁�</span>'

var apis = [{
name:nothing + "鐧惧煙闃�",url:"http://api.baiyug.cn/vip/index.php?url=",title:"杞湀鍦堝氨鎹㈢嚎璺�"
},{
name:qq + "vParse",url:"https://api.vparse.org/?url=",title:"鏀寔鑵捐"
},{
name:qq + "鐚簯",url:"https://jx.maoyun.tv/index.php?id=",title:"鏀寔鑵捐"
},{
name:youku + "鎼滀綘濡�",url:"http://www.sonimei.cn/?url=",title:"缁煎悎鎺ュ彛"
}, {
name:nothing + "鍣楀櫁鐢靛奖",url:"http://pupudy.com/play?make=url&id=",title:"缁煎悎鎺ュ彛锛岀牬瑙ｅ叏缃�"
},{
name:youku + "鎶㈠厛褰遍櫌",url:"http://www.qxyingyuan.vip/play?make=url&id=",title:"鎹浼橀叿姣旇緝绋冲畾"
}, {
name:nothing + "閰风粯",url:"http://appapi.svipv.kuuhui.com/svipjx/liulanqichajian/browserplugin/qhjx/qhjx.php?id=",title:"缁煎悎鎺ュ彛"
}, {
name:nothing + "鏃嬮瑙ｆ瀽",url:"http://api.xfsub.com/index.php?url=",title:"1905浼樺厛浣跨敤"
},{
name:nothing + "鐭冲ご瑙ｆ瀽",url:"https://jiexi.071811.cc/jx.php?url=",title:"鎵嬪姩鐐规挱鏀�"
},{
name:nothing + "鏃犲悕灏忕珯",url:"http://www.sfsft.com/admin.php?url=",title:"鏃犲悕灏忕珯鍚屾簮"
}, {
name:nothing + "VIP鐪嬬湅",url:"http://q.z.vip.totv.72du.com/?url=",title:"鏇存崲绾胯矾鎴愬姛鐜囦細鎻愰珮"
},{
name:nothing + "ODFLV",url:"http://aikan-tv.com/?url=",title:"涓嶇ǔ瀹氾紝骞垮憡杩囨护杞欢鍙兘鏈夊奖鍝�"
},{
name:nothing + "163浜�",url:"http://jx.api.163ren.com/vod.php?url=",title:"鍋跺皵鏀寔鑵捐"
},{
name:nothing + "CKFLV",url:"http://www.0335haibo.com/tong.php?url=",title:"CKFLV浜�,閮ㄥ垎绔欑偣涓嶆敮鎸�"
},{
name:nothing + "鏃犲悕灏忕珯2",url:"http://www.wmxz.wang/video.php?url=",title:"杞湀鍦堝氨鎹㈢嚎璺�"
},{
name:nothing + "鐪肩潧浼氫笅闆�",url:"http://www.vipjiexi.com/yun.php?url=",title:"www.vipjiexi.com"
},{
name:youku + "1008褰辫",url:"http://api.1008net.com/v.php?url=",title:"鎹鍙互鐪嬪竷琚嬫父鎴忚棰�"
}, {
name:nothing + "浜轰汉鍙戝竷",url:"http://v.renrenfabu.com/jiexi.php?url=",title:"缁煎悎锛屽绾胯矾"
} ];


//娣诲姞閾炬帴
function createSelect (apis) {
	var myul = document.createElement("ul");
	myul.id = "myul";
	myul.setAttribute("style","display:none;background:#fff;box-shadow:0px 1px 10px rgba(0,0,0,0.3);margin:0;padding:0 4.2vw;position:fixed;bottom:33vh;right:12vw;z-index:99999;height:50vh;overflow:scroll;border-radius:1.26vw;");
	for (var i = 0; i < apis.length; i ++) {
		var myli = document.createElement("li");
		var that=this;
		myli.setAttribute("style","margin:0;padding:0;display:block;list-style:none;font-size:4.2vw;width:33.6vw;text-align:left;line-height:12.6vw;letter-spacing:0;border-bottom:1px solid #f0f0f0;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;");
		(function (num) {
			myli.onclick = function () {
				window.open(apis[num].url + location.href,'_blank');
			};
			myli.ontouchstart = function () {
				this.style.cssText += "color:yellow;background:#373737;border-radius:1.26vw;";
			}
			myli.ontouchend = function () {
				this.style.cssText += "color:black;background:transparent;border-radius:0;";
			}
		})(i);
		myli.innerHTML = apis[i].name;
		myul.appendChild(myli);
	}
	document.body.appendChild(myul);
}

//鍞ゅ嚭鑿滃崟
function createMenu(){
	var myBtn = document.createElement("div");
	myBtn.id = "myBtn";
	myBtn.innerHTML = "+";
	myBtn.setAttribute("style","width:15vw;height:15vw;position:fixed;bottom:20vh;right:10vw;z-index:100000;border-radius:100%;text-align:center;line-height:15vw;box-shadow:0px 1px 10px rgba(0,0,0,0.3);font-size:5.5vw;background:#fff;");
	myBtn.onclick = function (){
		var myul = document.getElementById("myul");
		if(myul.style.display == "none"){
			myul.style.display = "block";
			this.style.transform="rotateZ(45deg)";
		}else{
			myul.style.display = "none";
			this.style.transform="rotateZ(0deg)";
		}
	}
	document.body.appendChild(myBtn);
}
/*document.addEventListener("DOMContentLoaded",function () {
	createMenu();
	createSelect(apis);
});*/
if(location.href.match(".iqiyi.com") || location.href.match(".youku.com") || location.href.match(".le.com") || location.href.match(".letv.com") || location.href.match("v.qq.com") || location.href.match(".tudou.com") || location.href.match(".mgtv.com") || location.href.match("film.sohu.com") || location.href.match("tv.sohu.com") || location.href.match(".acfun.cn") || location.href.match(".bilibili.com") || location.href.match(".pptv.com") || location.href.match("vip.1905.com") || location.href.match(".yinyuetai.com") || location.href.match(".fun.tv") || location.href.match(".56.com") || location.href.match(".wasu.cn")) {
		createMenu();
		createSelect(apis);
}
