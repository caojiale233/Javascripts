## Welcome to GitHub Pages 
## >> ToolJS
通过注入脚本来修改一些网页
只测试了via浏览器
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
wkzs_script.src="https://caojiale233.github.io/ToolJS/js/wkzs.js";
document.body.appendChild(wkzs_script);
```
----
----
### VIP视频解析(未完工)
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
video_script.src="https://caojiale233.github.io/ToolJS/js/video.js"; 
document.body.appendChild(video_script);
```
### 百度重定向加除广告
去除百度搜索结果中的推广广告

自动添加-baijiahao搜索规则并重定向至简版百度

website:
```markdown
baidu.com
```
code:
```markdown
var baidu_script = document.createElement("script"); 
baidu_script.type = "text/javascript"; 
baidu_script.src="https://caojiale233.github.io/Javascripts/js/baidu.js"; 
document.body.appendChild(baidu_script);
```
### HUT教务系统适配手机
HUT的强智教务系统适配手机
并增加记住密码和记住账号功能

website:
```markdown
一串ip地址
```
code:
```markdown
var hut_script = document.createElement("script"); 
hut_script.type = "text/javascript"; 
hut_script.src="https://caojiale233.github.io/ToolJS/js/hut.js"; 
document.body.appendChild(hut_script);
```
