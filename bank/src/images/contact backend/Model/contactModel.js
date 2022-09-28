const mongoose = require("mongoose")


const ContactSchema = mongoose.Schema({
    id: { type: String , required:true},
    firstName : { type: String , required:true}, 
    lastName : { type: String , required:true}, 
    fullName : { type: String ,required:true}, 
    isActive: { type: Boolean,required:true},
    contactDetails: { type: [mongoose.SchemaTypes.ObjectId],ref:"contactDetails",required:true}
}, {
    timestamps: true
})

let ContactModel = new mongoose.model('contacts', ContactSchema)

module.exports = ContactModel