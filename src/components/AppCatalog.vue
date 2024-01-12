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
    getFullImagePath(poster_path) {
    const defaultImage = 'https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg';

    
    if (poster_path === null) {
      return defaultImage;
    }else{

        const imageUrl = `https://image.tmdb.org/t/p/w342${poster_path}`;
        return imageUrl;
    }
   
   },
  }
}
    


</script>

<template>
    
    
    <h1 v-if="store.searchedFilm.length > 0" class="mt-4">Film</h1>

    <div class="row flex-wrap">

        <div v-for="film in store.searchedFilm" :key="film.id" class="flip-card">
            
            <div class="flip-card-inner">
                <div class="flip-card-front">

                    <img class="ms-poster-img" :src="getFullImagePath(film.poster_path)" alt="" >
                    
                </div>
                <div class="flip-card-back">                   
                    <div class="p-3">
                        <span class="text-danger">Titolo:</span>
                        <h5 class="d-inline p-2">{{ film.title}}</h5>
                    </div>

                    <p class="p-1"><span class="text-danger">Titolo originale::</span> {{film.original_title }}</p>

                            
                    <div class="text-center">
                        <img :src="store.flagImages[film.original_language] || store.flagImages.otherLang" alt=""> 
                    </div>

                

                    <p>
                        <span v-for="star in 5" :key="star">
                            <i v-if="star <= Math.ceil(film.vote_average / 2)" class="fa-solid fa-star"></i>
                            <i v-else class="fa-regular fa-star"></i>
                        </span>
                    </p> 

                    <h5 class="text-center mb-3">Trama</h5> 
                    
                    <p >{{film.overview}}</p>
                
                
                 </div>
            </div>   


        </div>
    
    </div>


    <h1 v-if="store.searchedSeries.length > 0" class="mt-4">Series</h1>

    <div class="row flex-wrap">

        <div v-for="series in store.searchedSeries" :key="series.id" class="flip-card">

          
            <div class="flip-card-inner">
                <div class="flip-card-front">

                    <img class="ms-poster-img" :src="getFullImagePath(series.poster_path)" alt="">
                    
                </div>
                <div class="flip-card-back">                   
                    <div class="p-3">
                        <span class="text-danger">Titolo:</span>
                        <h5>{{ series.name }}</h5>
                    </div>

                    <p class="p-1">
                        <span class="text-danger">Titolo originale:</span>
                        {{ series.original_name }}
                    </p>

                    <p>
                        <div class="text-center">
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
    width: calc(100% * 1/4);
    padding: 0;
    height: 500px;
    perspective: 1000px; 
  }
  
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 2s;
    transform-style: preserve-3d;
    font-size: 14px;
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
    color: black;
  }
  
  .flip-card-back {
    background-color:black;
    color: white;
    transform: rotateY(180deg);
  }

  h1{
   font-size: 50px;
    font-family: 'Bungee Spice';
  }
  
  
  


</style>
