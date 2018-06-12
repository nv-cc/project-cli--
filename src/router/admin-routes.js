export default [
  {
    path: '/admin',
    component: fn => import('@/pages/admin/index.vue'),
    children: [
      {
        path: 'welcome',
        components: {
          dash: fn => import('@/pages/admin/welcome/index.vue')
        }
      },
    ]
  }
];
