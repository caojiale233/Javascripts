## Welcome to GitHub Pages 
## >> ToolJS
通过注入脚本来修改一些网页
手机上只测试了via浏览器
### VIP视频解析(暂时停工)
调用其他网站接口来解析各大视频网站资源，资源界面可能会含有大量广告，并且视频内也会有部分广告(解析网站的广告)，同时需要配合带资源嗅探功能的浏览器使用。

未完成工作：直接从全是广告的解析界面中抽出视频链接；判断是否已调用，避免重复被调用。
website:
```markdown
全部网站
```
code:
```markdown
/*vip视频解析*/
var video_script = document.createElement("script"); 
video_script.type = "text/javascript"; 
video_script.src="https://caojiale233.github.io/ToolJS/js/video.js"; 
document.body.appendChild(video_script);
/*end*/
```
----
----
### 百度重定向加除广告(年久失修)
去除百度搜索结果中的推广广告

自动添加-baijiahao搜索规则并重定向至简版百度

(太久没测试，我也不知道有没有失效)

website:
```markdown
全部网页/m.baidu.com
```
code:
```markdown
/*百度重定向*/
var baidu_script = document.createElement("script"); 
baidu_script.type = "text/javascript"; 
baidu_script.src="https://caojiale233.github.io/ToolJS/js/baidu.js"; 
document.body.appendChild(baidu_script);
/*end*/
```
----
----
### 百度云电脑界面适配手机（年久失修）
百度云的电脑版界面有更多的功能
此脚本修改样式达到适配手机的效果
但是不能下载东西 电脑模式下网站会调用电脑的百度云下载(结果当然是什么也没调用到)

website:
```markdown
pan.baidu.com
```
code:
```markdown
/*百度云界面修改*/
var bdy_script = document.createElement("script"); 
bdy_script.type = "text/javascript"; 
bdy_script.src="https://caojiale233.github.io/ToolJS/js/baiduNetdisk.js"; 
document.body.appendChild(bdy_script);
/*end*/
```
----
----
### HUT教务系统修改
HUT的强智教务系统大致能适配手机
并增加记住密码和记住账号功能，省得重复输入

website:
```markdown
一串ip地址
```
code:
```markdown
/*强智教务系统*/
var hut_script = document.createElement("script"); 
hut_script.type = "text/javascript"; 
hut_script.src="https://caojiale233.github.io/ToolJS/js/hut.js"; 
document.body.appendChild(hut_script);
/*end*/
```
----
----
### 超星尔雅平台慕课(已废，等下学期重做)
自动播放下一个视频
通过覆盖视频避免触发鼠标事件，达到移出鼠标不暂停的效果
自动答题功能正在完善，暂时不可用，但是使用新添加的播放键可无视题目直接继续播放
纯手工刷课，不会产生不良记录

website:
```markdown
例:mooc1.hut.edu.cn
不同学校域名可能不同
```
code:
```markdown
/*学习通刷课*/
var chaoxing_script = document.createElement("script"); 
chaoxing_script.type = "text/javascript"; 
chaoxing_script.src="https://caojiale233.github.io/ToolJS/js/chaoxingMOOC.js"; 
document.body.appendChild(chaoxing_script);
/*end*/
```
----
----
### 来漫画
来漫画整章滚动阅读
重构界面
广告部分祛除

website:
```markdown
m.laimanhua.com
```
code:
```markdown
/*来漫画*/
 var laimanhua_script = document.createElement("script");
 laimanhua_script.type = "text/javascript";
 laimanhua_script.src="https://caojiale233.github.io/ToolJS/js/laimanhua.js";
 setTimeout("document.body.appendChild(laimanhua_script)",1000);
 /*end*/
```
----
----
### 知音漫客
整章滚动阅读
重构界面
没有vip这种东西了

website:
```markdown
m.zymk.cn
```
code:
```markdown
/*知音漫客*/
var zymk_script = document.createElement("script");
zymk_script.type = "text/javascript";
zymk_script.src="https://caojiale233.github.io/ToolJS/js/zymk.js";
document.body.appendChild(zymk_script);
/*end*/
```

