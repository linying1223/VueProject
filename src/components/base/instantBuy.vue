<template>
	<div class="buyInstant">
		<div class="buy_top">
			<table cellspacing="0px">
				<tr v-for="proItem in proLists">
					<td v-for="item in proItem">{{item}}</td>
				</tr>
			</table>
		</div>
		<div class="buy_bottom">
			<p>请选择银行</p>
			<ul>
				<li v-for="(item,index) in backs" @click="showBor(index)" :class="[item,{onBor:nowBorder===index}]"></li>
			</ul>
			<div style="clear: both;"></div>
			<button class="btn3" @click="showPay">确认购买</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'instantBuy',
		props: ['nums', 'singleOp', 'instBuy'],
		data() {
			return {
				nowBorder: 0,
				proLists: {
					title: ["购买数量", "产品类型", "有效时间", "产品版本", "总价"],
					content: this.instBuy
				},
				backs: [
					"back1", 'back2', 'back3', 'back4', 'back5', 'back6', 'back7', 'back8'
				]

			}
		},
		methods: {
			showBor(index) {
				this.nowBorder = index;
			},
			showPay() {
				return this.$emit("closeBuy");
			}
		}

	}
</script>

<style scoped>
	.buyInstant {
		padding: 20px 18px;
	}
	
	table {
		border: 1px solid #CACACA;
		margin: 0px auto;
	}
	
	.buy_top tr td {
		width: 120px;
		height: 34px;
		text-align: center;
	}
	
	.buy_top tr:nth-child(2) td {
		border: 1px solid #CACACA;
	}
	
	.buy_top tr:first-child {
		background: #4EC08C;
		color: white;
	}
	
	.buy_bottom {
		margin-top: 20px;
	}
	
	.buy_bottom p {
		font-size: 20px;
		margin-bottom: 15px;
	}
	
	.buy_bottom ul li {
		box-sizing: border-box;
		list-style: none;
		border: 1px solid #CACACA;
		width: 133px;
		height: 45px;
		float: left;
		margin-right: 7px;
		margin-top: 7px;
	}
	
	.back1 {
		background: url(../../assets/banks/banks.png)10px 6px no-repeat;
	}
	
	.back2 {
		background: url(../../assets/banks/banks.png) -109px 6px no-repeat;
	}
	
	.back3 {
		background: url(../../assets/banks/banks.png) -235px 6px no-repeat;
	}
	
	.back4 {
		background: url(../../assets/banks/banks.png) -1792px 6px no-repeat;
	}
	
	.back5 {
		background: url(../../assets/banks/banks.png) -1675px 6px no-repeat;
	}
	
	.back6 {
		background: url(../../assets/banks/banks.png) -2392px 6px no-repeat;
	}
	
	.back7 {
		background: url(../../assets/banks/banks.png) -2510px 6px no-repeat;
	}
	
	.back8 {
		background: url(../../assets/banks/banks.png) -2628px 6px no-repeat;
	}
	.buy_bottom .onBor {
		border: 1px solid #4EC08C;
		
	}
	.btn3 {
		width: 100px;
		height: 40px;
		background: #4EC08C;
		border: none;
		color: white;
		margin-top: 30px;
	}
	
	
	.item {
		font-size: 30px;
	}
</style>