
import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home,
    props: route => ({
      home: route.query.home
    })
    // beforeEnter: (to, from, next) => {
    //   // 路由独享守卫
    //   if (from.name === 'About')alert('from About')
    //   else alert('from other page')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    props: {
      about: 'about'
    },
    meta: {
      title: '关于'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render_page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    props: true, // 将动态路由的值设为页面的props属性
    component: () => import('@/views/Argu.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error/404.vue')
  }
]
