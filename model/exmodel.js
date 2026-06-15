const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["food","electricity","rent"],
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        
    }
},{timestamps:true})

const expenseModel = mongoose.model("expense",expenseSchema)

module.exports = expenseModel