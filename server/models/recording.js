const mongoose = require("mongoose");
const AlertSchema = new mongoose.Schema(
  {

    user: { 
      type: mongoose.Types.ObjectId,
      ref: 'User'
     
    },
    camera: { 
      type: mongoose.Types.ObjectId,
      ref: 'Camera'
     
    },
    date: { type: String,required:true},
    links: {
      type:[
      {

       employeename: {type: String},
       starttime: {type: String},
       endtime: {type:String}

      }
    ]}, 
  },
  { timestamps: true }
)
module.exports = mongoose.model("Alert", AlertSchema);
