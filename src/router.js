import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/components/MainLayout'

import WorkspaceRoutes from '@/templates/office/workspace/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        ...WorkspaceRoutes
      ]
    }
  ]
})
