<template>
<div>
    <Header />
    <Sidebar />

    <div class="content-wrapper">

        <section class="content" style='padding-top: 10px;'>
            <router-view />
            <vue-progress-bar></vue-progress-bar>
        </section>
    </div> 
    
     <Footer />
</div>
    
</template>

<script>

	import router from '../routes.js'
	import Header from '@/components/layout/Header';
	import Footer from '@/components/layout/Footer';
	import Sidebar from '@/components/layout/Sidebar';
    export default {
		router,
        mounted() {
           
        },
        components: {
            Header,
            Footer,
            Sidebar
        },
        created () {
            //  [App.vue specific] When App.vue is first loaded start the progress bar
            this.$Progress.start(500);
            //  hook the progress bar to start before we move router-view
            this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                // parse meta tags
                this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
            })
        }
    }
</script>
