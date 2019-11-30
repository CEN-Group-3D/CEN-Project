var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true, default: null},
    email: {type: String, required: true, default: null},
    password: {type: String, required: false, default: null},
    admin: {type: Boolean, required: false, default: false},
    root: {type: Boolean, requied: false, default: false},
    created: Date,
    updated: Date
    });

userSchema.pre('save', function(next) {

    // get the current date
    var currentDate = new Date();

    // change the updated field to current date
    this.updated = currentDate;

    // if created doesn't exist, add to that field
    if (!this.created)
        this.created = currentDate;

    next();
});

// export for use in other files
var User = mongoose.model('User', userSchema);
module.exports = User;
