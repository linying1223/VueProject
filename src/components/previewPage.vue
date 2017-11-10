<template>
	<div>
		<div class="dr_top">
			<h2>数据预测</h2>
			<p class="p1">历史资料，科学实验，检验，统计等所获的的和用于科学研究，技术设计，阿达啊打发啊打发</p>
			<div class="drt_bottom">
				<p>
					<font>购买数量：</font><span class="sp3 sp4" @click="del">-</span><span class="sp3">{{num}}</span><span class="sp3 sp4" @click="add">+</span></p>
				<!--<p>
					<font>媒介：<span class="sp1" v-for="(item,index) in mjLists" @click="showBk(index)" :class="{clicksp:nowIndex===index}">{{item.name}}</span></font>
					
				</p>-->
				<p>
					<font>媒介：
						<label class="sp1" v-for="(item,index) in mjLists" @click="showBk(index)">
							<input type="checkbox" class="box"/><span class="sp5">{{item.name}}</span>
						</label>
					</font>
					
				</p>
				<p>
					<font>有效时间：</font><span>一年</span></p>
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
		name: 'previewPage',
		data() {
			return {
				nowIndex:0,
				num:10,
				mjLists:[
					{name:"纸质报告"},
					{name:"pdf"},
					{name:"页面报告"},
					{name:"邮件"}
				]
			}
		},
		methods:{
			showBk(index){
				this.nowIndex = index;
				
			},
			del(){
				if(this.num===0){
					this.num = 0;
				}else{
					this.num =this.num-1;
				}
			},
			add(){
				this.num =this.num+1;
			}
		}
	}
</script>

<style scoped="scoped">
	.sp3{
		display: inline-block;
		border: 1px solid #CACACA;
		height: 25px;
		line-height: 25px;
		width: 25px;
		text-align: center;
	}
	.sp4{
		cursor: pointer;
	}
	.sp5{
		display: inline-block;
		border: 1px solid #cacaca;
		padding: 0px 3px;
	}
	.box{
		display: none;	
	}
	.box:checked + span{
		background: #4FC08D;
		color: white;
	}
	
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