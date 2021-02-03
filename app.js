const express = require("express");
const path = require("path");
var app = express();
var viewsPath = path.join(__dirname + '/views')
var publicpath = path.join(__dirname, 'public')
var PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')));

const expressLayouts = require('express-ejs-layouts');
/**
 * Express EJS layouts are only used when you want 
 * to be displaying different pages on a base layout.
 * The layout never changes, only the EJS variables 
 * in the layout do. This is good for web apps with logins
 * and stuff/multiple pages, since you can just 
 * set the body variable to a different view when
 * that page is requested.
 */
app.use(expressLayouts)
//don't use this unless you want to use a layout.ejs 
//(useless for a single static page)
app.set('view engine', 'ejs');
app.set('views', viewsPath)
app.set('layout', '../views/layout')

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/views");

//routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Title'
    })
    // res.send('Test');
    // console.log(viewsPath)
    // console.log(publicpath)
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))