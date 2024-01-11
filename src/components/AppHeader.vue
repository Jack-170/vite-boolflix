<script>
import { store } from '../store';

export default{
    name:'AppHeader',
    data(){
     return{
      store,
     }
    },
    methods: {
        searchMedia() {
            this.$emit('search');
        },
    },
}

</script>

<template>

    <div class="container-fluid d-flex justify-content-between">
        <div>
            <h1 class="p-4">Boolflix</h1>
        </div>

        <div>
            <div class="input-group p-4">
                <input type="text" class="form-control" placeholder="Cerca..." aria-label="Cerca" aria-describedby="button-addon2" v-model.trim="store.searchedText">

                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click.prevent="searchMedia">
                    Search
                </button>
            </div>    
        </div>
    </div>
    
  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.container-fluid{
    background-color: black;
    color: rgb(255, 0, 0);
}

</style>
