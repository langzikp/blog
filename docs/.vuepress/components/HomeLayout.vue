<template>
  <main
    class="home" :style="bgStyle"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  > 
  
    <div class="operation">
      <div class="btn1" :class="{active: status==1}" @click="updateStatus('1')">1</div>
      <div class="btn2" :class="{active: status==2}" @click="updateStatus('2')">2</div>
    </div>
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      />

      <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || "Hello" }}
      </h1>

      <p v-if="data.tagline !== null" class="description" :style="{color: bgStyle.color}">
        {{ data.tagline || $description || "Welcome to your VuePress site" }}
      </p>

      <p v-if="data.actionText && data.actionLink" class="action" :style="{color: bgStyle.color}">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <RouterLink :to="feature.link">
          <img :src="$withBase(feature.imgUrl)" />
          <h2  :style="{color: bgStyle.color}">{{ feature.title }}</h2>
          <p :style="{color: bgStyle.color}">{{ feature.details }}</p>
        </RouterLink>
      </div>
    </div>

    <!-- <Content class="theme-default-content custom" /> -->

    <!-- <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>

    <Content v-else slot-key="footer" class="footer" /> -->
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "HomeLayout",

  components: { NavLink },
  data(){
    return {
      status: 1,
      url: '',
      bgStyle:{
        color: '',
        backgroundColor: '',
        backgroundImage: '',
      }
    }
  },
  mounted(){
    this.status = localStorage.getItem("blog_theme_status") || 1
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
  watch:{
    status: {
      immediate: true,
      handler(val){
        if(val==1){
          this.bgStyle.color = '#fff';
          this.bgStyle.backgroundColor = '#28282d';
          this.bgStyle.backgroundImage = `url(${this.$withBase('/img/bg.png')})`;
          return
        }
        if(val==2){
          this.bgStyle.color = '#28282d';
          this.bgStyle.backgroundColor = '#fff';
          this.bgStyle.backgroundImage = `url(${this.$withBase('/svg/bg.svg')})`;
          return
        }
      }
      
    } 
  },
  methods:{
    updateStatus(val){
      this.status = val
      window.localStorage.setItem("blog_theme_status",val)
    }
  }
};
</script>

<style lang="stylus" scoped>

.home{
  position: relative;
}
.operation{
  border-radius:10px;
  background-color: #393939;
  display: inline-flex;
  align-items: center;
  color: #fff;
  position: absolute;
  top: 25px;
  cursor: pointer !important;
  .btn1{
    margin: 5px 5px 5px 15px;
  }
  .btn2{
    margin: 5px 15px 5px 5px;
  }
  .active{
    color: #69d8d5;
  }
}

.home .features{
  border-top: none !important;
}
 

.home {
  max-width:none;
  margin: none;
  margin-top: 0
  padding: $navbarHeight 2rem 0;
  display: block;

  .hero {
    text-align: center;
    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;

    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1rem;
      line-height: 1.6rem;


    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
    
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    max-width: $homePageWidth;
    margin: 0px auto;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    text-align: center;
    opacity 0.9;
     &:hover {
       h2{
         color: $accentColor !important;
       }
       p{
         color: $accentColor !important;
       }
    }
   
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    
    }
    a{
      text-decoration: none;
    }
    img{
      width: 10rem;
      height: 10rem;
      animation:mymove 4s infinite;
      -webkit-animation:mymove 4s infinite;
    }
    @keyframes mymove{
      0% {transform: translate(0px, 0px);}
        50% {transform: translate(0px, -10px);}
      100% {transform: translate(0px, 0px);}
      
    }

    /*Safari 和 Chrome:*/
    @-webkit-keyframes mymove
    {
      0% {transform: translate(0px, 0px);}
        50% {transform: translate(0px, -10px);}
      100% {transform: translate(0px, 0px);}
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
      margin: 0 auto;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      margin: 0 auto;
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

</style>
