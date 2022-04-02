<template>
	<view class="content">
		<!-- 占位 高度为0-->
		<view :style="{height:`${statusBarHeight}px`}"></view>
		<search-box class="mx-2" />
		<rotation-chart :imgArr="swiperImagesArr"/>
		<function-sort :functionSortArr="functionSortArr"></function-sort>
		<recommond :Rebooks="Rebooks"></recommond>
		<block v-for="(item, index) in bookResources" :key="index">
			<list-header> <template v-slot:title> {{item.headerTitle}} </template> </list-header>
			<book-list :bookListArr="item.books"></book-list>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				Rebooks:[],
				swiperImagesArr:[],
				bookResources:[],
				functionSortArr: [{
						iconId: 'icon-icon-test',
						iconColor: 'text-warning',
						name: '看榜单'
					},
					{
						iconId: 'icon-startRead',
						iconColor: 'text-hover-primary',
						name: '听小说'
					},
					{
						iconId: 'icon-icon09',
						iconColor: 'text-light-black',
						name: '听音乐'
					},
					{
						iconId: 'icon-zhishi',
						iconColor: 'text-success',
						name: '听知识'
					}
				],
			}
		},
		onLoad() {
			// 获取首页全部数据
			this.$http.get('/app_index').then(res => {
				this.swiperImagesArr = res.swiperImages;
				this.Rebooks = res.Rebooks;
				this.bookResources = res.bookResources;
			})
		},
		methods: {
		
		}
	}
</script>

<style scoped>

</style>
