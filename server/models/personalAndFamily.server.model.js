/*TODO verify schema we need for database*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var personalAndFamilySchema = new Schema({
        fname: {type: String, required: false, default: null},
        mname: {type: String, required: false, default: null},
        lname: {type: String, required: false, default: null},
        dob: {type: Date, required: false, default: null},
        ssn: {type: String, required: false, default: null},
        gender: {type: String, required: false, default: null},
        marital_status: {type: String, required: false, default: null},
        address1: {type: String, required: false, default: null},
        address2: {type: String, required: false, default: null},
        city: {type: String, required: false, default: null},
        state: {type: String, required: false, default: null},
        zip: {type: Number, required: false, default: null},
        religious_affiliation: {type: String, required: false, default: null},
        military_service: {type: Boolean, required: false, default: null},
        education: {type: String, required: false, default: null},
        org_date: {type: Date, required: false, default: null},
        hobbies: {type: String, required: false, default: null},
        interests: {type: String, required: false, default: null},
    });

personalAndFamilySchema.pre('save', function(next) {

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
var PersonalAndFamily = mongoose.model('personalAndFamily', personalAndFamilySchema);
module.exports = PersonalAndFamily;
