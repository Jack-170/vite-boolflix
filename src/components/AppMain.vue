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
    methods: {
    getFullImagePath(imgPath) {

      return `https://image.tmdb.org/t/p/w342${imgPath}`;

      },
    },
   
    
}

</script>

<template>

   <div class="container">
    
        <h2 class="pt-4">Film</h2>

        <AppCatalog/>

        
    </div>
    
  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;





</style>
