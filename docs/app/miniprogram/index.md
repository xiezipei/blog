# 微信小程序

## 小程序获取用户昵称和头像

> 参考：https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01

通过 `wx.getUserInfo()` 接口已不支持返回用户头像和昵称，目前微信平台会统一返回默认灰色头像，昵称统一返回“微信用户”

当小程序需要让用户完善个人资料时，可以通过微信提供的头像昵称填写能力快速完善:

https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html

![](https://s1.mintiny.com/bhtc328/i/2024/02/19/a5hv.png)
