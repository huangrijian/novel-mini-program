<template>
	<text class="iconfont" :class="[iconId, iconColor]" :style="{fontSzie:iconSize}" @tap="myClick"></text>
</template>

<script>
	export default {
		props:{
			iconId:{
				type:String,
				default:''
			},
			iconColor:{
				type:String,
				default:'text-dark'
			},
			iconSize:{
				type:Number,
				default:45
			}
		},
		methods: {
			myClick() {
				this.$emit('my-click')
			}
		},
	}
</script>

<style>
</style>
