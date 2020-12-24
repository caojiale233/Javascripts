function base64_decode (data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];
    if (!data) {return data;}
    data += '';
    do { 
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));
        bits = h1<<18 | h2<<12 | h3<<6 | h4;
        o1 = bits>>16 & 0xff;
        o2 = bits>>8 & 0xff;
        o3 = bits & 0xff;
        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);
    dec = tmp_arr.join('');
    dec = this.utf8_decode(dec);
    return dec;
}

if(location.href.indexOf(".html")!=-1){
var urls=base64_decode(qTcms_S_m_murl_e);
urls=urls.split("$qingtiandy$");
var info=[qTcms_Pic_backArr,qTcms_Pic_nextArr,"/",qTcms_m_url,qTcms_S_m_playm];
function load(){
document.write("<div id='trueBody'><div id='comicArea'></div><div id='ctrl_0'>");
document.write("<a href='"+info[2]+"' style='float:left'><svg t='1608792401632' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4831' width='200' height='200'><path d='M953.7536 530.432l-418.7648-418.5088a32.4608 32.4608 0 0 0-45.9264 0l-418.7648 418.56a65.1264 65.1264 0 0 0 45.9264 111.104h44.1344v298.6496c0 18.0224 14.5408 32.5632 32.5632 32.5632H446.976v-227.7888h113.8176V972.8h270.336a32.512 32.512 0 0 0 32.512-32.5632v-298.6496h44.1344a65.1776 65.1776 0 0 0 45.9776-111.104z' p-id='4832' fill='#ffffff'></path></svg></a>");
document.write("<a href='"+info[3]+"' style='float:right'><svg t='1608792450834' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='5672' width='200' height='200'><path d='M844.8 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 864 864 883.2 844.8 883.2zM844.8 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 460.8 864 480 844.8 480zM435.2 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 864 460.8 883.2 435.2 883.2zM435.2 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 460.8 460.8 480 435.2 480z' p-id='5673' fill='#ffffff'></path></svg></a>");
document.write(info[4]);
document.write("</div><div id='ctrl_1'>");
document.write("<a href='"+info[1]+"' style='float:right'><svg style='float:right' t='1608790936420' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2597' width='200' height='200'><path d='M192 168.281708C192 139.429599 228.082893 116.844012 254.03609 133.881117 431.802265 250.790906 634.619171 360.017406 812.319138 476.927195 838.338544 494.029576 838.66958 528.691272 812.650173 545.793654 634.883999 662.703443 433.258822 772.336915 255.426438 889.246701 242.383635 897.863168 229.605658 897.536787 219.277344 892.184134 204.314528 887.35369 192 874.167885 192 852.365613L192 168.281708Z' p-id='2598' fill='#ffffff'></path></svg>下一章</a>");
document.write("<a href='"+info[0]+"' style='float:left'><svg style='float:left;transform:rotate(180deg)' t='1608790936420' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2597' width='200' height='200'><path d='M192 168.281708C192 139.429599 228.082893 116.844012 254.03609 133.881117 431.802265 250.790906 634.619171 360.017406 812.319138 476.927195 838.338544 494.029576 838.66958 528.691272 812.650173 545.793654 634.883999 662.703443 433.258822 772.336915 255.426438 889.246701 242.383635 897.863168 229.605658 897.536787 219.277344 892.184134 204.314528 887.35369 192 874.167885 192 852.365613L192 168.281708Z' p-id='2598' fill='#ffffff'></path></svg>上一章</a>");
document.write("共"+urls.length+"张</div></div>");
for(var i =0;i<urls.length;i++)
document.getElementById("comicArea").innerHTML+="<img src='"+urls[i]+"' class='comicImg'>";

var newCss=document.createElement("style");
newCss.innerHTML="#trueBody{background:#222;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}#comicArea{width:80vw;height:100vh;position:absolute;top:0;left:10vw;background:#fff;overflow:auto}#ctrl_0{color:#fff;text-align:center;line-height:8vh;font-size:2vh;width:100vw;height:8vh;position:absolute;top:-10vh;left:0;background:rgba(0,0,0,0.7);transition:top 0.2s}#ctrl_1{color:#fff;text-align:center;line-height:8vh;font-size:2.5vh;width:100vw;height:8vh;position:absolute;bottom:-10vh;left:0;background:rgba(0,0,0,0.7);transition:bottom 0.2s}.comicImg{width:100%;margin-bottom:2vh;margin-top:2vh}.icon{height:4vh;width:4vh;margin:2vh;margin-left:2vh;margin-right:2vh}a{text-decoration:none;color:#fff}";
document.body.appendChild(newCss);

var ctrl=true;
document.getElementById("comicArea").addEventListener("click",function (){
if(ctrl){
document.getElementById("ctrl_0").style.top="0";
document.getElementById("ctrl_1").style.bottom="0";
}else{
document.getElementById("ctrl_0").style.top="-10vh";
document.getElementById("ctrl_1").style.bottom="-10vh";
}
ctrl=!ctrl;
});
}
setTimeout(load,1000);
}
/*

aHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwNmpBY25VWUdsX3laUHE2bmouanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwNjhOS0dUMHV4dUNiZENxcV8uanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwNUt1MkdTN2QtSzg5NGhqOFEuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwNDNLeXdSY3pHM3JqSVh3NTMuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwM19GenJ0LXYyY19wOUFtY1ouanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwM2JVc2FiOE1LN2FXOEViQ1ouanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwMnZJMDVtU0ZVNkplZ0IwdjQuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwMVB0QWJmVV80TkdpZGQ2N0MuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwMWw2Z2pHQVdRRVp2Um4yZjIuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTQwME1QY2hvb1pYeXB4WUdhLWQuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5OTAweV82Q18wSTF4WkZuRDQuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5OWNUMzlqeDZlMW5YNUl1MTcuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5OGR0Z3YwSEpDX0hacnJWb1cuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5N0hPbHFvcGIwWENidE9WaHQuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5NlFYeHV5bXR3RUVsR0dUVHYuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5NnhEREJEc3ExbW1fZ2tKR3cuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM5NXAxenFKSWpUNFpKQk1GM3ouanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM4OUk2bmtCakwyV1Nmdy12djUuanBnJHFpbmd0aWFuZHkkaHR0cHM6Ly9yZXMueGlhb3FpbnJlLmNvbS9pbWFnZXMvY29taWMvNzI3LzE0NTIzMDAvMTYwODUzMTM4OElYVkkzcndiSy1KdW1iVHYuanBn

https://res.xiaoqinre.com/images/comic/727/1452300/1608531406jAcnUYGl_yZPq6nj.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/16085314068NKGT0uxuCbdCqq_.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531405Ku2GS7d-K894hj8Q.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/16085314043KywRczG3rjIXw53.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531403_Fzrt-v2c_p9AmcZ.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531403bUsab8MK7aW8EbCZ.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531402vI05mSFU6JegB0v4.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531401PtAbfU_4NGidd67C.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531401l6gjGAWQEZvRn2f2.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531400MPchooZXypxYGa-d.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/160853139900y_6C_0I1xZFnD4.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531399cT39jx6e1nX5Iu17.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531398dtgv0HJC_HZrrVoW.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531397HOlqopb0XCbtOVht.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531396QXxuymtwEElGGTTv.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531396xDDBDsq1mm_gkJGw.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531395p1zqJIjT4ZJBMF3z.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531389I6nkBjL2WSfw-vv5.jpg$qingtiandy$https://res.xiaoqinre.com/images/comic/727/1452300/1608531388IXVI3rwbK-JumbTv.jpg


*/