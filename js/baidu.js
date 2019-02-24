if(location.href.match(".baidu.com")&&location.href.match("s?word=")){
if(!location.href.match("pu=sz%401321_480")){
var word=location.href.split("&")[0].split("s?word=")[1];
if(word.match("baijiahao")){
window.open("https://m.baidu.com/s?word="+word+"&pu=sz%401321_480",'_self');
}else{
window.open("https://m.baidu.com/s?word="+word+"+-baijiahao&pu=sz%401321_480",'_self');
}
}
[].forEach.call(document.querySelectorAll('.ec_tg'), function ($ads){
if($ads.innerHTML=="广告")$ads.parentNode.parentNode.parentNode.style.display="none";
});
}
