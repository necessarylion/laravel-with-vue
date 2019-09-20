<template>
  <h1>this is View order page {{ type }}</h1>
</template>


<script>

    export default {
      props: ['type'],
      mounted(){
          console.log(this.type)
      }
    }
    
</script>
