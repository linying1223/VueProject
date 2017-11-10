<template>
	<div>
		<table>
			<tr>
				<td class="td1">用户名：</td>
				<td><input type="text" name="user" class="inpu"></td>
			</tr>
			<tr>
				<td  class="td1">密码：</td>
				<td><input type="password" name="pwd" class="inpu"/></td>
			</tr>
			<tr>
				<td  class="td1"></td>
				<td><input type="submit" value="登录" class="btn"/></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'loginDia',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
	table{
		font-size: 20px;
		margin: 40px auto;
	}
	table tr td{
		
		padding-top: 20px;
	}
	table .td1{
		text-align: right;
		
	}
	.btn{
	background: #81D2AD;
	color: white;
	border: none;
	width: 60px;
	height: 30px;
	margin-top: 15px;
}
.inpu{
	height: 25px;
	width: 200px;
}
</style>