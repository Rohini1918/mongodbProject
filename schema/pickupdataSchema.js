
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const pickupschema = new Schema(
    {
        ID : {type : String},
        cardID : {type : String},
        userMobile: {type : String},
        Timestamp : {type : String}
    }
)
module.exports = mongoose.model('pickups',pickupschema);