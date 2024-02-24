
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const deliveredschema = new Schema(
    {
        ID : {type : String},
        cardID : {type : String},
        userMobile : {type : String},
        Timestamp : {type : String},
        comment : {type : String}
    }
)
module.exports = mongoose.model('delivereds',deliveredschema);