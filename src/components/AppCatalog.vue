<script>
import { store } from '../store';

export default{
    name:'AppCatalog',
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

    <div class="row flex-wrap">

        <div v-for="film in store.searchedFilm" :key="film.id" class="flip-card mb-4">
            
            <div class="flip-card-inner">
                <div class="flip-card-front">

                    <img class="ms-poster-img" :src="getFullImagePath(film.poster_path)" alt="">
                    
                </div>
                <div class="flip-card-back">                   
                    <div>
                        <span class="text-danger">Titolo:</span>
                        <h4 class="d-inline p-2">{{ film.title}}</h4>
                    </div>

                    <p><span class="text-danger">Titolo originale::</span> {{film.original_title }}</p>

                            
                    <div class="text-center p-1">
                        <img :src="store.flagImages[film.original_language] || store.flagImages.otherLang" alt=""> 
                    </div>

                

                    <p>
                        <span v-for="star in 5" :key="star">
                            <i v-if="star <= Math.ceil(film.vote_average / 2)" class="fa-solid fa-star"></i>
                            <i v-else class="fa-regular fa-star"></i>
                        </span>
                    </p> 

                    <h5 class="text-center mb-3">Trama</h5> 
                    
                    <p>{{film.overview}}</p>
                
                
                 </div>
            </div>   


        </div>
    
    </div>


    <h2 class="pt-4">Series</h2>

    <div class="row flex-wrap">

        <div v-for="series in store.searchedSeries" :key="series.id" class="flip-card">

          
            <div class="flip-card-inner">
                <div class="flip-card-front">

                    <img class="ms-poster-img" :src="getFullImagePath(series.poster_path)" alt="">
                    
                </div>
                <div class="flip-card-back">                   
                    <div>
                        <span class="text-danger">Titolo:</span>
                        <h4>{{ series.name }}</h4>
                    </div>

                    <p>
                        <span class="text-danger">Titolo originale:</span>
                        {{ series.original_name }}
                    </p>

                    <p>
                        <div class="text-center p-3">
                           <img :src="store.flagImages[series.original_language] || store.flagImages.otherLang" alt=""> 
                        </div>
                    </p>
        
                    <p>
                        <span v-for="star in 5" :key="star">
                            <i v-if="star <= Math.ceil(series.vote_average / 2)" class="fa-solid fa-star"></i>
                            <i v-else class="fa-regular fa-star"></i>
                        </span>
                    </p> 

                    <h5 class="text-center mb-3">Trama</h5> 
                    
                    <p>{{series.overview}}</p>
                </div>
            </div>   
             
        </div>
        
    </div>
    
  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

    .ms-poster-img{
        width: 100%;
        height: 100%;
    }

    img{
        width: 30px;
        height: 30px;
    }
    

    




.fa-star{
    color: white;
    padding: 0.2rem;
}


.flip-card {
    background-color: transparent;
    width: calc((100% * 1/4) - 20px);
    padding: 0;
    margin-right: 20px;
    height: 400px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; 
  }
  
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
 
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-back {
    background-color:black;
    color: white;
    transform: rotateY(180deg);
  }
  
  
  


</style>
