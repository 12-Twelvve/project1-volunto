const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },

})

// it somehow does export
mongoose.model("Users", userschema);

