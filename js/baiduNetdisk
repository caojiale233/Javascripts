var loaded;
var patt=new RegExp("^[A-z]+://pan.baidu.com/disk/home");
if(loaded==undefined&&patt.test(location.href)){
loaded=true;
var $switch$=true;
var theCss="#mogicButton{position:fixed;width:12vw;height:12vw;background:#2196f3;top:78%;left:80%;border-radius:50%;box-shadow:1px 1px 8px #999999;z-index:2147483647;}.buttonImg{margin:20%;width:60%;height:60%;transform:rotate(45deg);transition:transform 0.5s;}#layoutMain,.frame-main{ top:0 !important; left:0 !important; width:100% !important; } .module-cardtip-box,.module-cardtip-mask,.module-canvas,#dialog1,.aside-absolute-container,.feNMdtb,.QGOvsxb,#hd,#layoutAside,.vip-notice,.vip-privilege,.JS-user-level,.bar,.nxNLlN{display:none !important}.file-name,.yfHIsP{ width:50% !important; } .module-aside{ z-index: 2147483646; width: 45vw; position: fixed !important; height:40% !important; top:33% !important; left:50vw; overflow:auto;overflow-x:hidden; background:#fff; box-shadow:1px 1px 10px #999;display:none; } .yao-b{ margin:0 !important; overflow:auto; width:180vw !important; } #layoutHeader{ top:-50vh !important; } #storageBar{ position:fixed; width:60vw; height:2vh; background:#eee; border-radius:100px; top:96vh; left:20vw; z-index:2147483645; box-shadow:1px 1px 10px #aaa; } #storageBarText{ position:absolute; width:100%; height:100%; line-height:2vh; top:0; left:0; text-align:center; overflow:hidden; color:#333; } #storageBarUsed{ position:absolute; width:0; height:100%; top:0; left:0; background:#64b5f6; border-radius:100px;transition:width 0.6s; } #doc,#bd,#yao-main{ width:100vw !important; min-width:100vw !important; overflow:auto !important; } .KHbQCub{ width:40vw !important; } a{-webkit-tap-highlight-color:rgba(0,0,0,0);} .dialog,.alert-dialog{ width:90vh !important; left:calc(90vw - 45vh) !important; box-shadow:1px 1px 10px #999 !important; } #_buttons{ position:fixed; width:0; height:12vw; top:78%; left:86%; z-index:2147483646; overflow:hidden; transition:left 0.35s,width 0.3s; } #_user{ width:6vw; height:6vw; margin:2vw; padding:1vw; background:#2196f3; border-radius:50%; box-shadow:1px 1px 8px #999999; float:left; } #_reload{ width:6vw; height:6vw; margin:2vw; padding:1vw; background:#2196f3; border-radius:50%; box-shadow:1px 1px 8px #999999; float:left; } .DIcOFyb{ position:fixed !important; top:-40px; left:10px; }#layoutApp{min-width:0 !important;width:180vw}.timeline-title-curday{position:absolute !important;}";
var myStyle=document.createElement('style');myStyle.innerHTML=theCss;document.body.appendChild(myStyle);
var mogicButton=document.createElement('div');

function $switch(){
	if($switch$){
		$switch$=false;
		document.querySelector('.module-aside').style.display='block';
		document.querySelector('.buttonImg').style.transform='rotate(180deg)';
		document.querySelector('#_buttons').style.left='55%';
		document.querySelector('#_buttons').style.width='28vw';
	}else{
		$switch$=true;
		document.querySelector('.module-aside').style.display='none';
		document.querySelector('.buttonImg').style.transform='rotate(45deg)';
		document.querySelector('#_buttons').style.left='86%';
		document.querySelector('#_buttons').style.width='0';
	}
}
function reload(){location.reload();}
var _userSwitch=true;
function userBoard(){
	if(_userSwitch){
		_userSwitch=false;
		document.querySelector('.PvsOgyb').style.display='block';
		$switch();
	}else{
		_userSwitch=true;
		document.querySelector('.PvsOgyb').style.display='none';
		$switch();
	}
}
mogicButton.id="mogicButton";
mogicButton.innerHTML="<img onclick='$switch();' class='buttonImg' src='https://png.icons8.com/ios-glyphs/90/ffffff/multiply.png'>";
document.body.appendChild(mogicButton);
var $_button=document.createElement('div');
$_button.id="_buttons";
$_button.innerHTML="<img id='_reload' onclick='reload()' src='https://img.icons8.com/metro/104/ffffff/synchronize.png'><img onclick='userBoard()' id='_user' src='https://img.icons8.com/windows/96/ffffff/gender-neutral-user.png'>";
document.body.appendChild($_button);
document.body.appendChild(document.querySelector('.module-aside'));

window.onload=function (){
var storageBar=document.createElement('div');
storageBar.id="storageBar";
storageBar.innerHTML="<div id='storageBarUsed'></div><div id='storageBarText'></div>";
document.body.appendChild(storageBar);
	setTimeout(function() {document.querySelector('#storageBarText').innerHTML=document.querySelector('.remaining-space').innerHTML;
	var $used=parseFloat(document.querySelector('.bold').innerHTML);
	var $total=parseInt(document.querySelector('.remaining-space').children[1].innerHTML);
	var $width=$used/$total;
	$width=parseInt($width*100)+'%';
	document.querySelector('#storageBarUsed').style.width=$width;
	}, 1500);
}
}
