const express = require("express")
const routes = express.Router()
const { addNewContact } = require('../controllers/crmControllers')

routes.get('/contact', (req, res, next) => {
    // middleware
    console.log(`request of : ${req.originalUrl}`);
    console.log(`request of : ${req.method}`);
    next();
},(req, res, next) =>{
    res.send("ask GET with success")}
)

routes.post(addNewContact)

module.exports = routes