<template>
<div class="body_left">
	<h2>全部产品</h2>
	<div v-for="pro in proLists">
		<h3>{{pro.title}}</h3>
		<ul>
			<li v-for="item in pro.lists"><a :href="item.url">{{item.name}}</a></li>
		</ul>
	</div>
	
</div>
</template>

<script>
	export default {
		name: 'bodyLeft',
		data() {
			return {
				proLists:{
					pc:{
						title:"PC产品",
						lists:[
							{
								name:"数据统计1",
								url:"http://www.baidu.com"
							},
							{
								name:"数据统计2",
								url:"http://www.baidu.com"
							},
							{
								name:"数据统计3",
								url:"http://www.baidu.com"
							},
							{
								name:"数据统计4",
								url:"http://www.baidu.com"
							},
						]
					},
					app:{
						title:"手机应用类",
						lists:[
							{
								name:"数据统计5",
								url:"http://www.baidu.com"
							},
							{
								name:"数据统计6",
								url:"http://www.baidu.com"
							},
							{
								name:"数据统计7",
								url:"http://www.baidu.com"
							},
							{
								name:"数据统计8",
								url:"http://www.baidu.com"
							},
						]
					}
				}
			}
		}
	}
</script>

<style>
	ul li{
		list-style: none;
		padding-left: 20px;
		line-height: 28px;
	}
	.body_left{
		line-height: 26px;
		font-size: 15px;
	}
	h2{
		color: white;
		height: 50px;
		background-color: #4FC08D;
		line-height: 50px;
		padding-left: 13px;
		margin-bottom: 10px;
	}
	h3{
		padding-left: 16px;
		height: 40px;
		line-height: 40px;
	}
	 a{
		color: black;
		text-decoration: none;
	}
</style>