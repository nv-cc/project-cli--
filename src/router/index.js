import VueRouter from 'vue-router';
// home 展示
// admin 管理
import homeRoutes from './home-routes';
import adminRoutes from './admin-routes';

const routes = homeRoutes.concat(adminRoutes);
routes.push({
  path: '/',
  redirect: '/admin',
});

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes,
});
