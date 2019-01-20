## Welcome to GitHub Pages
针对一些特别恶心的网站
在这里，你可以获取我的所有脚本。



### 悟空追书

悟空追书界面重构，并添加拼页功能。


website:
```markdown
m.wukongzhuishu.com
```
code:
```markdown
/*悟空追书界面重构*/
var wkzs_script = document.createElement("script");
wkzs_script.type = "text/javascript";
wkzs_script.src="https://caojiale233.github.io/js/wkzs.js";
document.body.appendChild(wkzs_script);
```
###VIP视频解析
调用其他网站接口来解析各大视频网站资源，资源界面可能会含有大量广告，并且视频内也会有部分广告(解析网站的广告)

website:
```markdown
*
```
code:
```markdown
/*vip视频解析*/
var video_script = document.createElement("script"); 
video_script.type = "text/javascript"; 
video_script.src="https://caojiale233.github.io/js/video.js"; 
document.body.appendChild(video_script);
```
