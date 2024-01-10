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
        getFilm() {
        let myUrl = store.generalApiUrl;

        if (store.searchedFilm !== "") {
            myUrl += `&query=${store.searchedText}`;
        }

        axios
            .get(myUrl)
            .then((res) => {
            console.log(res.data.results);
            store.searchedFilm = res.data.results;
            })
            .catch((err) => {
            console.log("Errori", err);
            });
        },
    },
    created(){

        this.getFilm()

    }
    
}

</script>

<template>
    <header>
        <AppHeader @search="getFilm"/>
    </header>

    <main>
        <AppMain/>
    </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
