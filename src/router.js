import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import Test from './components/Test.vue'

const Home = resolve => require(['./page/Home/home'], resolve) // 必须加 . ,不然会报错
const Goods = resolve => require(['./page/Goods/goods'], resolve)

const routes = [
  { path: '/', component: Index },
  { path: '/test', component: Test },
  { path: '/home', component: Home },
  { path: '/goods', component: Goods }
];

Vue.use(VueRouter)
const router = new VueRouter({
  routes
});

export default router;