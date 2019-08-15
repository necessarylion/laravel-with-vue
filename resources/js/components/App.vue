<template>
<div>
    <Header />
    <Sidebar />

    <div class="content-wrapper">

        <section class="content" style='padding-top: 10px;'>
            <router-view />
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
            console.log(this.$route.path)
        },
        components: {
            Header,
            Footer,
            Sidebar
        },
    }
</script>
