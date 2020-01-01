<template>
  <div id="main_layout">
    <Header v-if="false"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'MainLayout',
  components: {
    Header
  }
}
</script>
