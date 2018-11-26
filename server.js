'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...

var app = express();
const multer = require('multer')

let upload = multer({dest: 'assets/'})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'),function (req, res, next) {
    res.json({fileName: req.file.originalname, sizeInBytes:req.file.size})
  });


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
