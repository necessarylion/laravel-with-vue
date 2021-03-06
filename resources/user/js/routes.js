import Vue from 'vue';
import Router from 'vue-router';


const  routes = [

  { 
    path: '/',
    component: view('app/HomePage')
  },
  

  //for 404 page
  { path: "*", component: view('404') }
  
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
  linkExactActiveClass: "active"
});


function view(template){
  return require(`@user/components/${template}.vue`).default ;
}
