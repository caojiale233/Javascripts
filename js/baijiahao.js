if(location.href.match(".baidu.com")&&location.href.match("s?word=")){

var word=location.href.split("&")[0].split("s?word=")[1];

if(!word.match("baijiahao")){

window.open("https://m.baidu.com/s?word="+word+"+-baijiahao+-%E7%99%BE%E5%AE%B6%E5%8F%B7",'_self');

}

}
