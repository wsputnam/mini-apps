const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(express.static('client'));

// body parser
app.use(function (req, res, next) {
    var data = "";
    req.on('data', function (chunk) { data += chunk })
    req.on('end', function () {
        req.body = JSON.parse(data);
        next();
    })
})

app.use(express.static('./app.js'));

app.get('*', function (req, res) {
    res.send('index.html');
});

app.post('*', function (req, res) {
    console.log(req.body.item)
    res.send(req.body.item);
});



app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});



