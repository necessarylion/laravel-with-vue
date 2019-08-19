import './bootstrap';
import Vue from 'vue';
import VueProgressBar from 'vue-progressbar'

import Routes from '@/routes.js';
import App from '@/components/App';

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '2px',
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