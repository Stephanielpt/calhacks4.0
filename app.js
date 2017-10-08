var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var querystring = require('querystring');
var url = require('url');
// var page = url.parse(req.url).query;

// var params = querystring.parse(url.parse(req.url).query);
// params['hour'];
// params['dorn'];

var events = [{newtodo: "kill it", newstart: '12', aorp: 'a'}];

function Event(newtodo, newstart, aorp) {
    this.newtodo = newtodo;
    this.newstart = newstart;
    this.aorp = aorp;
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

/* The to do list and the form are displayed */
// .get('/todo/delete/:id', function(req, res) {
//     if (req.params.id != '') {
//         console.log(req.params.id);
//         req.session.todolista.splice(req.params.id, 1);
//     }
//     res.redirect('/todo');
// })
.get('/todo/:heure', function(req, res){ 
    var check = req.params.heure;
    console.log(check);
    for(var s = 0; s < events.length; s++)
    {
        var hour = Object.values(events[s])[1];
        var dorn = Object.values(events[s])[2];
        var against = (hour + ":00" + dorn + "m");
        console.log(against);
        var equality = (against == check);
        console.log(equality);
        if(!(equality))
        {
            //changes events so we can put all events out on clcick of a button :)
            events.splice(s, 1);
            s--;
        }
    }
    res.redirect('/todo');
})

.get('/todo', function(req, res){ 
    res.render('todo.ejs', {
        events: req.session.events, 
        amlist: req.session.amlist, 
        pmlist: req.session.pmlist});
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') 
    {
        if(req.body.aorp == 'a' || req.body.aorp == 'p') 
        {
            if (req.body.newstart >= 0 && req.body.newstart <= 12)
            {
                events.push(new Event(req.body.newtodo, req.body.newstart, req.body.aorp));
                console.log(events);
            }
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
    console.log("couldnt find it");
})

.listen(8080);   