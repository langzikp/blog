# 小程序上线准备

### 注册小程序
- 第一种：直接平台注册
- 第二种：通过已有公众号快速关联注册（如果有认证的公众号，建议优先使用快速关联注册。）  
[微信公众平台](https://mp.weixin.qq.com/)  
[小程序注册指引](https://developers.weixin.qq.com/community/business/doc/000200772f81508894e94ec965180d)

### 选择服务类目
根据小程序商城经营性质，选择对应的服务类目，如需相关的资质证书，请提前准备。

### 小程序对接后端接口
- 准备好备案域名
- 准备SSL证书（小程序网络请求需要HTTPS协议，需要SSL证书进行部署，阿里云等有免费的可用）

**提前搭建好接口测试环境，进行接口对接联调**

### 与微信相关的API
1. [小程序支付](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_0.shtml)  
可选**直连模式**或**服务商模式**

2. [接口调用凭证](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html)

3. [小程序登录API](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)  
> 新用户：  
> 小程序端wx.login获取code--》后端解析获取openid--》通过openid检查数据库，**没有关联的会员**--》返回前台openid--》前台就会走注册流程


> 老用户：  
> 小程序端wx.login获取code--》后端解析openid--》通过openid检查数据库，**有关联的会员**--》返回前台token及会员资料

4. [获取手机号](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html)  

5. [获取小程序码](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getUnlimitedQRCode.html)  
生成商品分享图会用

6. [获取 Short Link](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/short-link/generateShortLink.html)  
生成商品分享链接用