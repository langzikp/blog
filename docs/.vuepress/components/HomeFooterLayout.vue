<template>
    <div class="footer">
        <div class="info">
            <a href="mailto:819750949@qq.com" target="blank"><i class="iconfont icon-a-youjianchakanyoujianfasongyoujianshouyoujian-06"></i></a>
            <a href="https://github.com/" target="blank"><i class="iconfont icon-github"></i></a>
            <a href="https://music.163.com/" target="blank"><i class="iconfont icon-erji"></i></a>
        </div>
        <div>This is my blog for recording and learning| Copyright © 2019-2022 Lang Nie | MIT License</div>
    </div>
</template>

<script>
    export default {
        name: "HomeFooterLayout",
    }
</script>

<style lang="stylus" scoped>
    .footer{
        text-align: center;
        fon-size: .85rem
        padding-top: 50px;
        padding-bottom: 50px;
        a{
                        
            color: #666;
            fon-size: .85rem
            .iconfont{
                opacity: .9
                font-size: 1.1rem;
            }
        }
    }
      
</style>