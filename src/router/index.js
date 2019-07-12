import Vue from 'vue'
import Router from 'vue-router'
import Traning from '@/components/traning/traning'
import Goodke from '@/components/goodke/goodke'
import Openke from '@/components/openke/openke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/traning'
    },
    {
      path: '/traning',
      component: Traning
    },
    {
      path: '/goodke',
      component: Goodke
    },
    {
      path: '/openke',
      component: Openke
    }
  ]
})
