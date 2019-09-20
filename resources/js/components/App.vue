<template>
<div>
  
<Sidebar />
    <div class="page-container">
        <Header />
            <main class="main-content bgc-grey-100">
                <div id="mainContent">
                    <router-view />
                    <vue-progress-bar />
                </div> 
            </main>
        <Footer />
    </div>
</div>
    
</template>

<script>

	
	import Header from '@/components/layout/Header';
	import Footer from '@/components/layout/Footer';
	import Sidebar from '@/components/layout/Sidebar';
    export default {
        mounted() {
           
        },
        components: {
            Header,
            Footer,
            Sidebar
        },
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
