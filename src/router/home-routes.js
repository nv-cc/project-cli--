export default [
  {
    path: '/home',
    component: fn => import('@/pages/home/index.vue'),
    redirect: '/home/hello',
    children: [
      {
        path: 'hello',
        component: fn => import('@/pages/home/hello/index.vue'),
      }
    ],
  },
];
