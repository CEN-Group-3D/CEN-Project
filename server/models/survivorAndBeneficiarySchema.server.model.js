/*TODO verify schema we need for database
Notes to resolve with the mongoose schema model
        from form data, what is a type tel?
                I made it a string so it can have the dashes
Which fields are required?
Assets was started but the fields are copy paste of this one
*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var survivorAndBeneficiarySchema = new Schema({
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
        underaged-children: {type: Boolean, required: false, default: null},
        special-needs-children: {type: Boolean, required: false, default: null},
        fname-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        mname-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        lname-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        relat-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        tele-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        address1-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        address2-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        city-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        state-gaurdian-SpNeeds-UnderA: {type: String, required: false, default: null},
        zip-gaurdian-SpNeeds-UnderA: {type: Number, required: false, default: null},
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
var SurvivorAndBeneficiary = mongoose.model('survivorAndBeneficiary', survivorAndBeneficiary);
module.exports = SurvivorAndBeneficiary;
