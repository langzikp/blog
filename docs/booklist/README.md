---
title: 我的书单
permalink: /booklist
sidebar: false
---
## 我的书单
<Book v-for="item in books" :key="item.id" :book="item" />

<script>
const books = require('../.vuepress/configs/booklist')
export default {
    data(){
        return {
            books:books
        }
    }
};
</script>