<template>
	<div>
		<div class="brbottom" v-for="brbitems in brbLists">
			<dl>
				<dt><img :src="brbitems.src"></dt>
				<dd class="dd1"><a href="#">{{brbitems.title}}</a></dd>
				<dd>{{brbitems.subtitle}}</dd>
				<dd><router-link :to="{path:'/detail/'+brbitems.toPath}" class="btn2">立即购买</router-link></dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
  name: 'bodyRightb',
  data () {
    return {
      brbLists:{
      	brblist1:{
      		src:require("../assets/images/1.png"),
      		title:"开放产品",
      		subtitle:"开放产品是一款开放产品",
      		toPath:"open"
      	},
      	brblist2:{
      		src:require("../assets/images/2.png"),
      		title:"品牌营销",
      		subtitle:"品牌营销是一款开放产品",
      		toPath:"preview"
      	},
      	brblist3:{
      		src:require("../assets/images/3.png"),
      		title:"使命必达",
      		subtitle:"使命必达是一款开放产品",
      		toPath:"analysis"
      	},
      	brblist4:{
      		src:require("../assets/images/4.png"),
      		title:"勇攀高峰",
      		subtitle:"勇攀高峰是一款开放产品",
      		toPath:"distribution"
      	}
      }
    }
  }
}
</script>

<style scoped="scoped">

.brbottom dt{
	float: left;
	margin-right: 15px;
	margin-top: 8px;
	margin-left: 10px;
}
.brbottom dl{
	margin-right: 30px;
	float: left;
	width: 47.7%;
	margin-right: 20px;
	margin-bottom: 20px;
	height: 130px;
	background: white;
	line-height: 27px;
	padding-top: 20px;
}

.dd1{
	font-weight: bold;
}
.brbottom .btn2{
	background: #81D2AD;
	display: inline-block;
	color: white;
	border: none;
	padding: 3px;
	margin-top: 12px;
}
</style>