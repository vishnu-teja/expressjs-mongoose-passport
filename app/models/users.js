const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const schema = mongoose.Schema;

var userSchema = new schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
    }
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);
var Users = mongoose.model('User', userSchema);
module.exports = Users;