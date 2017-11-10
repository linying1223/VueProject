<template>
	<div>
		<div class="dia_container" v-if="isshow">
			<div class="dia_back" @click="closeDialog"></div>
			<div class="dia_close" @click="closeDialog">x</div>
			<div class="dia_text">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myDialog',
		props: ["isshow"],
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods:{
			closeDialog(){
				this.$emit("closeDia");
			}
		}
		
	}
</script>

<style scoped="scoped">
	.dia_container {
		position: relative;
	}
	
	.dia_back {
		position: absolute;
		width: 99.999%;
		height: 1043px;
		background: rgba(0, 0, 0, 0.4);
	}
	
	.dia_text {
		position: absolute;
		width: 550px;
		height: 300px;
		overflow: hidden;
		background: white;
		left: 600px;
		top: 250px;
		/*padding: 30px;*/
		/*z-index: 1000;*/
	}
	
	.dia_close {
		position: absolute;
		left: 1130px;
		top: 250px;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		z-index: 1000;
		cursor: pointer;
	}
</style>