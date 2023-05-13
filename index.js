const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const routes = require("./src/routes/crmRoutes");


const app = express();
const PORT = 3000;

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CMRdb', {
    useMongoClient: true
});

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(routes);

app.get('/', (req, res) => {
    res.send("I am Happy")
})



app.listen(PORT, ()=> {
    console.log(`your server is listen on port ${PORT} `);
})