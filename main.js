import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 局部引入vant组件会导致样式失效，我改成了全局引入
import Vant from 'vant';
// 引入index.css会报错,所以换成了index.less
import 'vant/lib/index.less';

Vue.use(Vant);
// 1366设计稿适配iPad
import rem from '@/assets/js/rem'
// 1366设计稿适配iPad
rem.getSize()

// ajax
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios;   // 2、在vue中使用axios


Vue.use(VueAxios, axios);


const app = new Vue({
    ...App
})
app.$mount()
