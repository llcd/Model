import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout/layout'
import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/demo/Parent'
import Parent1 from '@/components/demo1/Parent1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: 'parent',
          name: 'Parent',
          component: Parent
        },
        {
          path: 'parent1',
          name: 'Parent1',
          component: Parent1
        }
      ]
    },
    
  ]
})
