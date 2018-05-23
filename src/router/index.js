import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import detailPage from '../pages/detail'
import detailForecast from '../pages/detail/forecast'
import detailCount from '../pages/detail/count'
import detailAnalysis from '../pages/detail/analysis'
import detailPublish from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: detailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'forecast',
          component: detailForecast
        },
        {
          path: 'count',
          component: detailCount
        },
        {
          path: 'analysis',
          component: detailAnalysis
        },
        {
          path: 'publish',
          component: detailPublish
        }
      ]
    }
  ]
})
