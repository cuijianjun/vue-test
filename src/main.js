// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail.vue'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

/*饿了么组件库*/
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
/*promise 发起网络请求*/
import axios from 'axios'


/*vue路由*/
import Router from 'vue-router'
Vue.use(Router)
Vue.prototype.$axios = axios
let router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetailAnaPage
        },
        {
          path:'count',
          component:DetailCouPage
        },
        {
          path:'forecast',
          component:DetailForPage
        },
        {
          path:'publish',
          component:DetailPubPage
        }
      ]
    }
  ]
})
/*动画库*/
//import animate from 'animate.css'
/*bootstrap*/
//import 'bootstrap/dist/css/bootstrap.min.css'

/*
* 个性化定制组件UI*/
/*import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)*/

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
//Vue.use(ElementUI)
//Vue.use(animate)

/* eslint-disable no-new */


new Vue({
  el:'#app',
  router,
  template:'<Layout/>',
  components:{Layout}

})




