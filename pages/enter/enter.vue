<template>
	<!-- 	<view class="content">
		<img class="logo22" :src="url" alt="">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<van-button type="primary">主要按钮</van-button>
			<van-button type="info">信息按钮</van-button>
			<van-button type="default">默认按钮</van-button>
			<van-button type="warning">警告按钮</van-button>
			<van-button type="danger" @click='didi'>危险按钮</van-button>
		</view>
		<div class='laal'>cdsvs</div>
	</view> -->

	<div class="enter">
		<router-link to="/index#a1">
			<div v-if="type == 1" class="bg-img" :style="`background-image: url(${src});`"></div>
			<video v-if="type == 2" class="bg-video" :src="src" autoplay="autoplay" loop="loop" muted="muted"></video>
		</router-link>
		<router-link class="goIndex" to="../index/index">
			Enter
		</router-link>
		<div class="footer-bottom">
			<div class="copyright">
				全国服务热线<span class="tel">021-61183567</span>惠元医院拥有本网站所有内容的最终解释权 ©Copyright 2020 xingfuhuiyuan. All rights reserved.
				<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备案17073527号</a>
			</div>
			<div class="site">上海市浦东新区秀浦路2500弄4号楼</div>
		</div>

	</div>

</template>

<script>
	// 局部引入vant组件会导致样式失效，我改成了全局引入
	import {
		// Button,
		Toast
	} from "vant";

	// ajax
	import {
		EntryPage
	} from "@/assets/js/api";

	export default {
		components: {
			// 局部引入vant组件会导致样式失效，我改成了全局引入
			// [Button.name]: Button,
			[Toast.name]: Toast,
		},
		data() {
			const that = this;
			return {
				// 路径
				src: '',
				// 类型
				type: null,
			};
		},
		onLoad() {


			EntryPage().then((response) => {
				console.log(response.data, "EntryPage")
				if (response.data.ReturnCode == 0) {
					if (response.data.Data) {
						this.src = response.data.Data[0].enteranimation;
						if (response.data.Data[0].type == 1) {
							this.type = 1;
						} else if (response.data.Data[0].type == 2) {
							this.type = 2;
						}
					}
				}
			});


		},
		methods: {

			didi() {
				console.log(11);
				Toast('提示内容');
			}

		}
	}
</script>

<style lang="scss" scoped>
	@import 'enter.scss';
</style>
