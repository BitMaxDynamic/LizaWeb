/**
 * Created by ilya shusterman on 31/03/2017.
 */
//imports
var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');
var request = require('request');
var zlib = require('zlib');
var app = express();
var querystring = require('querystring');
var server = require('react-dom/server'); // { renderToString } ;
var router = require('react-router') ;// import { match, RouterContext } from 'react-router';

//initialize node backend
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname + './../../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(session({
  secret: 'keyboard cat',
  user: '',
  maxAge: 3600000,
  saveUninitialized: true
}));
//server api urls
const BASE_PUBLIC = '/public/api/v1/';
const BASE_BLOCKCHAIN_URL = 'https://blockchain.info/';
const BASE_BITSTAMP_URL = 'https://www.bitstamp.net/api/v2';
// APIs
//   nonce = new Date().getTime();
app.get(BASE_PUBLIC.concat('currency/btce'), function(req, res) {
    let params = {
        'timespan':'20days',
        'format': 'json'
    };
    let query_path = querystring.stringify(params);
    let url_path = BASE_BLOCKCHAIN_URL+'charts/market-price?'+query_path;
    request({
        url: url_path,
        method: 'GET'
    }, function (err, response, body) {
        if(err) return res.status(500).json(err.message);
        let response_body = JSON.parse(body);
        res.status(200);
        res.json(response_body['values']);
    });
});

app.get(BASE_PUBLIC.concat('currency/bitstamp'), function(req, res) {
    console.log('here!')
    let url_path = BASE_BITSTAMP_URL+'/transactions/btcusd';
    request({
        url: url_path,
        method: 'GET'
    }, function (err, response, body) {
        if(err) return res.status(500).json(err.message);
        var response_body = JSON.parse(body);
        res.status(200);
        res.json(response_body);
    });
});

// all other routes are handled by the client
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'./../../build/index.html'));
});

// start the server
app.listen(app.get('port'), function() {
  console.log('BitCoinDynamic is listening on port '+app.get('port'));
});


module.exports = app;
