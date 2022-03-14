---
title: 我的书单
permalink: /booklist
# sidebar: false
---
## 我的书单
<Book v-for="(item,index) in books" :key="index" :book="item" />

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