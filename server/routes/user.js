const router = require("express").Router();
const BuyedService = require("../models/BuyedServices");
const Services = require("../models/Services");
const Camera = require("../models/Camera");
var WebSocketClient = require('websocket').client;


const User = require("../models/User");
const jwt = require("jsonwebtoken");

const {
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const Attendance = require("../models/attendance");
router.put('/updateUser/:uid', verifyTokenAndAuthorization, function (req, res, next) {

  User.findOneAndUpdate({ _id: req.params.uid }, { $set: req.body }, { new: true },
    function (error, results) {

      if (error) {
        return next(error);
      }
      const accessToken = jwt.sign(
        {
          id: req.params.uid,

        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );
      const { password, ...others } = results._doc;
      console.log(results);
      res.status(200).json({ ...others, accessToken });
    });
})
router.post("/buyservice/:uid/:sid", verifyTokenAndAuthorization, async (req, res) => {
 console.log(req.params.sid)
  Services.findOne({ _id: req.params.sid }, function (err, res) {
        console.log(res)
   if(err){
    return res.status(500)
   }
   else
    if (res.title == 'Object Detection') {
      // Camera.find({ user: req.params.uid }, function (err, res) {
      //   console.log(res)
      //   res.map((r) => {
      //     console.log(r)
      //     var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
      //     var client = new WebSocketClient();
      //     client.connect("ws://localhost:5000/ObjectDetectionSer/" + ipAddress + "")
      //   })
      // })
      Camera.find({user: req.params.uid }).select('name').select('mode').select('status').select('_ip_address_buf').exec(function(error, results) {
        // if (error) {
        //     return next(error);
        // }
        console.log(results)
        var resu=JSON.parse(JSON.stringify(results));
        console.log(resu)
        resu.map((r) => {
              console.log(r._ip_address_buf)
              var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
              console.log(ipAddress)
              var client = new WebSocketClient();
              client.connect("ws://localhost:5005/ObjectDetectionSer/" +req.params.uid + "/"+ipAddress+'')
            })
    })  ;
    }
    if (res.title == 'Record Stream On Disk') {
      // Camera.find({ user: req.params.uid }, function (err, res) {
      //   console.log(res)
      //   res.map((r) => {
      //     console.log(r)
      //     var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
      //     var client = new WebSocketClient();
      //     client.connect("ws://localhost:5000/ObjectDetectionSer/" + ipAddress + "")
      //   })
      // })
      Camera.find({user: req.params.uid }).select('name').select('mode').select('status').select('_ip_address_buf').exec(function(error, results) {
        // if (error) {
        //     return next(error);
        // }
        console.log(results)
        var resu=JSON.parse(JSON.stringify(results));
        console.log(resu)
        resu.map((r) => {
              console.log(r._ip_address_buf)
              var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
              console.log(ipAddress)
              var client = new WebSocketClient();
              client.connect("ws://localhost:5005/recordVideoOnDisk/" +req.params.uid + "/"+ipAddress+'')
            })
    })  ;
    }
    if (res.title == 'Record Stream On Cloud') {
      // Camera.find({ user: req.params.uid }, function (err, res) {
      //   console.log(res)
      //   res.map((r) => {
      //     console.log(r)
      //     var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
      //     var client = new WebSocketClient();
      //     client.connect("ws://localhost:5000/ObjectDetectionSer/" + ipAddress + "")
      //   })
      // })
      Camera.find({user: req.params.uid }).select('name').select('mode').select('status').select('_ip_address_buf').exec(function(error, results) {
        // if (error) {
        //     return next(error);
        // }
        console.log(results)
        var resu=JSON.parse(JSON.stringify(results));
        console.log(resu)
        resu.map((r) => {
              console.log(r._ip_address_buf)
              var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
              console.log(ipAddress)
              var client = new WebSocketClient();
              client.connect("ws://localhost:5005/recordVideoOnCloud/" +req.params.uid + "/"+ipAddress+'')
            })
    })  ;
    }
    if (res.title == 'Employee Attendance') {

      Camera.find({user: req.params.uid }).select('name').select('mode').select('status').select('_ip_address_buf').exec(function(error, results) {

        var resu=JSON.parse(JSON.stringify(results));
        resu.map((r) => {
             //  console.log(r._ip_address_buf)
              var ipAddress = r._ip_address_buf.data.toString().replaceAll(",", ".")
              var client = new WebSocketClient();
              client.connect("ws://localhost:5005/api/empAtten/" +req.params.uid + "/"+ipAddress+'')
            })
    })  ;
    }
  })
  const newBoughtService = new BuyedService({
    user: req.params.uid,
    service: req.params.sid,

  });
  console.log(req.body);
  try {
    const savedBoughtService = await newBoughtService.save();
    res.status(200).json({ message: "Buy services Successfully" });
  } catch (err) {
    res.status(500).json({ message: "fail" });
  }
  // }
  // else
  // res.status(422).json({message:"camera Already exist"});

  // }
});
router.get('/GetAtten/:uid', verifyTokenAndAuthorization, async (req, res) => {
  Attendance.findOne({ user: req.params.uid }).exec(function (error, results) {
    if (error) {
      throw (error);
    }
    console.log(results)
    res.status(200).json(results);

  });
});
router.get('/GetUser/:uid', verifyTokenAndAuthorization, async (req, res) => {
  User.findOne({ _id: req.params.uid }).exec(function (error, results) {
    if (error) {
      throw (error);
    }
    console.log(results)
    res.status(200).json(results);

  });
});
router.get('/ViewAllBuyedServices/:uid', verifyTokenAndAuthorization, async (req, res) => {
  BuyedService.find({ user: req.params.uid }).select('service').populate('service', ['title', 'description', 'price']).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    res.send(results);
  });
});

module.exports = router;
