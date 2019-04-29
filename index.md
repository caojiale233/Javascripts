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
/*end*/
```
----
----
### VIP视频解析(未完工)
调用其他网站接口来解析各大视频网站资源，资源界面可能会含有大量广告，并且视频内也会有部分广告(解析网站的广告)

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
### 百度重定向加除广告
去除百度搜索结果中的推广广告

自动添加-baijiahao搜索规则并重定向至简版百度

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
### 百度云电脑界面适配手机
百度云的电脑版界面有更多的功能
此脚本修改样式达到适配手机的效果
但是不能下载东西 因为电脑模式下载默认调用电脑上的百度云

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
### HUT教务系统适配手机
HUT的强智教务系统适配手机
并增加记住密码和记住账号功能

website:
```markdown
一串ip地址
```
code:
```markdown
/*废物强智教务系统*/
var hut_script = document.createElement("script"); 
hut_script.type = "text/javascript"; 
hut_script.src="https://caojiale233.github.io/ToolJS/js/hut.js"; 
document.body.appendChild(hut_script);
/*end*/
```
----
----
### 超星尔雅平台慕课
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
广告未去除

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
document.body.appendChild(laimanhua_script);
/*end*/
```
