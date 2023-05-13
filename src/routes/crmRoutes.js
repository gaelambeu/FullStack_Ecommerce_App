const express = require("express")
const routes = express.Router()

routes.get('/contact', (req, res, next) => {
    // middleware
    console.log(`request of : ${req.originalUrl}`);
    console.log(`request of : ${req.method}`);
    next();
},(req, res, next) =>{
    res.send("ask GET with success")}
)

routes.post('/contact', (req, res) => {
    res.send("ask POST with success")
})

module.exports = routes