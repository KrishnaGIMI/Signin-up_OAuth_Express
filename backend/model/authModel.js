const mongoose = require("mongoose")
const mongodb = require("mongodb")

const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    password:{
        type: String,
        require: true
    }
}, {timestamp: true})

const Users = mongoose.model("Users", UsersSchema);

module.exports  = Users;