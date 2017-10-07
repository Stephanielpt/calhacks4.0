var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// var events = new Array(24);
var iMax = 24;
var jMax = 10;
var events = new Array();

for (i=0;i<iMax;i++) {
    events[i] = new Array();
    for (j=0;j<jMax;j++) 
    {
        events[i][j] = '';
    }
}

var app = express();
var pms = ["12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm"];
var ams = ["12:00am","1:00am","2:00am","3:00am","4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am","11:00am"];

/* Using the sessions */
app.use(session({secret: 'todotopsecret'}))


//what to print out - the lsit of events going on at all hours - really[24][10]


.use(function(req, res, next){
    req.session.amlist = ["12:00am","1:00am","2:00am","3:00am","4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am","11:00am"];
    next();
})

.use(function(req, res, next){
    req.session.pmlist = ["12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm"];
    next();
})

.use(function(req, res, next){
    req.session.events = events;
    next();
})

.use(function(req, res, next){
        req.session.twelvea = [];
    next();
})
.use(function(req, res, next){
        req.session.elevena = [];
    next();
})
.use(function(req, res, next){
        req.session.tena = [];
    next();
})
.use(function(req, res, next){
        req.session.ninea = [];
    next();
})
.use(function(req, res, next){
        req.session.eighta = [];
    next();
})
.use(function(req, res, next){
        req.session.sevena = [];
    next();
})
.use(function(req, res, next){
        req.session.sixa = [];
    next();
})
.use(function(req, res, next){
        req.session.fivea = [];
    next();
})
.use(function(req, res, next){
        req.session.foura = [];
    next();
})
.use(function(req, res, next){
        req.session.threea = [];
    next();
})
.use(function(req, res, next){
        req.session.twoa = [];
    next();
})
.use(function(req, res, next){
        req.session.onea = [];
    next();
})
.use(function(req, res, next){
        req.session.twelveb = [];
    next();
})
.use(function(req, res, next){
        req.session.elevenb = [];
    next();
})
.use(function(req, res, next){
        req.session.tenb = [];
    next();
})
.use(function(req, res, next){
        req.session.nineb = [];
    next();
})
.use(function(req, res, next){
        req.session.eightb = [];
    next();
})
.use(function(req, res, next){
        req.session.sevenb = [];
    next();
})
.use(function(req, res, next){
        req.session.sixb = [];
    next();
})
.use(function(req, res, next){
        req.session.fiveb = [];
    next();
})
.use(function(req, res, next){
        req.session.fourb = [];
    next();
})
.use(function(req, res, next){
        req.session.threeb = [];
    next();
})
.use(function(req, res, next){
        req.session.twob = [];
    next();
})
.use(function(req, res, next){
        req.session.oneb = [];
    next();
})


/* The to do list and the form are displayed */
.get('/todo', function(req, res) { 
    res.render('todo.ejs', {events: events, 
        twelvea: req.session.twelvea, 
        elevena: req.session.elevena, 
        tena: req.session.tena, 
        ninea: req.session.ninea, 
        eighta: req.session.eighta, 
        sevena: req.session.sevena, 
        sixa: req.session.sixa, 
        fivea: req.session.fivea, 
        foura: req.session.foura, 
        threea: req.session.threea, 
        twoa: req.session.twoa, 
        onea: req.session.onea, 
        twelveb: req.session.twelveb, 
        elevenb: req.session.elevenb, 
        tenb: req.session.tenb, 
        nineb: req.session.nineb, 
        eightb: req.session.eightb, 
        sevenb: req.session.sevenb, 
        sixb: req.session.sixb, 
        fiveb: req.session.fiveb, 
        fourb: req.session.fourb, 
        threeb: req.session.threeb, 
        twob: req.session.twob, 
        oneb: req.session.oneb, 
        amlist: req.session.amlist, 
        pmlist: req.session.pmlist});
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        if(req.body.aorp == 'a' && req.body.newstart == 12)
        {
            events[0].push([req.body.newtodo]);
            console.log(events[0]);
        }
        if(req.body.aorp == 'a' && req.body.newstart == 11)
        {
            events[1].push([req.body.newtodo]);
            console.log(events[1]);
        }
        if(req.body.aorp == 'a' && req.body.newstart == 10)
        {
            events[2].push([req.body.newtodo]);
        }
        if(req.body.aorp == 'a' && req.body.newstart == 9)
        {
            events[3].push([req.body.newtodo]);
        }
        if(req.body.aorp == 'a' && req.body.newstart == 8)
        {
            events[4].push([req.body.newtodo]);
        }
        if(req.body.aorp == 'a' && req.body.newstart == 7)
        {
            events[5].push([req.body.newtodo]);     
        }   
        if(req.body.aorp == 'a' && req.body.newstart == 6)
        {
            events[6].push([req.body.newtodo]);     
        }   
        if(req.body.aorp == 'a' && req.body.newstart == 5)
        {
            events[7].push([req.body.newtodo]);   
        }     
        if(req.body.aorp == 'a' && req.body.newstart == 4)
        {
            events[8].push([req.body.newtodo]);      
        }  
        if(req.body.aorp == 'a' && req.body.newstart == 3)
        {
            events[9].push([req.body.newtodo]);     
        }   
        if(req.body.aorp == 'a' && req.body.newstart == 2)
        {
            events[10].push([req.body.newtodo]); 
        }       
        if(req.body.aorp == 'a' && req.body.newstart == 1)
        {
            events[11].push([req.body.newtodo]);  
        }      
        if(req.body.aorp == 'p' && req.body.newstart == 12)
        {
            events[12].push([req.body.newtodo]); 
        }       
        if(req.body.aorp == 'p' && req.body.newstart == 11)
        {
            events[13].push([req.body.newtodo]);  
        }      
        if(req.body.aorp == 'p' && req.body.newstart == 10)
        {
            events[14].push([req.body.newtodo]);   
        }     
        if(req.body.aorp == 'p' && req.body.newstart == 9)
        {
            events[15].push([req.body.newtodo]); 
        }       
        if(req.body.aorp == 'p' && req.body.newstart == 8)
        {
            events[16].push([req.body.newtodo]); 
        }       
        if(req.body.aorp == 'p' && req.body.newstart == 7)
        {
            events[17].push([req.body.newtodo]);  
        }      
        if(req.body.aorp == 'p' && req.body.newstart == 6)
        {
            events[18].push([req.body.newtodo]);   
        }     
        if(req.body.aorp == 'p' && req.body.newstart == 5)
        {
            events[19].push([req.body.newtodo]); 
        }       
        if(req.body.aorp == 'p' && req.body.newstart == 4)
        {
            events[20].push([req.body.newtodo]); 
        }       
        if(req.body.aorp == 'p' && req.body.newstart == 3)
        {
            events[21].push([req.body.newtodo]);        
        }
        if(req.body.aorp == 'p' && req.body.newstart == 2)
        {
            revents[22].push([req.body.newtodo]);        
        }
        if(req.body.aorp == 'p' && req.body.newstart == 1)
        {
            events[23].push([req.body.newtodo]);        
        }
    }
    res.redirect('/todo');
})

/* Deletes an item from the to do list */
// .get('/todo/delete/:id', function(req, res) {
//     if (req.params.id != '') {
//         console.log(req.params.id);
//         req.session.todolista.splice(req.params.id, 1);
//     }
//     res.redirect('/todo');
// })

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);   