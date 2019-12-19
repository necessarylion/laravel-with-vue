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
            <div class="grid-body">
              <div class="row">
                <div class="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">
                  <form action="#">
                    <div class="form-group input-rounded">
                      <input type="text" v-model="username" class="form-control form-control-lg" placeholder="Username" />
                    </div>
                    <div class="form-group input-rounded">
                      <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password" />
                    </div>
                    <div class="form-inline">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class="form-check-input" />Remember me <i class="input-frame"></i>
                        </label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block"> Login </button>
                  </form>
                  <div class="signup-link">
                    <p>Don't have an account yet?</p>
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="auth_footer">
        <p class="text-muted text-center">© Label Inc 2019</p>
      </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            fromData : {
                username : null,
                password : null
            }
        }
    }
}
</script>