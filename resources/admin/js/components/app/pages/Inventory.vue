<template>
    <h1>this is Inventory</h1>
</template>

<script>
export default {
    mounted() {
        axios.get('/user').then(res=>{
            console.log(res);
        })
    }
}
</script>