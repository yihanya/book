/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-03-26 14:30:03
 * @LastEditTime: 2021-06-08 10:29:52
 * @FilePath: \vuebook\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import axios from 'axios';
import qs from 'qs';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';
// 全局样式
import './assets/css/golobai.css';

Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.prototype.$qs = qs;

Vue.prototype.headurl = 'http://3964u8g173.picp.vip/';
// Vue.prototype.headurl = 'http://192.168.0.12:8080/';

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
