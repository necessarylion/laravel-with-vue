// # index.js  inside router folder
import Vue from 'vue';
import Router from 'vue-router';


const  routes = [
  { path: '/fabric/dashboard', name: 'fabric/dashboard', component: view('fabric/Dashboard') },
  { path: '/fabric/lists', name: 'fabric/lists',  component: view('fabric/FabricList') },
  { path: '/fabric/create_order', name: 'fabric/create_order',  component: view('fabric/CreateOrder') },
  { path: '/fabric/view_order', name: 'fabric/view_order',  component: view('fabric/ViewOrder') },
  { path: '/fabric/withdraw_roll', name: 'fabric/withdraw_roll',  component: view('fabric/WithdrawRoll') },
  { path: '/fabric/suppliers', name: 'fabric/suppliers',  component: view('fabric/Suppliers') },
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
