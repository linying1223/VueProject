<template>
	<div class="details">
		<div class="d_left">
			<div class="dl_top">
				<img :src="showPic" />
			</div>
			<div>
				<ul>
					<li v-for="item in lists"  :class="{on:showPic===item.src}">
						<router-link :to="{path:item.toRoutes}" class="listStyle">{{item.listName}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="d_right">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				lists:[
					{
						listName:"数据统计",
						toRoutes:"open",
						src:require("../assets/images/1.png")
					},
					{
						listName:"数据预测",
						toRoutes:"preview",
						src:require("../assets/images/2.png")
					},
					{
						listName:"流量分析",
						toRoutes:"analysis",
						src:require("../assets/images/3.png")
					},
					{
						listName:"广告分布",
						toRoutes:"distribution",
						src:require("../assets/images/4.png")
					}
				],
				pics:{
					"/detail/open":require("../assets/images/1.png"),
					"/detail/preview":require("../assets/images/2.png"),
					"/detail/analysis":require("../assets/images/3.png"),
					"/detail/distribution":require("../assets/images/4.png")
				}
			}
		},
		computed:{
			showPic(){
				return this.pics[this.$route.path]
			}
		}
	}
</script>

<style scoped>
	.details{
		width: 1220px;
		height: 783px;
		margin: 10px auto;
	}
	.d_left{
		float: left;
		width: 300px;
		height: 380px;
		background: white;
	}
	.dl_top{
		height: 130px;
		text-align: center;
		padding-top: 20px;
	}
	.d_left ul li{
		text-indent: 2em;
		font-size: 17px;
		line-height: 40px;
		height: 40px;
		list-style: none;
	}
	.listStyle{
		color: black;
		text-decoration: none;
	}
	.on{
		background: #4FC08D;
	}
	.on a{
		color: white;
	}
	.d_right{
		width: 900px;
		height: 100%;
		float: right;
	}
</style>