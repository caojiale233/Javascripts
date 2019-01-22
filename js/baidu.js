window.onload=function(){
  var $elements=document.querySelectorAll(".ec-tuiguang");
  for(var $i=0;$i<$elements.length;$++){
    if($elements[$i].innerHTML=="广告"){
      document.querySelector("#results").removeChild($elements[$i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
    }
  }
}
