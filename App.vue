<script>
	export default {
		globalData:{
			collectedBooks: []
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 自定义css库 */
	@import url("./common/css/free.css");
	/* 矢量图标库 */
	@import url("./common/css/iconfont.css");
	/* animate.css */
	@import url("./common/css/animate.css");
	/* 自定义动画 */
	@import url("./common/css/myanimate.css");
</style>
