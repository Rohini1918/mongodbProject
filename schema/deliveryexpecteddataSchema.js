
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const deliveryExpectedupschema = new Schema(
    {
        ID : {type : String},
        cardID : {type : String},
        userMobile: {type : String},
        TimeStamp : {type : String},
        comment : {type : String}
    }
)
module.exports = mongoose.model('deliveryExpecteds',deliveryExpectedupschema);