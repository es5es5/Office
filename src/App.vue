<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'App',
	created () {},
	mounted () {},
	destroyed () {},
	components: {
    Header
  },
	filters: {},
	data () {
    return {}
  },
	computed: {},
	watch: {},
	methods: {}
}
</script>


<style lang="scss">
@import '@/assets/scss/cmm.scss';
</style>
