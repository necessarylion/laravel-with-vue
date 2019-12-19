import Vue from 'vue';
import VueProgressBar from 'vue-progressbar'

import Routes from '@admin/routes.js';
import '@admin/bootstrap.js';
import App from '@admin/components/App';

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