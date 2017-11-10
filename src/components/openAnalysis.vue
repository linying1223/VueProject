<template>
	<div>
		<div class="dr_top">
			<h2>数据统计</h2>
			<p class="p1">历史资料，科学实验，检验，统计等所获的的和用于科学研究，技术设计，阿达啊打发啊打发</p>
			<div class="drt_bottom">
				<p>
					<font>产品类型：</font><span class="sp1" v-for="(item,index) in spLists" @click="showBk(index)" :class="{clicksp:nowIndex===index}">{{item.name}}</span></p>
				<p>
					<font>试用地区：</font>
					<select>
						<option value="北京">北京</option>
						<option value="深圳">深圳</option>
						<option value="湖南">湖南</option>
					</select>
				</p>
				<p>
					<font>有效时间：</font><span>半年</span></p>
				<p>
					<font>总价：</font><span style="margin-left: 29px;">500元</span></p>
				<p>
					<span  class="sp2">立即购买</span></p>
			</div>
		</div>
		<div class="dr_bottom">
			<h2>产品说明</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'openAnalysis',
		data() {
			return {
				nowIndex:0,
				spLists:[
					{name:"红色版"},
					{name:"绿色版"},
					{name:"紫色版"}
				]
			}
		},
		methods:{
			showBk(index){
				this.nowIndex = index;
			}
		}
	}
</script>

<style scoped="scoped">
	.dr_top {
		width: 100%;
		height: 500px;
		background: white;
		box-sizing: border-box;
		padding: 10px;
	}
	.dr_top h2,.dr_bottom h2{
		height: 45px;
		color: black;
		background: white;
	}
	
	.drt_bottom p{
		height: 45px;
		line-height: 45px;
	}
	.p1{
		height: 30px;
		background: #F7FCFF;
		margin: 8px 0px;
	}
	.sp1{
		display: inline-block;
		padding: 2px 5px;
		border: 1px solid #cacaca;
		height: 30px;
		line-height: 30px;
		margin-right: 5px;
		cursor: pointer;
	}
	.sp2{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		padding: 5px 7px;
		margin-left: 50px;
		background: #4FC08D;
		color: white;
		cursor: pointer;
	}
	.clicksp{
		background: #4FC08D;
		color: white;
	}
	.dr_bottom {
		width: 100%;
		height: 280px;
		background: white;
		margin-top: 10px;
		box-sizing: border-box;
	}
</style>