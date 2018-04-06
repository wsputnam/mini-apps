const express = require('express');

const port = 3000;

const app = express();

const rows = [];

app.use(express.static('client'));

// body parser
// data not coming back as expected
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
app.get('/load', function(req, res) {
    console.log(rows);
    res.json(rows);
})

app.post('*', function (req, res) {
    console.log(req.body.item)
    res.setHeader('Content-Type', 'application/json');
    rows.push(req.body.item);
});



app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});



