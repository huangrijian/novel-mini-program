<template>
	<view class="content">
		<!-- 占位 高度为0-->
		<view :style="{height:`${statusBarHeight}px`}"></view>
		<search-box class="m-2" />
		<rotation-chart :imgArr="imgArr"/>
		1
	</view>
</template>

<script>
	import rotationChart from '@/components/rotationChart.vue';
	import searchBox from '@/components/searchBox.vue';
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				imgArr:[{
					src:'/static/swiperImages/swipertab1.png'
				},{
					src:'/static/swiperImages/swipertab2.png'
				},
				{
					src:'/static/swiperImages/swipertab3.png'
				},
				{
					src:'/static/swiperImages/swipertab4.png'
				},
				{
					src:'/static/swiperImages/swipertab5.png'
				},
					
				]
			}
		},
		components:{
			searchBox,
			rotationChart,//轮播图
		},
		onLoad() {
			console.log('onLoad')
		},
		created() {
			console.log('created')
		},
		methods: {
		
		}
	}
</script>

<style scoped>

</style>
