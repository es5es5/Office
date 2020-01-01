<template>
	<div id="home">
		<div class="welcome_wrap">
			<h1>Hello! Welcome to "Office Workspace Tool."</h1>
			<router-link tag="a" class="link" :to="{name: 'Main'}">Enter.</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>

<style lang="scss" scoped>
.welcome_wrap {
	font-size: 1.5rem;
	margin: 5% 0;
	text-align: center;
	line-height: 1.75;
}
a {
	display: block;
	transition: all 1s;
	&:hover {
		text-decoration: underline;
		transform: translate(0, -.5rem);
		transition: all .75s;
	}
}
</style>
