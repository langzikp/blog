(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{606:function(v,_,t){"use strict";t.r(_);var l=t(34),s=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"ssl、tls、https的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl、tls、https的关系"}},[v._v("#")]),v._v(" SSL、TLS、HTTPS的关系")]),v._v(" "),t("p",[v._v("SSL（Secure Sockets Layer），安全套接字协议")]),v._v(" "),t("p",[v._v("TLS（Transport Layer Security），传输层安全性协议")]),v._v(" "),t("p",[t("strong",[v._v("TLS是SSL的升级版，两者几乎是一样的")])]),v._v(" "),t("p",[v._v("HTTPS（Hyper Text Transfer Protocol over SecureSocket Layer），建立在SSL协议之上的HTTP协议")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://mdrs.yuanjin.tech/img/20211025160927.png",alt:"image-20200501084258712"}})]),v._v(" "),t("h1",{attrs:{id:"面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[v._v("#")]),v._v(" 面试题")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("介绍下 HTTPS 中间人攻击")]),v._v(" "),t("blockquote",[t("p",[v._v("参考答案：")]),v._v(" "),t("p",[v._v("针对 HTTPS 攻击主要有 SSL 劫持攻击和 SSL 剥离攻击两种。")]),v._v(" "),t("p",[t("strong",[v._v("SSL 劫持攻击")]),v._v("是指攻击者劫持了客户端和服务器之间的连接，将服务器的合法证书替换为伪造的证书，从而获取客户端和服务器之间传递的信息。这种方式一般容易被用户发现，浏览器会明确的提示证书错误，但某些用户安全意识不强，可能会点击继续浏览，从而达到攻击目的。")]),v._v(" "),t("p",[t("strong",[v._v("SSL 剥离攻击")]),v._v("是指攻击者劫持了客户端和服务器之间的连接，攻击者保持自己和服务器之间的 HTTPS 连接，但发送给客户端普通的 HTTP 连接，由于 HTTP 连接是明文传输的，即可获取客户端传输的所有明文数据。")])])]),v._v(" "),t("li",[t("p",[v._v("介绍 HTTPS 握手过程")]),v._v(" "),t("blockquote",[t("p",[v._v("参考答案：")]),v._v(" "),t("ol",[t("li",[v._v("客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息")]),v._v(" "),t("li",[v._v("服务器响应公钥和服务器证书")]),v._v(" "),t("li",[v._v("客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器")]),v._v(" "),t("li",[v._v("服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪")]),v._v(" "),t("li",[v._v("客户端使用会话密钥解密消息，知道了服务器已经准备就绪。")]),v._v(" "),t("li",[v._v("后续客户端和服务器使用会话密钥加密信息传递消息")])])])]),v._v(" "),t("li",[t("p",[v._v("HTTPS 握手过程中，客户端如何验证证书的合法性")]),v._v(" "),t("blockquote",[t("p",[v._v("参考答案：")]),v._v(" "),t("ol",[t("li",[v._v("校验证书的颁发机构是否受客户端信任。")]),v._v(" "),t("li",[v._v("通过 CRL 或 OCSP 的方式校验证书是否被吊销。")]),v._v(" "),t("li",[v._v("对比系统时间，校验证书是否在有效期内。")]),v._v(" "),t("li",[v._v("通过校验对方是否存在证书的私钥，判断证书的网站域名是否与证书颁发的域名一致。")])])])]),v._v(" "),t("li",[t("p",[v._v("阐述 https 验证身份也就是 TSL/SSL 身份验证的过程")]),v._v(" "),t("blockquote",[t("p",[v._v("参考答案：")]),v._v(" "),t("ol",[t("li",[v._v("客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息")]),v._v(" "),t("li",[v._v("服务器响应公钥和服务器证书")]),v._v(" "),t("li",[v._v("客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器")]),v._v(" "),t("li",[v._v("服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪")]),v._v(" "),t("li",[v._v("客户端使用会话密钥解密消息，知道了服务器已经准备就绪。")]),v._v(" "),t("li",[v._v("后续客户端和服务器使用会话密钥加密信息传递消息")])])])]),v._v(" "),t("li",[t("p",[v._v("为什么需要 CA 机构对证书签名")]),v._v(" "),t("blockquote",[t("p",[v._v("主要是为了解决证书的可信问题。如果没有权威机构对证书进行签名，客户端就无法知晓证书是否是伪造的，从而增加了中间人攻击的风险，https 就变得毫无意义。")])])]),v._v(" "),t("li",[t("p",[v._v("如何劫持 https 的请求，提供思路")]),v._v(" "),t("blockquote",[t("p",[v._v("https 有防篡改的特点，只要浏览器证书验证过程是正确的，很难在用户不察觉的情况下进行攻击。但若能够更改浏览器的证书验证过程，便有机会实现 https 中间人攻击。")]),v._v(" "),t("p",[v._v("所以，要劫持 https，首先要伪造一个证书，并且要想办法让用户信任这个证书，可以有多种方式，比如病毒、恶意软件、诱导等。一旦证书被信任后，就可以利用普通中间人攻击的方式，使用伪造的证书进行攻击。")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);