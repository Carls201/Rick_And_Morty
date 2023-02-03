const http = require('http');
const express = require('express');
const getCharById = require('../controllers/getCharByid');
const getCharDetail = require('../controllers/getCharDetail');

const app = express();

http.createServer((req, res) =>{

    res.setHeader('Access-Control-Allow-Origin', '*')
    let id = req.url.split('/').at(-1);

    if(req.url.includes('onsearch')) getCharById(res, id);
    

    if(req.url.includes('detail')) getCharDetail(res, id);

    






}).listen(3001, 'localhost')