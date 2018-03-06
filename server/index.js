var express = require('express');
var apiRouter =require('./apiRouter');
var path=require('path');
const cors=require('cors');

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'))
app.set("view engine", "ejs");

app.use('/api',apiRouter);

app.get('/', function(req, res) {
    res.render('index', { content:'' })
});

app.listen(8090);

