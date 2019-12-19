import Vue from 'vue';
import VueProgressBar from 'vue-progressbar'

import Routes from '@admin/routes.js';
import './bootstrap';
import App from '@admin/components/App';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "http://admin.fashion.test/api/";
Vue.router = Routes;

Vue.use(require('@websanova/vue-auth'), {   
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),   
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),   
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'role'
});

const options = {
    color: '#DB504A',
    failedColor: '#874b4b',
    thickness: '3px',
    transition: {
      speed: '1s',
      opacity: '0.6s',
      termination: 500
    },
    autoRevert: true,
    location: 'top',
    inverse: false
  }
  
Vue.use(VueProgressBar, options)


const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App), 
})

export default app;