<template>
	<div>
		<h2>最新消息</h2>
		<ul>
			<li v-for="items in news"><a href="#">{{items}}</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
  name: 'bodyLeftb',
  data () {
    return {
      news:["新闻条目1新闻条目1新闻...","新闻条目2","新闻条目3新闻条目3","新闻条目4新闻条目3"]
    }
  }
}
</script>

<style>
</style>