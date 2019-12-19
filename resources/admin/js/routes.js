import Vue from 'vue';
import Router from 'vue-router';


const  routes = [

  //for main app route
  { 
    path: '/',
    component: render('app/App') ,
    children: [
      { path: 'invoice', component: render('app/pages/Invoice')  },
      { path: 'inventory/create', component: render('app/pages/Inventory')  },
      { path: 'inventory/listing', component: render('app/pages/Inventory')  },
      { path: '', component: render('app/pages/Home')  },
    ],
  
  },

  {
    path: '/login',
    component: render('auth/Login'),
   
  },

  //for 404 page
  { path: "*", component: render('404') }
  
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
  linkExactActiveClass: "active"
});


function render(template){
  return require(`@admin/components/${template}.vue`).default ;
}
