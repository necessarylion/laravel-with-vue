// # index.js  inside router folder
import Vue from 'vue';
import Router from 'vue-router';


const  routes = [
  { path: '/', component: view('Home') },
  { path: '/bar', component: view('Bar') },
  { path: "*", component: view('404') }
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
  linkExactActiveClass: "active"
});


function view(template){
  return require(`./components/${template}.vue`).default ;
}