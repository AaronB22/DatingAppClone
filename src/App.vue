<script>
  import FooterComp from './components/Footer/FooterComp.vue'
  export default{
    components:{
      FooterComp
    }
  }
</script>
   
<template>

  <RouterView/>
  <FooterComp/>
</template>


<style>
  body{
    background-color: gainsboro;
  }
</style>
