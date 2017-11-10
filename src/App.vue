<template>
	<div id="app">
		<!--顶部-->
		<div class="app-header">
			<div class="h_content">
				<div class="h_left">
					<router-link to="/"><img src="./assets/logo.png" height="70px"></router-link>
				</div>
				<div class="h_right">
					<a href="#" @click="showDialog('isShowLogin')">登录</a> |
					<a href="#" @click="showDialog('isShowRegister')">注册</a> |
					<a href="#" @click="showDialog('isShowDialog')">关于</a>
				</div>
			</div>
		</div>
		<!--登录-->
		<myDialog :isshow="isShowLogin" @closeDia="closeDialogs('isShowLogin')">
			<loginDia></loginDia>
		</myDialog>
		
		<!--注册-->
		<myDialog :isshow="isShowRegister" @closeDia="closeDialogs('isShowRegister')">
			<registerDia></registerDia>
		</myDialog>
		
		<!--关于-->
		<myDialog :isshow="isShowDialog" @closeDia="closeDialogs('isShowDialog')">
			<p>asdfa设定和上海市的哈尔圣达菲沙发上的四大行上海市s</p>
		</myDialog>
		
		<!--中部-->
		<div>
			<router-view></router-view>
			<!--<div class="b_left">
				<div class="bl_top">
					<router-view></router-view>
				</div>
				<div class="bl_bottom">
					<router-view name="blb"></router-view>
				</div>
			</div>
			<div class="b_right">
				<!--轮播图片-->
				<!--<div class="br_top">
					<router-view name="brt"></router-view>
				</div>
				<div class="br_bottom">
					<router-view name="brb"></router-view>
				</div>-->
			<!--</div>-->
		</div>
		<!--尾部-->
		<div class="app-footer">
			@2016 shell
		</div>
	</div>
</template>

<script>
	import index from './components/index'
	import myDialog from './components/base/myDialog'
	import loginDia from './components/base/loginDia'
	import registerDia from './components/base/registerDia'
	export default {
		name: 'app',
		data(){
			return {
				isShowDialog:false,
				isShowLogin:false,
				isShowRegister:false,
				arr:[this.isShowDialog,this.isShowLogin,this.isShowLogin]
			}
		},
		components: {
			myDialog,
			loginDia,
			registerDia
		},
		methods:{
			showDialog(id){
				if(id==="isShowDialog"){
					this.isShowDialog = true;
				}else if(id==="isShowLogin"){
					this.isShowLogin = true;
				}else if(id==="isShowRegister"){
					this.isShowRegister = true;
				}
				
			},
			closeDialogs(id){
				if(id==="isShowDialog"){
					this.isShowDialog = false;
				}else if(id==="isShowLogin"){
					this.isShowLogin = false;
				}else if(id==="isShowRegister"){
					this.isShowRegister = false;
				}
//				for(var i=0;i<this.arr.length;i++){
//					this.arr[i] = false;
//					
//				}
//				alert(this.isShowRegister)
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		font-size: 15px;
		overflow: hidden;
	}
	/*顶部*/
	.app-header {
		width: 100%;
		height: 70px;
		background: #363636;
	}
	
	.h_content {
		width: 1220px;
		height: 900px;
		margin: 0px auto;
	}
	
	.h_left {
		float: left;
		height: 70px;
	}
	
	.h_right {
		float: right;
		color: #666;
		line-height: 70px;
	}
	
	.h_right a {
		color: #908C8D;
	}
	/*中部*/
	.app-body {
		width: 1220px;
		height: 883px;
		margin: 10px auto;
	}
	/*中部左部分*/
	.b_left{
		float: left;
		width: 300px;
		height: 100%;
	}
	
		/*中部右部分*/
	.b_right{
		width: 900px;
		height: 100%;
		float: right;
	}
.br_top,.bl_top{
	width: 100%;
	height: 547px;
	background: white;
	margin-bottom: 10px;
}
.bl_bottom{
	width: 100%;
	height: 321px;
	background: white;
}
.br_bottom{
	width: 100%;
	height: 321px;
}
	/*尾部*/
	
	.app-footer {
		clear: both;
		width: 100%;
		height: 70px;
		background: #E3E4E8;
		text-align: center;
		line-height: 70px;
	}
</style>