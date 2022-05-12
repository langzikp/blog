# 微信公众号H5配置流程
> 会员关注企业公众号时，微信会生成一个oppenid，将oppenid与会员绑定，则可利用其完成会员自动登录，减少每次登录输入账号密码的麻烦；同时利用oppenid可以给指定会员推送消息，如积分变动，电子券使用等，而为了获取oppenid则需要完成以下配置  
  
> 公众号应为已认证的服务号

- 示例：会员系统以及会员H5所在服务器域名为：www.abacus.com

### 1.	登录微信公众平台https://mp.weixin.qq.com，获取公众号AppId和AppSecret，设置IP白名单
登录地址：  [微信公众平台](https://mp.weixin.qq.com/)  
<img :src="$withBase('/img/wechat/1.png')" alt="图片">  
<img :src="$withBase('/img/wechat/2.png')" alt="图片">  
**注意**：1.AppSecret请妥善保存（后面要用），为保障帐号安全，公众平台不再储存AppSecret；如果遗忘，请重置。  

### 2.	IP白名单设置的ip为www.abacus.com对应ip。
<img :src="$withBase('/img/wechat/3.png')" alt="图片">  
<img :src="$withBase('/img/wechat/4.png')" alt="图片"> 

**注意**：如果需要使用扫码赠券功能，需要利用微信接口唤起摄像头，需配置JS接口安全域名为www.abacus.com。  

### 3.在后台系统中配置第1步获取的appid和secret
老项目：  
在sms系统管理中或abacus.properties配置文件中设置参数：mbr.weixin.appid和mbr.weixin.secret。  

新项目：  
在acas权限管理中配置，分为 集团会员 和 非集团会员 两种情况。  

可根据配置文件参数mbr.useManafirm来判断；设置为true，使用集团账户，默认为false。  
项目为非集团会员时配置：   

<img :src="$withBase('/img/wechat/5.png')" alt="图片">  
为集团会员时配置：  

<img :src="$withBase('/img/wechat/6.png')" alt="图片"> 
<img :src="$withBase('/img/wechat/7.png')" alt="图片"> 

### 4.生成登录地址:将以下链接中的APPID和 REDIRECT_URI 替换为对应的APPID和域名www.abacus.com即可。
https://open.weixin.qq.com/connect/oauth2/authorize?appid=**APPID**&redirect_uri=http%3a%2f%2f**REDIRECT_URI**%2fmember%2fapp%2fbasic%2fweixinCodeLogin&response_type=%20code&scope=snsapi_userinfo&state=200&connect_redirect=1#wechat_redirect  
 
### 5.将4中拼接而成的地址，配置到公众号菜单  


<img :src="$withBase('/img/wechat/8.png')" alt="图片"> 

**完成以上，即可使用公众号登录会员H5。**  

## 注意：<Badge text="注意"/>
1. 第**4**完成后，可将链接拷贝至微信，看能否正常跳转到会员H5，再绑定第**5**步，减少重复修改  
2. 加载图片验证码时可能出错
<img :src="$withBase('/img/wechat/9.png')" alt="图片"> 
原因是生成图片需要在Headless模式下，在会员系统tomcat/bin/catalina.sh文件中
在所有类似以下代码：  
    "$_RUNJAVA" $JAVA_OPTS $CATALINA_OPTS \  
      -Djava.endorsed.dirs="$JAVA_ENDORSED_DIRS" -classpath "$CLASSPATH" \  
      -Djava.security.manager \  
      -Djava.security.policy=="$CATALINA_BASE"/conf/catalina.policy \  
      -Dcatalina.base="$CATALINA_BASE" \  
      -Dcatalina.home="$CATALINA_HOME" \  
      -Djava.io.tmpdir="$CATALINA_TMPDIR" \  
 
在尾部加上一句： 
      -Djava.awt.headless=true \  
 
修改后内容如下：  
    exec "$_RUNJAVA" $JAVA_OPTS $CATALINA_OPTS \  
      -Djava.endorsed.dirs="$JAVA_ENDORSED_DIRS" -classpath "$CLASSPATH" \  
      -Dcatalina.base="$CATALINA_BASE" \  
      -Dcatalina.home="$CATALINA_HOME" \  
      -Djava.io.tmpdir="$CATALINA_TMPDIR" \  
      -Djava.awt.headless=true \  
 
以tomcat6.0为例，总共有七处这样的地方。然后重启tomcat服务器  
3. 可在 wechat/js/config/abacus-basic-config.js中修改项目名称，公司logo,幻灯片，推送广告等。  
4. 部分机型使用附近门店获取定位不精确的情况，其原因如下：
<img :src="$withBase('/img/wechat/10.png')" alt="图片"> 

