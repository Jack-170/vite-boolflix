import { reactive } from "vue"

export const store = reactive({
    
    searchedText:'',

    searchedFilm: [],

    searchedSeries: [],

    generalApiUrl:'https://api.themoviedb.org/3/search/movie?api_key=9812158c30f86669bef81b24d5c322d5&language=it-IT',

    generalSeriesApiUrl:'https://api.themoviedb.org/3/search/tv?api_key=9812158c30f86669bef81b24d5c322d5&language=it_IT',

    flagImages: {
        'en': 'https://3.bp.blogspot.com/_Ev6FQPjnZQo/SlH2vWD2SkI/AAAAAAAAAf8/wkJQ0buKXTc/s320/england+flag.jpg',
        'it': 'https://www.bandiere-mondo.it/data/flags/small/it.png',
        'ja': 'https://th.bing.com/th/id/R.5662141ef870b5eb6de552f53d59d571?rik=%2fQpFwONlLG5WoA&riu=http%3a%2f%2fwww.worldatlas.com%2fr%2fw1200-h630-c1200x630%2fupload%2f2d%2fd4%2fa7%2funtitled-design-153.jpg&ehk=r2YnmdcDPhyTIq3BD81Av17GAwHpACH4eMHLJYz%2fFxg%3d&risl=&pid=ImgRaw&r=0',
        'es': 'https://toppng.com/uploads/thumbnail/flag-of-spain-vector-logo-11574321406f5bcs5f8fc.png',
        'otherLang': 'https://images-na.ssl-images-amazon.com/images/I/21TSl-XcHNL._AC_UL160_SR160,160_.jpg'
        
    },

});