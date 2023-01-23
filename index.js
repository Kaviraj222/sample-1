let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let fs = require("fs");
let path = require("path");
let morgan = require("morgan");
let books = require('./component/user-profile-service');

let accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    { flags: "a" }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined", {skip: (req, res) => { return res.statusCode < 400;}, stream: accessLogStream,}));

// index path
app.get('/', (req, res) => {
    res.send('tes express nodejs mysql')
});

// Api Route
app.use('/books', books);

app.listen(8080, () => {
    console.log('app listening on port: ' + 8080);
});