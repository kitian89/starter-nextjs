var mongoose = require('mongoose');
console.log('mongoose looded')
mongoose.connect('mongodb+srv://asdtagliamento:Taglia1970@cluster0.gp2m3ft.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
      }
);

var Schema = mongoose.Schema;

var mainCarouselSchema = new Schema ({
    foto: String
})

var mainCarouselMobileSchema = new Schema ({
    foto: String
})

var newsSchema = new Schema ({
    titolo: String,
    foto: String,
    descrizione: String
})

var personaSchema = new Schema ({
    nome: String,
    cognome: String,
    ruolo: String,
    foto: String
})

var sponsorsSchema = new Schema ({
    url: String,
    foto: String,
    mostraHome: Boolean
})

var contributoSchema = new Schema ({
    ente: String,
    descrizione: String,
    legge: String,
    contributo: String,
    anno: String
})

var coppaChiosco = new Schema ({
    nome: String,
    qty: Number
})

var squadreTorneo = new Schema ({
    nome: String,
    girone: Number,
    punti: Number,
    marcatori: String
})

var partiteTorneo = new Schema ({
    live: Boolean,
    ora: String,
    giorno: String,
    campo: Number,
    girone: Number,
    squadra_casa: String,
    gol_casa: Number,
    marcatori_casa: String,
    squadra_ospite: String,
    gol_ospite: Number,
    marcatori_ospite: String,
    finita: Boolean
})

var databaseSchema = new Schema({
    homeCarousel: [mainCarouselSchema],
    homeCarouselMobile: [mainCarouselMobileSchema],
    news: [newsSchema],
    rosa: [personaSchema],
    organigramma: [personaSchema],
    sponsors: [sponsorsSchema],
    contributi: [contributoSchema],
    coppaChiosco: [coppaChiosco],
    squadreTorneo: [squadreTorneo],
    partiteTorneo: [partiteTorneo]
});

var database = mongoose.model('database', databaseSchema);

module.exports = database;
