const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
   
    user:{ 
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    date: { type: String,required:true},
    attendance: {
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
module.exports = mongoose.model("Attendance", AttendanceSchema);
