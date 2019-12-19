<template>
    <div>
    <Header />
        <div class="page-body">
            <Sidebar />
                <div class="page-content-wrapper">
                    <div class="page-content-wrapper-inner">
                        <div class="content-viewport">
                            <router-view />
                            <vue-progress-bar />
                        </div> 
                    </div> 
                    <Footer />
            </div>
        </div>
    </div>
    
</template>

<script>
	import Header from '@admin/components/layout/Header';
	import Footer from '@admin/components/layout/Footer';
	import Sidebar from './Sidebar';
    export default {
        components: {
            Header,
            Footer,
            Sidebar
        },
    }
</script>
