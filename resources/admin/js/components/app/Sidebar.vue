<template>
 <div class="sidebar">
  <div class="user-profile">
    <div class="display-avatar animated-avatar">
      <img class="profile-img img-lg rounded-circle" src="/assets/images/profile/male/image_1.png" alt="profile image">
    </div>
    <div class="info-wrapper">
      <p class="user-name">Ajay Pitlaal</p>
    </div>
  </div>

  <ul class="navigation-menu">

    <li class="nav-category-divider">MAIN</li>
    <li>
      <router-link :to="{path:'/'}">
        <span class="link-title">Dashboard</span>
        <i class="mdi mdi-gauge link-icon"></i>
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/invoice'}">
        <span class="link-title">Invoice</span>
        <i class="mdi mdi-gauge link-icon"></i>
      </router-link>
    </li>

    <li>
      <a href="#sample-pages" data-toggle="collapse" aria-expanded="false">
        <span class="link-title">Inventory</span>
        <i class="mdi mdi-flask link-icon"></i>
      </a>
      <ul class="collapse navigation-submenu" id="sample-pages">
        <li>
          <router-link :to="{path:'/inventory/listing'}">Inventory Overview</router-link>
        </li>
        <li>
          <router-link :to="{path:'/inventory/create'}">Add Inventory</router-link>
        </li>
      </ul>
    </li>
  </ul>


</div>
</template>

<script>
export default {
  data(){
    return {
        
    }
  }
}
</script>


<style scoped>
.sidebar .navigation-menu li a.active .link-title,
.sidebar .navigation-menu li a.active .link-icon {
    color: #696ffb;
}
.sidebar .navigation-menu li .navigation-submenu li a.active {
    opacity: 0.7;
    color: #696ffb;
}
</style>