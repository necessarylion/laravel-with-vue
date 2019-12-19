<template>
    <div class="error_page error_2">
      <div class="container inner-wrapper">
        <h1 class="display-1 error-heading">404</h1>
        <h2 class="error-code">Page Not Found</h2>
        <p class="error-message">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <router-link :to="{path:'/'}" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        }
    }
</script>
