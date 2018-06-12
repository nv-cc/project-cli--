export default [
  {
    path: '/hello',
    component: fn => import('@/pages/hello/index.vue'),
    /**
     * 等价于
     components: {
      default: fn => import('@/pages/hello/index.vue'), //默认显示名为default的路由
     }
     */
  },
];
