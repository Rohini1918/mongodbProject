
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const Returnedschema = new Schema(
    {
        ID : {type : String},
        cardID : {type : String},
        userMobile: {type : String},
        Timestamp : {type : String}
    }
)
module.exports = mongoose.model('Returneds',Returnedschema);