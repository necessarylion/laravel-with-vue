<template>
	
<aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link navbar-primary">
      <img src="/assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text text-white text-uppercase">ADmin Lte</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
    

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
			   
    <li class="nav-header">ADMIN PANEL</li>
    
    <li class="nav-item">
      <router-link to='/'
         class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Dashboard
            </p>
     
      </router-link>
    </li>


    <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Inventory
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="inventory/inventory.php" class="nav-link ">
                <i class="far fa-circle text-danger nav-icon"></i>
                <p>Overview</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./index2.html" class="nav-link">
                <i class="far fa-circle text-success nav-icon"></i>
                <p>Inventory Summary</p>
              </a>
            </li>
          </ul>
    </li>
          

      <li class="nav-item">
        <router-link to='/bar'
        class="nav-link ">
              <i class="nav-icon fas fa-folder-open"></i>
              <p>
                Order Document
              </p>
        
        </router-link>
      </li>

      <li class="nav-item">
            <a href="user-admin/index.php" class="nav-link ">
              <i class="nav-icon fas fa-user"></i>
              <p>
                Admin
              </p>
            </a>
      </li>


    <li class="nav-item">
          <a href="pages/widgets.html" class="nav-link">
            <i class="nav-icon fas fa-users"></i>
            <p>
              User
            </p>
          </a>
    </li>




  		  
  </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>


</template>


<script>
export default {
  
}
</script>