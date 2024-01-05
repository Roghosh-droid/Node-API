const mongoose = require('mongoose')

const productionsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, "please enter name"]
        },
        Age: {
            type: Number,
            required: true,
            default: 0 
        },
        Address: {
            type: String,
            required: true
        },
        phonenumber: {
            type: String,
            required: false,
        },
        Salary: {
            type: Number,
            required: true,
            default: 0 
        },
        destination: {
            type: [String], // Array of strings
            required: false,
        }


    },
    {
        timestamps: true
    }
)

const Production = mongoose.model('Customer', productionsSchema);
module.exports = Production;