<script>

import { store } from '../store';

import AppCatalog from '../components/AppCatalog.vue'

export default{
    name:'AppMain',

    components:{

        

        AppCatalog


    },

    data(){
     return{
      store,
     }
    },
   
    
}

</script>

<template>

   <div class="container">
    

        <AppCatalog/>

        
    </div>
    
  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;





</style>
