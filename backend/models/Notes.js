const mongoose = require('mongoose');

const NotesSchema  = new Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    tag:{
        default:"General",
        type:String,
        
    },
    date:{
        default:date.now,
        type:date
    },

})
module.exports = mongoose.model('notes',NotesSchema);