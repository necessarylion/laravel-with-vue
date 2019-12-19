<template>
     <div class="authentication-theme auth-style_1">

      <div class="row">
        <div class="col-12 logo-section">
          <a class="logo">
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 col-md-7 col-sm-9 col-11 mx-auto">
          <div class="grid">
            <div class="grid-title text-center mt-5">
              <h4>WELCOME BACK</h4> 
            </div>
            <div class="grid-body">
              <div class="row">
                <div class="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">
                  
                    <div class="form-group input-rounded">
                      <input type="text" v-model="formData.username" class="form-control form-control-lg" placeholder="Username" />
                    </div>
                    <div class="form-group input-rounded">
                      <input type="password" v-model="formData.password" class="form-control form-control-lg" placeholder="Password" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-block" @click="login()"> Login </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="auth_footer">
        <p class="text-muted text-center">Copyright ©  www.fashion.com</p>
      </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            formData : {
                username : null,
                password : null
            },
            error : null
        }
    },
    async mounted() {
    
    },
    methods : {
      login() {
        this.$auth.login({
            data: this.formData, // Axios
            rememberMe: true,
            redirect: '/',
            fetchUser: true
        })
        .then(() => {
            console.log('success ' + this.context);
        }, (res) => {
            console.log('error ' + this.context);
            this.error = res.data;
        });
      }
    }
}
</script>