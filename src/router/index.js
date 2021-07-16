import Vue from 'vue'
import Router from 'vue-router'
import routerConfigs from './routers'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routers: routerConfigs
})

export default router
