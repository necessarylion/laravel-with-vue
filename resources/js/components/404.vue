<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
				<br>
				<br>
                <div class="card">
                  <h1>404 Page Not Found</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import router from '../routes.js'
    export default {
		router,
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
