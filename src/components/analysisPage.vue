<template>
	<div>
		<div class="dr_top">
			<h2>流量分析</h2>
			<p class="p1">历史资料，科学实验，检验，统计等所获的的和用于科学研究，技术设计，阿达啊打发啊打发</p>
			<div class="drt_bottom">
				<p>
					<font>购买数量：</font>
					<span class="sp3 sp4" @click="del">-</span>
					<span class="sp3" v-model="nums">{{nums}}</span>
					<span class="sp3 sp4" @click="add">+</span>
				</p>
				<p>
					<font>产品类型：</font>
					<select v-model="singelOption">
						<option value="入门版">入门版</option>
						<option value="初级版">初级版</option>
						<option value="高级版">高级版</option>
					</select>
				</p>
				<p>
					<font>有效时间：
						<label class="sp1" v-for="(item,index) in mjLists" @click="showBk(index)">
							<input type="radio" class="box" name="infinitYear" :value="item.name" v-model="year"/>
							<span class="sp5"  :class="{clicksp:nowIndex===index}">{{item.name}}</span>
						</label>
					</font>

				</p>

				<p>
					<font>产品版本：
						<label class="sp1" v-for="(proItem,proIndex) in proLists" @click="showpro(proIndex)">
							<input type="radio" class="box" name="cus" :value="proItem" v-model="customer"/>
							<span class="sp5"  :class="{clicksp:proNowIndex===proIndex}">{{proItem}}</span>
						</label>
					</font>

				</p>

				<p>
					<font>总价：</font><span style="margin-left: 29px;">{{sums}}元</span></p>
				<p>
					<span class="sp2" @click="showBuy">立即购买</span></p>
			</div>
		</div>
		<div class="dr_bottom">
			<h2>产品说明</h2>
		</div>
		<!--点击立即购买-->
		<buySomething :isBuy="buyDialog" @closeDia="closeBuy">
			<instantBuy :instBuy="changearr" @closeBuy="closeInst"></instantBuy>
		</buySomething>

		<!--支付状态-->
		<buySomething :isBuy="payDialog" @closeDia="closeBuy" @closeBuy="closeInst">
			<p class="p2">
				请检查你的支付状态！
				<button class="btn5" @click="success">支付成功</button>
				<button class="btn5">支付失败</button>
			</p>
		</buySomething>

		<!--购买成功-->
		<buySomething :isBuy="successDialog" @closeDia="closeBuy">
			<div class="p2">
				购买成功！ 是否查看您的产品？<br/>
				<router-link to="/">返回首页</router-link>
				<router-link to="/orderPro">查看产品</router-link>
			</div>
		</buySomething>
	</div>
</template>

<script>
	import buySomething from './base/buySomething'
	import instantBuy from './base/instantBuy'
	import Vue from 'vue'
	export default {
		name: 'analysisPage',
		data() {
			return {
				nowIndex: 0,
				nums: 1,
				proNowIndex: 0,
				buyDialog: false,
				payDialog: false,
				successDialog: false,
				singelOption: "入门版",
				sums: 678,
				year: '半年',
				customer: '客户版',
				arr: [],
				mjLists: [{
						name: "半年"
					},
					{
						name: "一年"
					},
					{
						name: "三年"
					}
				],
				proLists: ["客户版", "代理商版", "专家版"]
			}
		},
		components: {
			buySomething,
			instantBuy
		},
		methods: {
			showBk(index) {
				this.nowIndex = index;
			},
			del() {
				if(this.nums === 0) {
					this.nums = 0;
				} else {
					this.nums = this.nums - 1;
				}
			},
			add() {
				this.nums = this.nums + 1;
			},
			showpro(proIndex) {
				this.proNowIndex = proIndex;
			},
			showBuy() {
				this.buyDialog = true;
			},
			closeBuy() {
				this.buyDialog = false;
				this.payDialog = false;
				this.successDialog = false;
			},
			closeInst() {
				this.buyDialog = false;
				this.payDialog = true;
			},
			success() {
				this.payDialog = false;
				this.successDialog = true;
			}
		},
		computed: {
			changearr() { //将数据传给子组件中
				return Vue.set(this.arr, 0, [this.nums, this.singelOption, this.year, this.customer, this.sums])
			}
		}
	}
</script>

<style scoped="scoped">
	.sp3 {
		display: inline-block;
		border: 1px solid #CACACA;
		height: 25px;
		line-height: 25px;
		width: 25px;
		text-align: center;
	}
	
	.sp4 {
		cursor: pointer;
	}
	
	.dr_top {
		width: 100%;
		height: 500px;
		background: white;
		box-sizing: border-box;
		padding: 10px;
	}
	
	.dr_top h2,
	.dr_bottom h2 {
		height: 45px;
		color: black;
		background: white;
	}
	
	.drt_bottom p {
		height: 45px;
		line-height: 45px;
	}
	
	.p1 {
		height: 30px;
		background: #F7FCFF;
		margin: 8px 0px;
	}
	
	.sp1 {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		margin-right: 5px;
		cursor: pointer;
	}
	
	.sp2 {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		padding: 5px 7px;
		margin-left: 50px;
		background: #4FC08D;
		color: white;
		cursor: pointer;
	}
	
	.clicksp {
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
	
	.btn5 {
		width: 100px;
		height: 40px;
		background: #4EC08C;
		border: none;
		color: white;
		margin-right: 20px;
		font-size: 16px;
	}
	
	.p2 {
		margin-top: 50px;
		margin-left: 20px;
	}
	
	.box {
		display: none;
	}
	
	/*.box:checked+span {
		background: #4FC08D;
		color: white;
	}*/
	
	.sp5 {
		display: inline-block;
		border: 1px solid #cacaca;
		padding: 0px 5px;
	}
</style>