<template>
    <div class="card">
        <div class="title">
            <a :href="info.url">{{info.title}}</a>
        </div>
        <div class="tag">
            <span><i class="iconfont icon-zuozhe"></i> {{info.author}}</span>
            <span v-if="info.data"><i class="iconfont icon-24gl-calendar"></i> {{info.date}}</span>
            <span><i class="iconfont icon-24gl-tags"></i> {{info.tag}}</span>
        </div>
        <hr v-if="info.content">
        <p v-if="info.content">
            {{info.content}}
        </p>
        <p v-if="info.content" class="all">
            <a href="info.url">阅读全文 ></a>
        </p>
    </div>
</template>

<script>
    export default {
        props:["info"]
    }
</script>

<style lang="stylus" scoped>
.card{
    background-color: #fff;
    margin-bottom: 10px;
    padding: 1.2rem
    border-radius: 4px;
    opacity: 0.9
    .title{
        font-size: 1.5rem;
        margin-bottom: 10px
        font-font-weight: 600
        a{
            color: #000
            text-decoration: none;
            &:hover{
                color: $accentColor
            }
        }
    }
    .tag{
        font-size: 0.8rem
        span{
            margin-right: 1rem;
        }
    }
    .all{
        text-align: right 
        color: #6ad8d5
        margin-bottom: 0
    }
}
</style>