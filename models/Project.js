var mongoose = require('mongoose');
var projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:'Dummy'
    }
})

const Project = new mongoose.model('Project',projectSchema);
module.exports = Project;
    
