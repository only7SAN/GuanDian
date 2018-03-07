import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import SignIn from '@/components/SignIn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});
