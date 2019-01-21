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
function createSelect (apis) {
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
}

//create switch
var $switch=false;
function createMenu(){
	var $newStyle=document.createElement("style");
	$newStyle.innerHTML="";
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
