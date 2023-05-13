const mongoose = require("mongoose")

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a Firstname'
    },
    lastName: {
        type: String,
        required: 'Enter a Lastname'
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_date:{
        type: Date,
        default: Date.now
    }
})