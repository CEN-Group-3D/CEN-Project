var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
    first_log: {type: Boolean, required: false, default: true},
    name: {type: String, required: true, default: null},
    email: {type: String, required: true, default: null},
    password: {type: String, required: false, default: null},
    admin: {type: Boolean, required: false, default: false},
    root: {type: Boolean, requied: false, default: false},
    created: Date,
    updated: Date,
    personalAndFamily: {
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
        interests: {type: String, required: false, default: null}
    },
    survivorAndBeneficiary: {
        fnameSp: {type: String, required: false, default: null},
        mnameSp: {type: String, required: false, default: null},
        lnameSp: {type: String, required: false, default: null},
        relatSp: {type: String, required: false, default: null},
        teleSp: {type: String, required: false, default: null},
        address1Sp: {type: String, required: false, default: null},
        address2Sp: {type: String, required: false, default: null},
        citySp: {type: String, required: false, default: null},
        stateSp: {type: String, required: false, default: null},
        zipSp: {type: Number, required: false, default: null},
        fnameDP: {type: String, required: false, default: null},
        mnameDP: {type: String, required: false, default: null},
        lnameDP: {type: String, required: false, default: null},
        relatDP: {type: String, required: false, default: null},
        teleDP: {type: String, required: false, default: null},
        address1DP: {type: String, required: false, default: null},
        address2DP: {type: String, required: false, default: null},
        cityDP: {type: String, required: false, default: null},
        stateDP: {type: String, required: false, default: null},
        zipDP: {type: Number, required: false, default: null},
        fnameCh: {type: String, required: false, default: null},
        mnameCh: {type: String, required: false, default: null},
        lnameCh: {type: String, required: false, default: null},
        relatCh: {type: String, required: false, default: null},
        teleCh: {type: String, required: false, default: null},
        address1Ch: {type: String, required: false, default: null},
        address2Ch: {type: String, required: false, default: null},
        cityCh: {type: String, required: false, default: null},
        stateCh: {type: String, required: false, default: null},
        zipCh: {type: Number, required: false, default: null},
        fnameStCh: {type: String, required: false, default: null},
        mnameStCh: {type: String, required: false, default: null},
        lnameStCh: {type: String, required: false, default: null},
        relatStCh: {type: String, required: false, default: null},
        teleStCh: {type: String, required: false, default: null},
        address1StCh: {type: String, required: false, default: null},
        address2StCh: {type: String, required: false, default: null},
        cityStCh: {type: String, required: false, default: null},
        stateStCh: {type: String, required: false, default: null},
        zipStCh: {type: Number, required: false, default: null},
        underaged_children: {type: Boolean, required: false, default: null},
        special_needs_children: {type: Boolean, required: false, default: null},
        fname_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        mname_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        lname_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        relat_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        tele_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        address1_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        address2_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        city_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        state_gaurdian_SpNeeds_UnderA: {type: String, required: false, default: null},
        zip_gaurdian_SpNeeds_UnderA: {type: Number, required: false, default: null}
    }
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
