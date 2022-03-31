<template>
	<view>
		<view class="cal" :style="{height: `${statusBarHeight}px`}"></view>
		<search-box class="mx-2 cal"></search-box>
		<view class="cal" style="height: 20rpx;"></view>
		
		<view class="flex" style="background-color: #f0f3f8;">
			<!-- 左侧 -->
			<scroll-view scroll-y class="font text-light-black" style="width: 180rpx;padding: 0 20rpx;" :style="{height: `${calHeight}rpx`}">
				123
				<block v-for="(item, index) in leftListRes" :key="index">
					<view class="animated faster" :class="leftIndex === index ? 'selected pulse font-weight-bold':''" style="height: 150rpx;line-height: 150rpx;"
					 @tap="leftToright(index)">{{item}}</view>
					 
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {sortResources as resources} from './sortResources';
	import $U from '@/common/unit';
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				calHeight: 0,
				leftIndex: 0,
				rightIndex: `right${0}`
			}
		},
		computed: {
			// 左侧数据
			leftListRes() {
				let res = resources.map(item => item.text);
				console.log(res)
				return res
			},
			// 右侧数据
			rightListRes() {
				return resources
			}
		},
		methods: {
			// 左联动右
			leftToright(i) {
				this.rightIndex = `right${i}`
			},
			// 右联动左
			rightToleft(e) {
				let curScrollTop = e.detail.scrollTop,
					standardVal = $U.Topx(320),
					curIndex = Math.round(curScrollTop / standardVal);
				this.leftIndex = curIndex
			}
		},
		mounted() {
			// 动态获取高度
			$U.calSurplusHeight({
				pageID: this,
				pos: 'cal',
				isTabBarPage: true,
				success: val => this.calHeight = val
			})
		}
	}
</script>

<style>

</style>
