<template>
	<div class="app-body">
		<div class="b_left">
			<div class="bl_top">
				<bodyLeft></bodyLeft>
				<!--<router-view></router-view>-->
			</div>
			<div class="bl_bottom">
				<bodyLeftb></bodyLeftb>
				<!--<router-view name="blb"></router-view>-->
			</div>
		</div>
		<div class="b_right">
			<!--轮播图片-->
			<div class="br_top">
				<changpic></changpic>
				<!--<router-view name="brt"></router-view>-->
			</div>
			<div class="br_bottom">
				<bodyRightb></bodyRightb>
				<!--<router-view name="brb"></router-view>-->
			</div>
		</div>
	</div>
</template>

<script>
	import bodyLeft from './bodyLeft'
	import bodyLeftb from './bodyLeftb'
	import bodyRightb from './bodyRightb'
	import changpic from './changpic'
	export default {
		name: "index",
		data() {
			return {
				msg: ""
			}
		},
		components: {
			bodyLeft,
			bodyLeftb,
			bodyRightb,
			changpic
		}
	}
</script>

<style>

</style>