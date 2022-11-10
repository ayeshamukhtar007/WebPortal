const router = require("express").Router();
const BuyedServices = require("../models/BuyedServices");
const Services = require("../models/Services");
const mongoose = require("mongoose");

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  router.get('/CountServices',async (req, res) => {
    Services.find().count().exec(function(error, results) {
         if (error) {
             return next(error);
         }
         console.log(results)
         res.status(200).json(results);
     })  ;
   }); 
//Add Services Details
router.post("/addservice", async (req, res) => {   

  if(!await Services.findOne(req.body)){
   
      const newService = new Services(req.body);
      console.log(req.body);
      try {
          const savedService=await newService.save();
          res.status(200).json({message:"services added successfully"});
      } catch (err) {
          res.status(500).json({message:"fail"});
      }
  }
  else
  res.status(422).json({message:"service Already exist"});

  });
//UPDATE
router.put("/updateService/:sid", async (req, res) => {
        try {
          const updatedService = await Services.findOneAndUpdate({ _id:req.params.sid}
            ,{$set:{
              title:req.body.title,
              description:req.body.description,
              price:req.body.price,
            }},
            { new: true }
          );
          res.status(200).json(updatedService);
        } catch (err) {
          res.status(500).json(err);
        }
});   
router.get('/ViewAllServices',async (req, res) => {
Services.find().select('title').select('description').select('price').select('ratings').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      res.send(results);
  });
});
router.get('/ViewService/:sid',async (req, res) => {
  Services.findOne({_id:req.params.sid}).select('title').select('description').select('price').select('ratings').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        res.send(results);
    });
  });
router.delete('/delService/:sid', function(req, res, next) {
  Services.deleteOne({ _id: req.params.sid }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json({message:"Delete sucessfully"});
  });
}); 
  function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
}
router.get('/countMonthly',async(req,res)=>{
  BuyedServices.aggregate( [
    {
      "$lookup": {
        "from": "services",
        "localField": "service",
        "foreignField": "_id",
        "as": "serviceLookup"
      }
    },
    {
      "$unwind": {
        path: "$serviceLookup",
        preserveNullAndEmptyArrays: true
      }
    },
      {
        $group: {
    
        
          _id:{ $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          Revenue: { $sum: "$serviceLookup.price" }
        }
      },
      ],
    
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          console.log(result)
         var t= result.sort(GetSortOrder("_id"));
        
          res.json(result);
        }
      }
    ); 
 
    // BuyedServices.find().
    // populate('service').
    // exec(function (err, story) {
    //   if (err) return handleError(err);
    //   console.log('The author is %s', story);
    //   story.aggregate( [

    //     {
    //       $group: {
      
          
    //         _id:{ $dateToString: { format: "%Y-%m", date: "$createdAt" } },
    //         Revenue: { $sum:"$service.price" }
    //       }
    //     } 
      
    //     ],
      
    //     function(err, result) {
    //       if (err) {
    //         res.send(err);
    //       } else {
    //         console.log(result)
    //       //  var t= result.sort(GetSortOrder("_id"));
          
    //         res.json(result);
    //       }
    //     }
    //   ); 
       
       
    //   // prints "The author is Ian Fleming"
    // });

  
  }
    )

router.get('/serviceOverAllsubscription/:sid',async(req,res)=>{
  var serviceID=req.params.sid;
  console.log(serviceID)
  BuyedServices.aggregate( [
    { $match : {"service" : mongoose.Types.ObjectId(req.params.sid)} },
    {
      "$lookup": {
        "from": "services",
        "localField": "service",
        "foreignField": "_id",
        "as": "serviceLookup"
      }
    },
    {
      "$unwind": {
        path: "$serviceLookup",
        preserveNullAndEmptyArrays: true
      }
     },
 
      {
        $group: {
    
        
          _id:{ $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          Revenue: { $sum: "$serviceLookup.price" }
        }
      },
      ],
    
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          console.log(result)
         var t= result.sort(GetSortOrder("_id"));
        
          res.json(result);
        }
      }
    ); 
     
      
      }
        )
module.exports = router;
