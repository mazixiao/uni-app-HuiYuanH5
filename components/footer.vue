<template>
  <footer>
    <div class="footer-top">
      <div class="nav">
        <div class="item-parent" v-for="(item, index) in navs" :key="index">
          <div class="item">{{item['stair']['title']}}</div>
          <div class="second-parent">
            <navigator class="second-item" @click.native="$router.go(0)" v-for="(second, index2) in item.second"
              :to="{ path: second['path']}" :key="index2">{{second['title']}}</navigator>
          </div>
        </div>
      </div>
      <div class="account">
        <div class="account-tit">惠元官方账号</div>
        <div class="wrap">
          <div class="qr-code-wrap">
            <img :class="['item', {active: codeActive == 0}]" src="/static/img/weixin.png" alt="">
            <img :class="['item', {active: codeActive == 1}]" src="/static/img/weibo.png" alt="">
            <img :class="['item', {active: codeActive == 2}]" src="/static/img/weixin.png" alt="">
          </div>
          <div class="text-wrap">
            <div class="item" @mouseenter="enter(0)" @mouseleave="leave()">微信 <span class="add">+</span></div>
            <div class="item" @mouseenter="enter(1)" @mouseleave="leave()">微博 <span class="add">+</span></div>
            <div class="item" @mouseenter="enter(2)" @mouseleave="leave()">抖音 <span class="add">+</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="copyright">
        全国服务热线<span class="tel">021-61183567</span>惠元医院拥有本网站所有内容的最终解释权 ©Copyright 2020 xingfuhuiyuan. All rights reserved. <a href="http://beian.miit.gov.cn" target="_blank">粤ICP备17073527号</a>
      </div>
      <div class="site">上海市浦东新区秀浦路2500弄4号楼</div>
     
      
    </div>

  </footer>

</template>

<script>

  // ajax
  import { getOpenID, returnStaffInfo } from "@/assets/js/api";
  // vuex
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
  // import { Swiper, SwiperItem } from 'vux'


  export default {
    name: "commonFooter",
    components: {

    },
    computed: {

    },
    data() {
      return {
        codeActive: null,
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
      enter(index) {
        this.codeActive = index;
      },
      leave() {
        this.codeActive = null;
      }

    },
    created() { },
    mounted() {

    },

    watch: {

    }

  };
</script>


