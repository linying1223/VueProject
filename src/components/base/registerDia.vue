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
				<td><input type="submit" value="注册" class="btn"/></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'registerDia',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
</style>