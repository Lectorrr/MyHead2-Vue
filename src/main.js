// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

/**
 * 使用 router.beforeEach()，意思是在访问每一个路由前调用。
 * 首先判断放问的路径是否需要登录，
 *  如果需要登录，判断 store 里面有没有存储 user 的信息
 *    如果存在：放行
 *    如果不存在：跳转登录界面，并存储访问的页面路径
 */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
