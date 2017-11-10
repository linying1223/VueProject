<template>
	<div>
		<div class="dia_container" v-if="isBuy">
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
		name: 'buySomething',
		props: ["isBuy"],
		data() {
			return {
				
			}
		},
		methods: {
			closeDialog() {
				this.$emit("closeDia");
			}
		}

	}
</script>

<style scoped="scoped">
	
	.dia_back {
		position: absolute;
		/*width: 1900px;*/
		width: 100%;
		height: 950px;
		background: rgba(0, 0, 0, 0.4);
		top: 0px;
		left: 0px;
	}
	
	.dia_text {
		position: absolute;
		width: 650px;
		height: 400px;
		overflow: hidden;
		background: white;
		left: 600px;
		top: 250px;
	}
	
	.dia_close {
		position: absolute;
		left: 1230px;
		top: 250px;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		z-index: 1000;
		cursor: pointer;
	}
</style>