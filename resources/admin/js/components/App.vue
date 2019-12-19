<template>
<div>

    <router-view />
    <vue-progress-bar />
        
</div>
    
</template>

<script>
    export default {
        created () {
            // for vue progress bar
            this.$Progress.start(500);
            this.$router.beforeEach((to, from, next) => {
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                this.$Progress.parseMeta(meta)
            }
            this.$Progress.start()
                next()
            })
            this.$router.afterEach((to, from) => {
                this.$Progress.finish()
            })
            // for vue progress bar
        }
    }
</script>
