<template>
  <header :class="{active: shoNav}">
    <div class="topbar">
      <navigator class="logo" url="/pages/index/index" @click.native="shoNavClose, $router.go(0)">
        HUIYUAN
        <!-- <img class="logo-name" src="~@/assets/img/logo-name.png" alt=""> -->
      </navigator>
      <div class="logo-more">
        <!-- <img src="~@/assets/img/menu.png" alt=""> -->
        <span>...</span>
      </div>
    </div>
    <div class="menu" @click="shoNavOpen">
      <img src="/static/img/nav.png" alt="">
    </div>
    <div class="header-shadow" @click="shoNavClose"></div>
    <div class="navs">
      <div class="close" @click="shoNavClose">
        <img src="/static/img/close.png" alt="">
      </div>
      <div class="navs-wrap">

        <navigator class="logo" url="/pages/index/index">
          <img src="/static/img/logo.png" alt="">
        </navigator>
        <div class="item-wrap">
          <div class="item-parent" v-for="(item, index) in navs" :key="index">
            <div :class="['item', {active: index === twoHierarchy}]" 
              :key="index" @click="twoHierarchyControl(index)">{{item['stair']['title']}}</div>
            <div class="second-parent" v-if='index === twoHierarchy'>
              <navigator class="second-item" @click.native="shoNavClose" v-for="(second, index2) in item.second"
                :url="{ path: second['path']}" :key="index2">{{second['title']}}</navigator>
            </div>
          </div>
        </div>

        <!-- <div class="item-wrap">
          <div class="item-parent" v-for="(item, index) in navs" :key="index">
            <router-link :class="['item', {active: $route.meta.index == index}]" :to="{ path: item['stair']['path']}"
              :key="index" @click.native="twoHierarchyControl(index)">{{item['stair']['title']}}</router-link>
            <div class="second-parent" v-if='index === twoHierarchy'>
              <router-link class="second-item" @click.native="didi" v-for="(second, index2) in item.second"
                :to="{ path: second['path']}" :key="index2">{{second['title']}}</router-link>
            </div>
          </div>
        </div> -->


      </div>
    </div>
  </header>

</template>

<script>

  // ajax
  import { getOpenID, returnStaffInfo } from "@/assets/js/api";
  // vuex
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
  // import { Swiper, SwiperItem } from 'vux'


  export default {
    name: "commonHeader",
    components: {

    },
    computed: {

    },
    data() {
      return {
        navs: [
          {
            stair: { title: "你好惠元" },
            second: [
              { title: "你好惠元", path: "/hello/hello" },
              { title: "董事寄语", path: "/hello/manager" },
              { title: "慈善公益", path: "/hello/charity" },
              { title: "新闻中心", path: "/hello/news" },
            ]
          },
          {
            stair: { title: "实力惠元" },
            second: [
              { title: "医学中心", path: "/strength/medicine" },
              { title: "项目体系", path: "/strength/project" },
              { title: "名医臻享", path: "/strength/doctors" },
              { title: "幸福设计", path: "/strength/design" },
              { title: "五心服务", path: "/strength/serve" },
            ]
          },
          {
            stair: { title: "幸福惠元" },
            second: [
              { title: "幸福博物馆", path: "/happiness" },
              { title: "幸福留影机", path: "/happiness" },
            ]
          },
          {
            stair: { title: "梦想惠元" },
            second: [
              { title: "合作交流", path: "/dream" },
              { title: "人才招募", path: "/dream" },
              { title: "关注惠元", path: "/dream" },
            ]
          },
          {
            stair: { title: "全景惠元" },
            second: [
              { title: "VR全景", path: "/panorama" },
            ]
          }
        ],
        // 控制二级导航显示与隐藏
        twoHierarchy: null,
        // 控制导航显示与隐藏
        shoNav: false,
      };
    },
    methods: {
      //开关二级导航
      twoHierarchyControl(index) {
        if (this.twoHierarchy == index) {
          this.twoHierarchy = null
        } else {
          this.twoHierarchy = index
        }
      },

      shoNavOpen() {
        this.shoNav = true;
      },

      shoNavClose() {
        this.shoNav = false;
      },

      didi() {
        // this.shoNav = false;
        // this.twoHierarchy = null;
      }

    },
    created() { },
    mounted() {

    },

    watch: {

    }

  };
</script>


