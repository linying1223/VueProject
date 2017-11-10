<template>
	<div @mouseover="stopRun" @mouseout="run">
		<div>
			<img :src="slide[nowIndex].src">
		</div>
		<div class="c_bottom">
			<div class="c_left">{{slide[nowIndex].title}}</div>
			<div class="c_right">
				<ul>
					<li @click="goto(preIndex)">&lt;</li>
					<li v-for="(item,index) in slide">
						<a href="#" @click="goto(index)" :class="{on:index===nowIndex}">{{index+1}}</a>
					</li>
					<li @click="goto(nextIndex)">&gt;</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bodys',
		data() {
			return {
				nowIndex:0,
				autoRun:"",
				slide: [{
						src: require("../assets/slideShow/pic1.jpg"),
						title: "xxx1"
					},
					{
						src: require("../assets/slideShow/pic2.jpg"),
						title: "xxx2"
					},
					{
						src: require("../assets/slideShow/pic3.jpg"),
						title: "xxx3"
					},
					{
						src: require("../assets/slideShow/pic4.jpg"),
						title: "xxx4"
					}

				]
			}
		},
		methods:{
			goto(index){
				this.nowIndex = index;
			},
			run(){
				this.autoRun = setInterval(()=>{this.goto(this.nextIndex)},2000);
			},
			stopRun(){
				clearInterval(this.autoRun);
			}
		},
		computed:{
			preIndex(){
				if(this.nowIndex===0){
					return this.slide.length-1;
				}else{
					return this.nowIndex-1;
				}
			},
			nextIndex:function(){
				if(this.nowIndex===this.slide.length-1){
					return 0;
				}else{
					return this.nowIndex+1;
				}
			}
			
			
		},
		mounted:function(){
			this.run();
		}
	}
</script>

<style scoped="scoped">
	img {
		vertical-align: bottom;
	}
	
	.c_bottom {
		height: 40px;
		background: rgba(0, 0, 0, 0.9);
		color: white;
		line-height: 40px;
	}
	
	.c_left {
		float: left;
		margin-left: 20px;
	}
	
	.c_right {
		float: right;
	}
	.c_right ul li{
		float: left;
		line-height: 40px;
		cursor: pointer;
	}
	.c_right ul li a {
		color: white !important;
		text-decoration: none;
		padding: 2px;
	}
	.c_right ul li:last-child{
		margin-right: 10px;
	}
	.on{
		text-decoration: underline !important;
	}
	
</style>