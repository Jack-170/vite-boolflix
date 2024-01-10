<script>

import { store } from '../store';

export default{
    name:'AppMain',

    data(){
     return{
      store,
     }
    },
    
}

</script>

<template>

   <div class="container">
    
    <h2 class="pt-4">Film</h2>

    <div class="row flex-wrap">

        <div v-for="film in store.searchedFilm" :key="film.id" class="ms-card">

            <p><span class="text-danger">Title:</span> {{film.title}}</p>
            
            <p><span class="text-danger">Original Title:</span> {{film.original_title }}</p>

            <p><span class="text-danger">Original Language:</span> {{ film.original_language }}</p>

            <p><span class="text-danger">Vote Average:</span>{{ film.vote_average }}</p>
           
        </div>
       
    </div>


   </div>
    
  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.ms-card{
    width: calc(100% * 1/6);
    padding: 2rem;
    border: 2px solid blue;
}



</style>
