<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default{
    components:{
        
        AppHeader,
        AppMain
    },
    data(){
     return{
      store,
     }
    },

    methods: {

        getMedia(){

            this.getFilm();
            this.getSeries();

        },

        getFilm() {
        let myUrl = store.generalApiUrl;

        if (store.searchedText !== "") {
            myUrl += `&query=${store.searchedText}`;
        }

        axios
            .get(myUrl)
            .then((res) => {
                console.log(res.data.results)
                store.searchedFilm = res.data.results;
            })
            .catch((err) => {
            console.log("Errori", err);
            });
        },

        getSeries(){
            let mySeriesUrl = store.generalSeriesApiUrl;

            if (store.searchedText !== ""){
                mySeriesUrl += `&query=${store.searchedText}`;
            }

            axios
            .get(mySeriesUrl)
            .then((res) => {
                console.log(res.data.results)
                store.searchedSeries = res.data.results;
            })
            .catch((err) => {
            console.log("Errori", err);
            });
        },
        
    },
    created(){

        this.getMedia()

    }
    
}

</script>

<template>
    <header>
        <AppHeader @search="getMedia"/>
    </header>

    <main>
        
        <AppMain/>
    </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;

header{
    height: 100px;
}

main{
    height: calc(100vh - 100px);
    overflow: auto;
    background-color: rgb(191, 191, 191);
}




</style>
