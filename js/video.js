var attr="^http[A-z]+://[A-z]*.*:{0}";
if(location.href.match(attr+".iqiyi.com") || location.href.match(attr+".youku.com") || location.href.match(attr+".le.com") || location.href.match(attr+".letv.com") || location.href.match(attr+"v.qq.com") || location.href.match(attr+".tudou.com") || location.href.match(attr+".mgtv.com") || location.href.match(attr+"film.sohu.com") || location.href.match(attr+"tv.sohu.com") || location.href.match(attr+".acfun.cn") || location.href.match(attr+".bilibili.com") || location.href.match(attr+".pptv.com") || location.href.match(attr+"vip.1905.com") || location.href.match(attr+".yinyuetai.com") || location.href.match(attr+".fun.tv") || location.href.match(attr+".56.com") || location.href.match(attr+".wasu.cn")){
var youku = '<span class="_icons you">优</span>'
var qq = '<span class="_icons ten">腾</span>'
var all = '<span class="_icons all">综</span>'
var apis = [{
name:all + "百域学院",url:"http://api.baiyug.cn/vip/index.php?url="
},{
name:youku + "搜你妹",url:"http://www.sonimei.cn/?url="
},{
name:all + "石云",url:"https://jiexi.071811.cc/jx.php?url="
},{
name:all + "无名小站",url:"http://www.sfsft.com/admin.php?url="
}, {
name:all + "VIP看看",url:"http://q.z.vip.totv.72du.com/?url="
},{
name:all + "ODFLV",url:"http://aikan-tv.com/?url="
},{
name:all + "无名小站",url:"http://www.wmxz.wang/video.php?url="
} ];
//create List
	var myul = document.createElement("ul");
	myul.id = "myul";
	for (var i = 0; i < apis.length; i ++) {
		var myli = document.createElement("li");
		var that=this;
		myli.className="_list";
		(function (num) {
			myli.onclick = function () {
				window.open(apis[num].url + location.href,'_blank');
			};
		})(i);
		myli.innerHTML = apis[i].name;
		myul.appendChild(myli);
	}
	document.body.appendChild(myul);
//create switch
var $switch=false;
	var $newStyle=document.createElement("style");
	$newStyle.innerHTML="._icons{float:left;width:5vw;height:5vw;font-size:2.5vw;color:rgba(255,255,255,0.73);line-height:5vw;text-align:center;border-radius:100%;box-shadow:0 0 3px #a9a9a9;margin:3.78vw 2.1vw}.you{background:#2196f3}.ten{background:#4caf50}.all{background:#f44336}._list{font-size:4.2vw;width:33.6vw;line-height:12.6vw;border-radius:2vw;color:black;border-bottom:1px solid rgba(0,0,0,0.3);overflow:hidden;text-overflow:hidden}._list:hover{background:rgba(0,0,0,0.9);color:#fff}#myul{background:#fff;box-shadow:0 1px 10px rgba(0,0,0,0.2);margin:0;padding:0 1vw;position:fixed;bottom:33vh;right:6vw;z-index:99999;height:0vh;overflow:scroll;transition:height .3s;border-radius:1.26vw}#myBtn{width:15vw;height:15vw;position:fixed;bottom:20vh;right:10vw;z-index:100000;border-radius:100%;box-shadow:2px 2px 15px rgba(0,0,0,0.5);background:#fff}._btnImg{width:50%;margin:25%;height:50%;transition:transform .3s;transform:rotate(-45deg)}";
	document.body.appendChild($newStyle);
	var myBtn = document.createElement("div");
	myBtn.id = "myBtn";
	myBtn.innerHTML = "<img class='_btnImg' src='https://img.icons8.com/ios-glyphs/90/multiply.png'>";
	myBtn.onclick = function (){
		if($switch){
			document.querySelector('._btnImg').style.transform="rotate(-45deg)";
			document.querySelector('#myul').style.height="0vh";
		}else{
			document.querySelector('._btnImg').style.transform="rotate(90deg)";
			document.querySelector('#myul').style.height="50vh";
			
		}
		$switch=!$switch;
	}
	document.body.appendChild(myBtn);
}
