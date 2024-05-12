const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const componentSchema = new Schema({

    componentID:{
        type: String,
        required: true

    },

    description:{
        type: String,
        required: true
    },

    filepath:{
        type:String
        
    },

     contact:{
        type:Number,
        required: true
    },

     catogory:{
        type:String,
        required: true
    },


     join:{
        type:String
    }
})

const component = mongoose.model("component",componentSchema);

module.exports = component;