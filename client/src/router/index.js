import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Polling from '@/components/Polling';
import ViewPoint from '@/components/ViewPoint';
import Myself from '@/components/Myself';
import Messages from '@/components/Messages';
import Functions from '@/components/Functions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/polling',
      name: 'Polling',
      component: Polling,
    },
    {
      path: '/viewpoint',
      name: 'ViewPoint',
      component: ViewPoint,
    },
    {
      path: '/functions',
      name: 'Functions',
      component: Functions,
    },
    {
      path: '/myself',
      name: 'Myself',
      component: Myself,
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages,
    },
  ],
});
