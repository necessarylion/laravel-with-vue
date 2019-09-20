<template>
  <!-- sidebar   -->
<div class="sidebar">
      <div class="sidebar-inner">
        <div class="sidebar-logo">
          <div class="peers ai-c fxw-nw">
            <div class="peer peer-greed"><a class="sidebar-link td-n" href="index.html">
                <div class="peers ai-c fxw-nw">
                  <div class="peer">
                    <div class="logo"><img src="assets/static/images/logo.png" alt=""></div>
                  </div>
                  <div class="peer peer-greed">
                    <h5 class="lh-1 mB-0 logo-text">Befeni</h5>
                  </div>
                </div>
              </a></div>
            <div class="peer">
              <div class="mobile-toggle sidebar-toggle"><a href="" class="td-n"><i class="ti-arrow-circle-left"></i></a>
              </div>
            </div>
          </div>
        </div>
        <ul class="sidebar-menu scrollable pos-r">
          <li class="nav-item dropdown"><a class="dropdown-toggle" href="javascript:void(0);"><span
                class="icon-holder"><i class="c-orange-500 ti-layout-list-thumb"></i> </span><span
                class="title">Fabrics</span> <span class="arrow"><i class="ti-angle-right"></i></span></a>
            <ul class="dropdown-menu">

                <li v-for="sidebar in fabric_sidebars">
                  <router-link :to="{ name: sidebar.link_name }" class='sidebar-link'>{{sidebar.title}}</router-link>
                </li>

            </ul>
          </li>
        </ul>
      </div>
</div>
<!-- sidebar   -->
</template>

<script>
export default {
  data(){
    return {
        fabric_sidebars : [
            { title : 'Dashboard' , link_name : 'fabric/dashboard' },
            { title : 'List All Fabric' , link_name : 'fabric/lists' },
            { title : 'Place Order' , link_name : 'fabric/create_order' },
            { title : 'View Order' , link_name : 'fabric/view_order' },
            { title : 'Withdraw Fabric Roll' , link_name : 'fabric/withdraw_roll' },
            { title : 'Manage Suppliers' , link_name : 'fabric/suppliers' },
        ]
    }
  }
}
</script>