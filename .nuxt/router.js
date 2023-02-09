import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41b70707 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _06fcd403 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _192ba308 = () => interopDefault(import('..\\pages\\admin\\new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _8030689a = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _16b2da37 = () => interopDefault(import('..\\pages\\posts\\_postId\\index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _bcf8d5c4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _41b70707,
    name: "admin"
  }, {
    path: "/posts",
    component: _06fcd403,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _192ba308,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _8030689a,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _16b2da37,
    name: "posts-postId"
  }, {
    path: "/",
    component: _bcf8d5c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
