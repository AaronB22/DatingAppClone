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
  <div class="bottomFooter">
    <FooterComp/>

  </div>
</template>


<style>
  .bottomFooter{
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
</style>
