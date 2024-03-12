---
title: 简历
permalink: /about/resume
sidebar: false
navbar: false
---

<style scoped>

       *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            color: #333;
        }
        .theme-default-content:not(.custom){
            padding: 0 120px !important;
            max-width: none !important;
            margin: none !important;
            position: relative;
            z-index: 5;
        }
        .bell{
            position: fixed;
            right: 10%;
            top: 0;
            z-index: 20;
            transform-origin: top center;
            animation: swing 0.5s infinite ease-in-out alternate;
            margin-top: 0 !important;
        }
        @keyframes swing {
            from{
                transform: rotate(45deg);
            }
            to{
                transform: rotate(-45deg);
            }
        }
        .container{
            width: 800px;
            margin: 50px auto;
            box-shadow:  0 0 5px rgba(0,0,0,0.5);
            border-radius: 20px;
            position: relative;
            background-color: #fff;
            padding: 50px;
            font-size: 14px;
        }
        .container::before{
            content: '';
            width: 100%;
            height: 100%;
            background-color: red;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 20px;
            transform: rotate(-3deg);
            z-index: -1;
            background: linear-gradient(to right, #22d3ee, #0ea5e9);
        }

        .personal-info-wrap{
            display: flex;
            justify-content: space-between;
        }
        .personal-info-wrap .info{
            display: grid;
            grid-template-columns: 30px 250px 70px 1fr;
            align-items: center;
            column-gap: 20px;
        }

        .personal-info-wrap .avatar{
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
        }

        .info .name{
            grid-area: 1/1/2/5;
            font-size: 2em;
            letter-spacing: 5px;
        }
        .info .job{
            font-size: 1rem;
            margin-left: 20px;
        }
        .info .label{
            justify-self: right;
            color: #888;
        }

       
        .content-wrap .title{
            margin-top: 0 !important;
            padding-top: 30px !important;
            font-size: 1.5em;
            border-bottom: 1px solid #f4f4f4;
        }

        .content-list {
            padding-top: 20px;
            position: relative;
            font-size: 14px;
        }

        .content-list::before{
            content: '';
            width: 2px;
            height: 100%;
            background-color: #0ea5e9;
            position: absolute;
        }
        .content-list .item{
            margin: 2em 0;
            padding-left: 30px;
            position: relative;
        }
        .content-list .item::before{
            content: '';
            width: 15px;
            height: 15px;
            background-color: #0ea5e9;
            border-radius: 50%;
            position: absolute;
            left: -7px;
            top: 2px;
        }
        .content-list .item .date{
            color: #999;
            margin-right: 10px;
        }
        .content-list .item .desc{
            color: #999;
            margin-left: 10px;
        }
        .content-list .item .name{
            margin-left: 20px;
        }

        .content-list .content{
            color: #999 !important;
            margin-top: 1em;
            padding-left: 2em;
        }
        .content-list .skill-list {
            margin-top: 1em;
            padding-left: 2em;
            padding-left: 30px;
            text-indent: 1.5em;
        }
        /* .content-list .skill-list li{
            color: #999;
        } */


        .project-list{
            display: grid;
            grid-template-columns: 60px 1fr;
            grid-gap: 20px;
        }
        .project-list .name{
            grid-area: 1/1/2/3;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 600;
        }
        .project-list .label{
            color: #888;
            justify-self: right;
            line-height: 2;
        }

        .project-list a{
            color: #0ea5e9;
            text-decoration: none;
        }
        .project-list .desc{
            line-height: 2;
        }

        .intro{
            margin-top: 20px;
            line-height: 2;
            padding-left: 2em;
        }

    </style>
<!-- <img class="bell" :src="$withBase('/img/about/bell.png')" > -->
<div class="container">
<div class="personal-info-wrap">
    <div class="info">
        <h2 class="name">聂浪<span class="job">Web前端工程师</span></h2>
        <div class="label">电话</div>
        <div>13056694096</div>
        <div class="label">学历</div>
        <div>本科</div>
        <div class="label">邮箱</div>
        <div>819750949@qq.com</div>
        <div class="label">年龄</div>
        <div>30</div>
        <div class="label">博客</div>
        <div><a href="https://langzikp.gitee.io/blog/" target="_blank">Lang's blog</a></div>
        <div class="label">开发经验</div>
        <div>9年</div>
    </div>
    <img class="avatar" :src="$withBase('/img/about/me.jpg')" >
</div>

<div class="content-wrap">
<h2 class="title">专业技能</h2>
<div class="content-list">
    <div class="item">
        <div> 前端基础能力 </div>
        <ui class="skill-list">
            <li>熟练掌握 HTML5、CSS3、JavaScript（含 ES6+）；</li>
            <li>深入理解原型原型链、异步、作用域链、闭包、垃圾回收、事件循环等 JS 核心原理；</li>
            <li>深入理解浏览器的工作原理。</li>
        </ui>
    </div>
                
<div class="item">
    <div> 工程化  </div>

<ui class="skill-list">
    <li>深入理解模块化，能熟练使用 CommonJS、ES Module 模块化标准完成分模块开发；</li>
    <li>熟练使用 npm、yarn，深入理解 webpack 原理；</li>
    <li>熟练配置 babel、postcss、eslint 等前端常见工具链；</li>
    <li>熟练使用 TypeScript，熟练使用 less、scss。</li>
</ui>
</div>
<div class="item">
    <div>框架</div>
    <ui class="skill-list">
        <li>熟练使用 vue2、vue3、vue-router、vuex、element-ui 等技术完成单页应用，深入理解 vue 原理；</li>
        <li>熟练使用 uniapp多端框架完成多端应用； </li>
        <li>熟练开发微信小程序。</li>
    </ui>
</div>
<div class="item">
    <div>服务器</div>
    <ui class="skill-list">
        <li>能使用 node、express、koa、egg.js 等技术开发服务器程序；</li>
        <li>了解 mysql、mongodb、redis 数据库； </li>
        <li>了解JAVA开发流程，Nginx部署。</li>
    </ui>
</div>
<div class="item">
    <div>网络</div>
    <ui class="skill-list">
        <li>熟悉网络通信，并深入理解 HTTP、HTTP2、HTTPS、WebSocket 等常见应用层协议；</li>
        <li>熟练使用 postman 或 apifox 进行接口调试； </li>
        <li>熟练使用 AJAX 的 XHR 和 Fetch API 完成前后端通信；</li>
        <li>熟悉 JWT、CORS、HTTP Cache、cookie、XSS、CSRF 等网络中常见的应用和安全相关技术；</li>
        <li>能利用网络实现文件上传、分片、鉴权、缓存等各种网络应用需求。</li>
    </ui>
</div>
<div class="item">
    <div>效率和工具</div>
    <ui class="skill-list">
        <li>熟练掌握诸多常用第三方库，包括：jquery、lodash、mockjs、axios、moment、echart、animate.css、 validate.js 等；</li>
        <li>了解D3.js，webGL，three.js等可视化技术；</li>
        <li>熟练使用 git，svn； </li>
        <li>熟练使用 VScode、HBuilder X。</li>
    </ui>
</div>
</div>
</div>

<div class="content-wrap">
<h2 class="title">工作经验</h2>
<div class="content-list">
<div class="item">
    <div>
        <span class="date">2018.04 ~ 2024.02</span> 
        <span class="name">四川奥博克软件有限公司</span>
        <span class="desc">Web前端工程师-组长</span>
    </div>

<p class="content">
    1. 负责公司产品 PC 、移动端H5、小程序的开发和维护；<br />
    2. 参与复杂需求分析，和产品、后端制定技术方案；<br />
    3. 参与前端技术选型及相关技术攻关；<br />
    4. 参与前端框架搭建设计及基础组件开发；<br />
    5. 负责前端项目研发进度把控，积极推进项目落地。<br />

</p>
</div>

<div class="item">
    <div>
        <span class="date">2017.05 ~ 2018.03</span> 
        <span class="name">四川奥博克软件有限公司</span>
        <span class="desc">JAVA开发工程师</span>
    </div>

<p class="content">
    1. 参与项目需求分析，参与研发设计文档的撰写；<br />
    2. 负责会员系统，精准营销系统，医保子系统的研发；<br />
    3. 负责相应系统的接口开发，输出标准接口文档；<br />
    4. 负责相应系统的部署和维护，并积极优化产品。<br />

</p>
</div>
<div class="item">
    <div>
        <span class="date">2015.08 ~ 2017.04</span> 
        <span class="name">成都森翔文化传播有限公司</span>
        <span class="desc">JAVA开发工程师</span>
    </div>

<p class="content">
    1. 参与相关项目需求分析，跟UI确认交互页面；<br />
    2. 参与网站建设与后台管理系统的开发。 <br />

</p>
</div>
</div>
</div>

<div class="content-wrap">
<h2 class="title">项目经验</h2>
<div class="project-list">
<div class="name">华致酒行</div>
<div class="label">项目描述</div>
<div class="desc">
    本项目为华致酒行提供分销系统，帮助企业进行客户，商品，库存，采购，分销，权益，物流码，销售结算等进行管理。项目包含后台管理系统，客户管理H5，客户开单H5，金蕊战役H5，品鉴会H5，智慧仓库App等应用。
</div>
<div class="label">技术栈</div>
<div class="desc">
    vue3全家桶（后台管理系统）+ uniapp（H5）
</div>
<div class="label">工作内容</div>
<div class="desc">
    <p>1. 参与系统的需求分析，方案设计，以及项目框架搭建； </p>
    <p>2. 负责与后端沟通，确定REST API文档</p>
    <p>3. 负责后台管理系统中税票中心子系统开发； </p>
    <p>4. 负责移动端客户管理，客户开单，智慧仓库App开发； </p>
    <p>5. 对接百度OCR，百度地图，ECharts图表，完成相关业务；</p>
    <p>6. 参与团队的沟通协调，把握前端开发进度，按时保质完成分配的任务。</p>

</div>
</div>

<div class="project-list">
<div class="name">六合正同智慧工会</div>
<div class="label">项目描述</div>
<div class="desc">
    本项目旨在为企业工会赋能，提供工会组织管理，会费管理，活动管理，问卷投票，本地生活，工会圈，积分福利商城等服务。项目包含后台管理系统，智慧工会小程序，福利商城小程序。
</div>
<div class="label">技术栈</div>
<div class="desc">
    vue2全家桶（后台管理系统）+ uniapp（小程序）
</div>
<div class="label">工作内容</div>
<div class="desc">
    <p>1. 参与系统的需求分析，方案设计，以及项目框架搭建； </p>
    <p>2. 负责与后端沟通，确定REST API文档</p>
    <p>3. 负责后台管理工会圈，活动管理，费用管理等核心模块开发； </p>
    <p>4. 负责智慧工会小程序，福利商城小程序，工会圈，活动管理，费用管理等核心模块开发；</p>
    <p>5. 负责优化前端体验和页面响应速度，提升用户体验；</p>
    <p>6. 负责后台管理系统部署及小程序的发布。</p>

</div>
</div>
<div class="project-list">
<div class="name">管清楚SasS平台</div>
<div class="label">项目描述</div>
<div class="desc">
    本项目为建筑行业管理Sass平台，覆盖建筑管理全过程，包含招投标管理，项目管理，合同管理，现场进展，质量安全管理，供应商管理，劳务管理，项目收付管理，发票管理，人员及证书管理，审批管理等业务。项目包含后台管理系统，微信小程序和钉钉H5应用。
</div>
<div class="label">技术栈</div>
<div class="desc">
    vue2全家桶（后台管理系统）+ uniapp（小程序 + H5）
</div>
<div class="label">工作内容</div>
<div class="desc">
    <p>1. 参与系统的需求分析，与产品沟通确定交互方案；</p>
    <p>2. 负责后台管理系统的维护和迭代，微信小程序和钉钉H5的开发； </p>
    <p>3. 负责后台管理系统，小程序，钉钉H5应用的上线发布。 </p>
</div>
</div>
<div class="project-list">
<div class="name">陕西交控集团</div>
<div class="label">项目描述</div>
<div class="desc">
    本项目为陕西交控集团旗下80+服务区，近2000+门店提供收银及会员管理系统，项目包含后台管理系统，双屏点餐系统，自助收银系统，移动报表H5等应用。 
</div>
<div class="label">技术栈</div>
<div class="desc">
    jQuery + Bootstrap（后台管理系统）+ uniapp（H5）
</div>
<div class="label">工作内容</div>
<div class="desc">
    <p>1. 参与系统的需求分析，方案设计，以及项目框架搭建；</p>
    <p>2. 负责双屏点餐系统，自助收银系统，移动报表H5开发； </p>
    <p>3. 参与设备硬件相关对接，如pos打印机，标签打印机等； </p>
    <p>4. 负责产品在第三方应用市场的上线发布。 </p>
</div>
</div>
<div class="project-list">
<div class="name">SaaS商城平台</div>
<div class="label">项目描述</div>
<div class="desc">
    本项目是为中小客户提供的小店平台，基于微信第三方平台，帮助用户快速上线小程序商城。项目包含商户后台管理系统，云商城后台管理系统，微信小程序模板。
</div>
<div class="label">技术栈</div>
<div class="desc">
    vue2（后台管理系统）+ 微信小程序
</div>
<div class="label">工作内容</div>
<div class="desc">
    <p>1. 参与系统的需求分析，需求设计，以及项目框架搭建；</p>
    <p>2. 负责商城小程序模板开发 ，商户后台管理系统中小程序管理模块开发； </p>
    <p>3. 负责客户小程序上线管理。 </p>
</div> 
</div>

<div class="project-list">
<div class="name">新华百货</div>
<div class="label">项目描述</div>
<div class="desc">
    本项目为新华百货提供百货行业解决方案，帮助客户进行线下销售。项目包含 CRM  后台管理系统，餐饮后台管理系统，双屏点餐系统，Pad  点餐 App ，智慧门店，手持收银 pos 等应用。
</div>
<div class="label">技术栈</div>
<div class="desc">
    jQuery + Bootstrap （后台管理系统）+ jQuery+ Framework7（H5）
</div>
<div class="label">工作内容</div>
<div class="desc">
    <p>1. 负责双屏点餐系统，Pad点餐App的开发，包含桌餐，堂餐，预订，日结，退款等业务的开发；</p>
    <p>2. 参与设备硬件相关对接，支付宝扫脸支付，pos打印，厨房打印等； </p>
    <p>3. 负责产品在第三方应用市场的上线发布。 </p>
</div>
</div>
</div>

<div class="content-wrap">
<h2 class="title">教育经历</h2>
<div class="content-list">
<div class="item">
    <span class="date">2011 ~ 2015</span> 
    <span class="name">成都理工大学工程技术学院</span>
    <span class="desc">热能与动力工程</span>
    <span class="name">本科</span>
</div>
</div>
</div>

<div class="content-wrap">
    <h2 class="title">个人优势</h2>
        
<ul class="intro">
    <li>具备七年丰富的前端开发经验，成功主导并落地多个从0到1的完整项目 ；</li>
    <li>有8人团队管理经验，能够高效带领团队，推动项目进展；</li>
    <li>非常强的自驱力和责任感，愿意对自己的产品负责；</li>
    <li>热爱技术， 持续性地学习、总结，组织多次团队内技术分享，能够将个人学习和研究的成果应用到实际工作中，为团队带来创新和价值；</li>
    <li>了解java / node后端开发流程，有后端项目开发经验。</li>
</ul>

</div>

</div>
