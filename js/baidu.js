//window.onload=function(){
alert($elements.length);
  var $elements=document.querySelectorAll(".ec-tuiguang");
  for(var $i=0;$i<$elements.length;$++){
    alert($i);
    if($elements[$i].innerHTML=="广告"){
      alert($i+"/"+$elements.length);
      document.querySelector("#results").removeChild($elements[$i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
    }
  }
//}