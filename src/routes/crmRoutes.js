const express = require("express")
const routes = express.Router()
const { addNewContact, getContacts } = require('../controllers/crmControllers')

routes.get('/contact', (req, res, next) => {
    // middleware
    console.log(`request of : ${req.originalUrl}`);
    console.log(`request of : ${req.method}`);
    next();
}, getContacts)

routes.post(addNewContact)

module.exports = routes