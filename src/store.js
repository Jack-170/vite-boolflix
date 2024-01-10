import { reactive } from "vue"

export const store = reactive({
    
    searchedText:'',

    searchedFilm: [],

    generalApiUrl:'https://api.themoviedb.org/3/search/movie?api_key=9812158c30f86669bef81b24d5c322d5&language=it-IT'

});