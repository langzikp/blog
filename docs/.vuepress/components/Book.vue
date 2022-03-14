<template>
  <div class="book">
    <img :src="$withBase(book.imgurl)" alt="图片" />
    <div class="content">
      <p class="name">{{ book.name }}</p>
      <p class="description">{{ book.description }}</p>
      <p class="date">{{ book.date }}</p>
    </div>
    <i class="iconfont icon-tuijianjiaobiao" v-if="book.isRecommend"></i>
  </div>
</template>
    

<script>
export default {
  props: ["book"],
  data() {
    return {
      // book:{
      //     imgurl: '/img/books/1.png',
      //     name: 'JavaScript高级程序设计',
      //     description: '这是一半前端工程师必看的书，一本值得二刷的书',
      //     date: '2020-3-25'
      // }
    };
  },
};
</script>

<style lang="stylus" scoped>
.book {
  display: flex;
  /* justify-content: space-around; */
  border: 1px solid #ccc;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  img {
    width: 120px;
    height: 120px;
    margin: 10px;
    background-image: linear-gradient(
        90deg,
        rgba(180, 180, 180, 0.15) 10%,
        rgba(0, 0, 0, 0) 10%
      ),
      linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 10px 10px;
    // width: 600px;
    // height: 300px;
  }
  .iconfont{
    position: absolute;
    right: 0;
    font-size: 2.5rem;
    color: $accentColor;
  }
}

.content {
  flex: 1;
  padding-right: 50px;
}
.book .name {
  font-size: 1.1rem;
  font-weight: 600;
}
.book .date {
  font-size: 0.8rem;
  color: #999;
  text-align: right;
}
</style>