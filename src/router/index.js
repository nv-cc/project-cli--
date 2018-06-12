import VueRouter from 'vue-router';
// home 展示
// admin 管理
import homeRoutes from '@/router/home-routes';
import adminRoutes from '@/router/admin-routes';

const routes = homeRoutes.concat(adminRoutes);
routes.push({
  path: '/',
  redirect: '/home',
});

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes,
});
