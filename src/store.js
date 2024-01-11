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
        'fr': 'https://th.bing.com/th/id/R.789e1822b3b0e31ec3a3af63c47a328a?rik=67PETB8LqXNx3w&riu=http%3a%2f%2fi148.photobucket.com%2falbums%2fs6%2famandavivina%2fBanderas%2ffrancia5B15D1.gif%3ft%3d1245020616&ehk=Y7XPV6dvBrEJ3J5onEpxiZTNEA%2bN95pJ7BnTWrTaY0o%3d&risl=&pid=ImgRaw&r=0',
        'otherLang': 'https://media.istockphoto.com/vectors/flag-in-colors-of-mauritius-vector-image-vector-id952990812?b=1&k=6&m=952990812&s=170x170&h=wOEZtFkUe9dpqGDydVg1x4uSws_bhogZCAalh8XoTWo='
        
    },

});