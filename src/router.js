import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/fractions',
      name: 'fractions',
      component: () => import(/* webpackChunkName: "fractions" */ './views/Fractions.vue'),
    },
    {
      path: '/websockets',
      name: 'websockets',
      component: () => import(/* webpackChunkName: "websockets" */ './views/Websockets.vue'),
    },
    {
      path: '/*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
    },
  ],
});
