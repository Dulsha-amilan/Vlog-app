const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({

    blogID:{
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

const blog = mongoose.model("blog",blogSchema);

module.exports = blog;