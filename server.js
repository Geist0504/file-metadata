'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...

var app = express();
const multer = require('multer')

let upload = multer({dest: 'uploads/'})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('form'),function (req, res, next) {
    console.log(req.file)
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
