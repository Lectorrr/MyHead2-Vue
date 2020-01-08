import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/home/Home'
import LibraryIndex from '@/components/library/LibraryIndex'

Vue.use(Router)

export default new Router({
  /**
   * 修改 router 从 hash 模式改成 history 模式
   */
  mode: 'history',
  routes: [
    // 下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/libraryIndex',
          name: 'LibraryIndex',
          component: LibraryIndex
        }
      ]
    },
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home,
      meta: {
        requireAuth: true
      }
    }
  ]
})
