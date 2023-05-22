var express = require('express'),
    fileUpload = require('express-fileupload')
    app = express(),
    url = require('url'),
    querystring = require('querystring'),
    bodyParser = require("body-parser"),
    mongo = require('mongodb'),
    mongoose = require('mongoose'),
    router = express.Router(),
    fs = require('fs'),
    util = require('util'),
    port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

// map urls
app.get('/', function(req, res) {
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('tagliamento.ejs', {database: data, title: 'Home', env: env, host: host, pageUrl: pageUrl})
    });
}).get('/rosa', function(req, res) {
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_rosa.ejs', {database: data, title: 'Rosa', env: env, host: host, pageUrl: pageUrl})
    });
}).get('/classifica', function(req, res) {
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_classifica.ejs', {database: data, title: 'Classifica', env: env, host: host, pageUrl: pageUrl})
    });
}).get('/news', function(req, res) {
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_news.ejs', {database: data, title: 'News', env: env, host: host, pageUrl: pageUrl})
    });
}).get('/organigramma', function(req, res) {
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_organigramma.ejs', {database: data, title: 'Organigramma', env: env, host: host, pageUrl: pageUrl})
    });
}).get('/partite-risultati', function(req, res) {
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_partite_risultati.ejs', {database: data, title: 'Risultati', env: env, host: host, pageUrl: pageUrl})
    });
})/*.get('/storia', function(req, res) {
    var env = req.hostname && (req.hostname.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging'
    var database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_storia.ejs', {database: data, title: 'Storia', env: env})
    });
})*/.get('/sponsors', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')
    
    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_sponsors.ejs', {database: data, title: 'Sponsors', env: env, host: host, pageUrl: pageUrl})
    });
}).get('/contatti', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_contatti.ejs', {database: data, title: 'Contatti', env: env, host: host, pageUrl: pageUrl})
    });
    
}).get('/divise', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_divise.ejs', {database: data, title: 'Divise', env: env, host: host, pageUrl: pageUrl})
    });
    
}).get('/contributi-pubblici', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_contributi.ejs', {database: data, title: 'Contributi Pubblici', env: env, host: host, pageUrl: pageUrl})
    });
    
}).get('/admin', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    res.setHeader('X-Robots-Tag', 'noindex');
    
    database.find({}).exec(function(err, data) {
        if (err){ console.log('----- errro ----'); throw err};
        console.log('----- data ----')
        console.log(data);
        console.log(typeof data)

        if(data.length == []){
            console.log('create db')

            var newDb = new database()
            newDb.save(function(err) {
                if (err) throw err;
                console.log('Salvataggio completato');
    
                database.find({}, (err, data) => {
                    if (err){ throw err};
                    console.log('render')
                    console.log(data)
                    res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
                });            
            })
        }else {
            console.log('db already created')
            res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
        }
        
    });
}).post('/admin', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module'),
        params = req.body

    res.setHeader('X-Robots-Tag', 'noindex');

    console.log('form-submitted: ' + params['form-submitted'])

    if(params['form-submitted']){

        var toPush = {},
            toPull  = {},
            elToSet = {},
            toSet = {},
            action = '',
            fileName = req.files ? req.files.sampleFile.name : false

        switch(params['form-submitted']) {
        
        // -------------------------- ADD ----------------------------------------
            case 'addBanner':
                folder = 'home'
                action = 'add'
                toPush = {
                    homeCarousel: {
                        foto: fileName ? fileName : 'no-home-banner-img.png'
                    }
                }
                break;
            
            case 'addBannerMobile':
                folder = 'home'
                action = 'add'
                toPush = {
                    homeCarouselMobile: {
                        foto: fileName ? fileName : 'no-home-banner-img.png'
                    }
                }
                break;
            
            case 'addNews':
                folder = 'news'
                action = 'add'
                toPush = {
                    news: {
                        titolo: params.news_titolo,
                        descrizione: params.news_descrizione,
                        foto: req.files ? fileName : 'no-news-img.png'
                    }
                }
                break;
            case 'addPlayer':
                folder = 'people'
                action = 'add'
                toPush = {
                    rosa: {
                        nome: params.giocatore_nome,
                        cognome: params.giocatore_cognome,
                        ruolo: params.giocatore_ruolo,
                        foto: req.files ? fileName : 'no-people-img.png'
                    }
                }
                break;
            case 'addComponent':
                folder = 'people'
                action = 'add'
                toPush = {
                    organigramma: {
                        nome: params.componente_nome,
                        cognome: params.componente_cognome,
                        ruolo: params.componente_ruolo,
                        foto: req.files ? fileName : 'no-people-img.png'
                    }
                }
                break;
            case 'addSponsor':
                folder = 'sponsors'
                action = 'add'
                toPush = {
                    sponsors: {
                        url: params.sponsor_url,
                        mostraHome: params.sponsor_mostra_su_home == 'si' ? true : false,
                        foto: req.files ? fileName : 'no-sponsor-img.png'
                    }
                }
                break;
            case 'addContributo':
                folder = 'contributo'
                action = 'add'
                toPush = {
                    contributi: {
                        ente: params.contributo_ente,
                        descrizione: params.contributo_descrizione,
                        legge: params.contributo_legge,
                        contributo: params.contributo_euro,
                        anno: params.contributo_anno,
                    }
                }
                break;
        // -------------------------- REMOVE ----------------------------------------
            case 'removeHomeBanner':
                action = 'remove'
                toPull = {"$pull": {'homeCarousel': { '_id': params['home-banner-id']} }}
                break;

            case 'removeHomeBannerMobile':
                action = 'remove'
                toPull = {"$pull": {'homeCarouselMobile': { '_id': params['home-banner-id']} }}
                break;

            case 'removeNews':
                action = 'remove'
                toPull = {"$pull": {'news': { '_id': params['news-id']} }}
                break;

            case 'removePlayer':
                action = 'remove'
                toPull = {"$pull": {'rosa': { '_id': params['player-id']} }}
                break;
                
            case 'removeComponent':
                action = 'remove'
                toPull = {"$pull": {'organigramma': { '_id': params['component-id']} }}
                break;
            
            case 'removeSponsor':
                action = 'remove'
                toPull = {"$pull": {'sponsors': { '_id': params['sponsor-id']} }}
                break;
            case 'removeContributo':
                action = 'remove'
                toPull = {"$pull": {'contributi': { '_id': params['contributo-id']} }}
                break;

        // -------------------------- UPDATE ----------------------------------------
            case 'editNews':
                action = 'update'
                folder = 'news'
                elToSet = {
                    _id: params['databaseID'],
                    'news._id': params['news-id']
                }
                toSet = {
                    "$set": {
                        'news.$.titolo': params['news_titolo'], 
                        'news.$.descrizione': params['news_descrizione'],
                        'news.$.foto': req.files ? fileName : params['news-oldImg']
                    }
                }
                break;

            case 'editPlayer':
                action = 'update'
                folder = 'people'
                elToSet = {
                    _id: params['databaseID'],
                    'rosa._id': params['player-id']
                }
                toSet = {
                    "$set": {
                        'rosa.$.nome': params['giocatore_nome'], 
                        'rosa.$.cognome': params['giocatore_cognome'],
                        'rosa.$.ruolo': params['giocatore_ruolo'],
                        'rosa.$.foto': req.files ? fileName : params['player-oldImg']
                    }
                }
                break;
            
            case 'editComponent':
                action = 'update'
                folder = 'people'
                elToSet = {
                    _id: params['databaseID'],
                    'organigramma._id': params['component-id']
                }
                toSet = {
                    "$set": {
                        'organigramma.$.nome': params['componente_nome'], 
                        'organigramma.$.cognome': params['componente_cognome'],
                        'organigramma.$.ruolo': params['componente_ruolo'],
                        'organigramma.$.foto': req.files ? fileName : params['component-oldImg']
                    }
                }
                break;

            case 'editSponsor':
                action = 'update'
                folder = 'sponsors'
                elToSet = {
                    _id: params['databaseID'],
                    'sponsors._id': params['sponsor-id']
                }
                toSet = {
                    "$set": {
                        'sponsors.$.url': params['sponsor_url'], 
                        'sponsors.$.mostraHome': params.sponsor_mostra_su_home == 'si' ? true : false,
                        'sponsors.$.foto': req.files ? fileName : params['sponsor-oldImg']
                    }
                }
                break;

        // DEFAULT NO MATCH
            default:
              console.log(`No match`);
        }


        if(action == 'add'){
            console.log('action ADD')
            var fs = require('fs'),
                dir = './public/images/upload/' + folder + '/',
                folder = '',
                dbId = params.databaseID
            

            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }

            if (!req.files || Object.keys(req.files).length === 0) {
                database.findOneAndUpdate(
                    {_id: dbId},
                    {"$push": toPush},
                    {new: true},
                    function(err) {
                        if (err) throw err;
                        console.log('add completato');
        
                        database.find({}, (err, data) => {
                            if (err){ throw err};
                            console.log('render')
                            console.log(data)
                            res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
                        });
                    }
                )
            }else {
                // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
                let sampleFile = req.files.sampleFile;
                // Use the mv() method to place the file somewhere on your server
                sampleFile.mv(dir + fileName, function(err) {
                    if (err)
                        return res.status(500).send(err);

                    database.findOneAndUpdate(
                        {_id: dbId},
                        {"$push": toPush},
                        {new: true},
                        function(err) {
                            if (err) throw err;
                            console.log('add completato');
            
                            database.find({}, (err, data) => {
                                if (err){ throw err};
                                console.log('render')
                                console.log(data)
                                res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
                            });
                        }
                    )
                });
            }
        }else if(action == 'remove'){
            database.findOneAndUpdate({_id: params['idDatabase']}, toPull, function(err) {
                if (err) throw err;
                console.log('Delete completato');
    
                database.find({}, (err, data) => {
                    if (err){ throw err};
                    console.log('render')
                    console.log(data)
                    res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
                });    
            })
        }else if(action == 'update'){  
            console.log('update')          

            var fs = require('fs'),
                dir = './public/images/upload/' + folder + '/',
                folder = '',
                dbId = params.databaseID
            

            if (!fs.existsSync(dir)){
                console.log('create folder')
                fs.mkdirSync(dir);
            }

            if (!req.files || Object.keys(req.files).length === 0) {
                console.log('1')

                database.findOneAndUpdate(elToSet, toSet, function(err) {
                    if (err) throw err;
                    console.log('update completato');
    
                    database.find({}, (err, data) => {
                        if (err){ throw err};
                        console.log('render')
                        console.log(data)
                        res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
                    });           
                }
            )
            }else {
                console.log('2')
                // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
                let sampleFile = req.files.sampleFile;
                // Use the mv() method to place the file somewhere on your server
                sampleFile.mv(dir + fileName, function(err) {

                    console.log('3')
                    if (err)
                        return res.status(500).send(err);

                    database.findOneAndUpdate(elToSet, toSet, function(err) {
                        if (err) throw err;
                        console.log('update completato');
        
                        database.find({}, (err, data) => {
                            if (err){ throw err};
                            console.log('render')
                            console.log(data)
                            res.render('t_admin.ejs', {database: data, title: 'Admin', env: env, host: host, pageUrl: pageUrl})
                        });           
                    }
                    )
                });
            }
        }
    }
})
.get('/cc_classifica', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'staging' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_cc_classifica', {database: data, title: 'Coppa Chiosco Classifica', env: env, host: host, pageUrl: pageUrl})
    });
})
.get('/cc_gestione', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'staging' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_cc_gestione', {database: data, title: 'Coppa Chiosco Admin', env: env, host: host, pageUrl: pageUrl})
    });

})
.get('/cc_classifica_script', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'staging' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module')

    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    database.find({}, (err, data) => {
        if (err){ throw err};
        res.render('t_cc_classifica_script', {database: data, title: 'Coppa Chiosco script', env: env, host: host, pageUrl: pageUrl})
    });

})








.post('/cc_gestione', function(req, res){
    var host = req.hostname,
        env = host && (host.indexOf('asdtagliamento.it') != -1) ? 'staging' : 'staging',
        pageUrl = req.url,
        database = require('./tagliamento_module'),
        params = req.body

    res.setHeader('X-Robots-Tag', 'noindex');

    console.log('form-submitted: ' + params['form-submitted'])

    if(params['form-submitted']){

        var toPush = {},
            toPull  = {},
            elToSet = {},
            toSet = {},
            action = ''

        switch(params['form-submitted']) {
        
        // -------------------------- ADD ----------------------------------------
            case 'addTeam':
                action = 'add'
                toPush = {
                    coppaChiosco: {
                        nome: params.name,
                        qty: params.qty
                    }
                }
                break;
        // -------------------------- REMOVE ----------------------------------------
            
            case 'removeTeam':
                action = 'remove'
                toPull = {"$pull": {'coppaChiosco': { '_id': params['coppaChiosco-id']} }}
                break;

        // -------------------------- UPDATE ----------------------------------------
            case 'editTeam':
                action = 'update'
                elToSet = {
                    _id: params['databaseID'],
                    'coppaChiosco._id': params['coppaChiosco-id']
                }
                toSet = {
                    "$set": {
                        'coppaChiosco.$.nome': params['name'], 
                        'coppaChiosco.$.qty': params['qty'],
                    }
                }
                break;
        // DEFAULT NO MATCH
            default:
              console.log(`No match`);
        }


        if(action == 'add'){
            console.log('action ADD')
            var dbId = params.databaseID
            
            database.findOneAndUpdate(
                {_id: dbId},
                {"$push": toPush},
                {new: true},
                function(err) {
                    if (err) throw err;
                    console.log('add completato');
    
                    database.find({}, (err, data) => {
                        if (err){ throw err};
                        console.log('render')
                        console.log(data)
                        res.render('t_cc_gestione.ejs', {database: data, title: 'Coppa Chiosco Admin', env: env, host: host, pageUrl: pageUrl})
                    });
                }
            )
        }else if(action == 'remove'){
            database.findOneAndUpdate({_id: params['idDatabase']}, toPull, function(err) {
                if (err) throw err;
                console.log('Delete completato');
    
                database.find({}, (err, data) => {
                    if (err){ throw err};
                    console.log('render')
                    console.log(data)
                    res.render('t_cc_gestione.ejs', {database: data, title: 'Coppa Chiosco Admin', env: env, host: host, pageUrl: pageUrl})
                });    
            })
        }else if(action == 'update'){  
            console.log('update')          

            database.findOneAndUpdate(elToSet, toSet, function(err) {
                if (err) throw err;
                console.log('update completato');

                database.find({}, (err, data) => {
                    if (err){ throw err};
                    console.log('render')
                    console.log(data)
                    res.render('t_cc_gestione.ejs', {database: data, title: 'Coppa Chiosco Admin', env: env, host: host, pageUrl: pageUrl})
                });           
            })
        }
    }
})
/*
    NOT FOUND!!!!
*/
.use(function(req, res, next){
    var env = req.hostname && (req.hostname.indexOf('asdtagliamento.it') != -1) ? 'production' : 'staging'
    
    if(env == 'staging'){
        res.setHeader('X-Robots-Tag', 'noindex');
    }

    res.render('404.ejs', {env: env, title: '404'})
});

app.listen(port);


/*
    DELETE
    home.deleteOne({ _id: '5fb451d73abdfdb41639c593' }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
    });



*/