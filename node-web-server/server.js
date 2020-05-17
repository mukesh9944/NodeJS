const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 5000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('view engine', 'hbs');


app.use((req, res, next) => {
    var now = new Date().toString();
    var logMessage = `${now} : ${req.method}  ${req.url}`;
    console.log(logMessage);
    fs.appendFile('server.log', logMessage +'\n', (err) => {
        if(err){
            console.log('Unable to log message to server.log');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=> {
    //res.send('<h1>Hello Express</h1>');
    // res.send({
    //     name : 'mukesh',
    //     Likes : ['abc', 'xyz']
    // })
    res.render('home.hbs', {
        pageTitle : 'Home page',
        welcomeMessage : 'Welcome to my website home page'
    })
});

app.get('/about', (req, res) => {
    //res.send('abc');
    res.render('about.hbs', {
        pageTitle : "About page"
    });
});

app.get('/project', (req, res) => {
    //res.send('abc');
    res.render('project.hbs', {
        pageTitle : "Project page"
    });
});


app.get('/bad', (req, res) => {
    res.send({
        error : 'Bad request'
    })
})
app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
    
});