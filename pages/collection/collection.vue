<template>
	<view>
		<view class="cal" :style="{height: `${statusBarHeight}px`}"></view>
		<search-box class="cal"></search-box>
		<tab-top class="cal" :tabIndex="tabIndex" :tabArr="['我的收藏', '收听历史']" @changeTabIndex="changeTabIndex"></tab-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				calHeight: 0,
				tabIndex: 0,
				showCancalColStatus: false,
				collectedArr: [],
				cancalColID: 0
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
