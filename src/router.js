import Vue from 'vue'
import Router from 'vue-router'

import WorkspaceRoutes from '@/templates/office/workspace/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home')
    },
    {
      path: '/main',
      name: 'Main',
      // redirect: '/workspace',
      // redirect: '/workspace2',
      component: () => import('./components/MainLayout'),
      children: [
        ...WorkspaceRoutes
      ]
    }
  ]
})
