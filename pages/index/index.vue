<template>
	<view class="content">
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
	</view> 
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
			return {
				title: 'Hello',
				url: '',
			}
		},
		onLoad() {


			EntryPage().then((response) => {
				console.log(response.data, "EntryPage");
			
				if (response.data.ReturnCode == 0) {
					if (response.data.Data) {
						this.url = response.data.Data[0].enteranimation;
						// Data[0].enteranimation
							return;
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
	@import 'index.scss';
</style>
