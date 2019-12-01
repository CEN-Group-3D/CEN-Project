/*TODO verify schema we need for database*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true, default: null},
    email: {type: String, required: true, default: null},
    password: {type: String, required: false, default: null},
    });

userSchema.pre('save', function(next) {

    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

// export for use in other files
var User = mongoose.model('User', userSchema);
module.exports = User;
