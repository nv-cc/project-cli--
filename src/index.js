//add to global
import './index.css';
import './global.function';
import './global.vendor';
import App from '@/index.vue';
import router from '@/router';
//element-ui
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI);

//生成环境提示
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
