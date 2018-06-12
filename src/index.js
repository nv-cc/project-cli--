//add to global
import '@/index.css';
import '@/global.javascript.function';
import '@/global.vendor';
import App from '@/index.vue';
import router from '@/router';
//element-ui
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI);

//生成环境提示
Vue.config.productionTip = false;
//挂载自己常用的vue全局方法
import vue2Plus from '@/global.vue.function';

vue2Plus(new Vue({//生成Vue实例，并且调用 vue2Plus
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
}));

