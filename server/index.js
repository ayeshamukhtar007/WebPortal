const express = require("express");
const app = express();
const Attendance = require("./models/attendance");
var WebSocketClient = require('websocket').client;
const Sockette = require('sockette');
const Camera = require("./models/Camera");
var ping = require('ping');
const decodeUtf8 = require('decode-utf8')
const http = require('http');
var Buffer = require('buffer/').Buffer;
var io = require('socket.io');
const WebSocket=require('ws');
var net = require('net'); 
const utf8 = require('utf8');
const WorkerCon = require('./worker-pool/controller')
const { proxy, scriptUrl } = require('rtsp-relay')(app);
const mongoose = require("mongoose");
const sendNotificationRoute = require("./routes/sendNotification");
const dotenv = require("dotenv");
const Alert = require("./models/Alert");
const authRoute = require("./routes/auth");
const cameraRoute = require("./routes/camera");
const serviceRoute = require("./routes/service");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const alertRoute = require("./routes/alert");
const workerpool = require('workerpool');
const Utilities = require('./ping')
const cors = require("cors");
const { response } = require("express");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
  app.ws('/api/stream/:cameraIP',  (ws, req) =>{
    console.log(req.params.cameraIP)
   new Promise(proxy ( {
      url: `rtsp://${req.params.cameraIP}:8080/h264_ulaw.sdp`,
      verbose: false,
    })(ws))
  }

  );
app.ws('/ping/:uid',async (ws,req)=>{
console.log(req.params.uid)
var res;
  Camera.find({user:req.params.uid }).select('_ip_address_buf').exec(function(error, results) { 
  if (error) {
      console.log(error)
  }
  res=JSON.parse(JSON.stringify(results))
  res.map((r)=>{
       
    var ip=r._ip_address_buf.data.toString().replaceAll(",",".")
   
       setInterval(function() {
           ping.sys.probe(ip, function(active){
             var obj={
              ip:ip,
              status:'NON-ACTIVE'
             }
               var info = !active ?  JSON.stringify(obj):'null';
               // console.log("its info",info);
               ws.send(info);
           });
       }, 1000);
   })
});

  // if ('1' === '1') {
  //   const options = { minWorkers: 'max' }
  //   await WorkerCon.init(options)
  // }
  // const password = 'This is a long password'
  // let result = null
  // let workerPool = null

  // if ('1' === '1') {
  //   workerPool = WorkerCon.get()
  //    await workerPool.pingFun(res,ws)
  // } else {
//  await Utilities.pingFun(res,ws)
//   }
//   console.log('its result!!!!',result)
  // ws.send(result)
})
app.ws('/ObjectDetection',function(ws,req){
  ws.on('data',(data)=>{
    console.log(data)
  })
})
  app.ws('/ObjectDetectionSer/:userid/:cameraid',function(ws,req){
    // console.log('sdds',req.params.userid)
    // console.log(utf8.encode(req.params.userid));
    // console.log(Buffer.from(req.params.userid, 'utf-8'));
    var id=req.params.cameraid;
    console.log(id)
    console.log('Its WS')
  //   if(req.params.userid!=null){
  //     console.log(req.params.userid)
  // }
    // const host = '192.168.56.1';
    // const port = 5566;
    // var client = new net.Socket(); 
    var label='';
    const wsClient=new WebSocket('ws://127.0.0.1:5000/detection/'+id+'')
    // client.connect( port, host, () => { 
    //   buffer=client.write(Buffer.from(id, 'utf-8'))
    //      console.log('connect')
  
    //   }) 
    wsClient.on('message',(message) => {
      var arr=message.split(",");
      // const wsDetect=new WebSocketClient() 
      // wsDetect.connect('ws://localhost:5005/ObjectDetection')
      // const client = new Sockette('ws://localhost:5005/ObjectDetection')
      // client.send('hello')//run for two cameras 
      // wsDetect.send(arr[1])
      console.log(arr[0])
      if(label!=arr[0]){
        label=arr[0]
        console.log('here')
        var request = http.request({
          host: 'localhost',
          port: 5005,
          path:'/api/sendNotification/messages',
          method: 'POST', 
          headers: {
            name:'ali',
            message:'acitivity detect',
           
          }
        }, function(response) {
          var data = '';
          response.on('data', (chunk) => {
            data += chunk;
          });
        });
        request.end();
  
        const newAlert = new Alert({
          user:req.params.userid,
          description:arr[0],
          camera:id
        });
        try {
            const savedAlert=newAlert.save();
            ws.send('Get Alert')
         
        } catch (err) {
           console.log(err)
        }
      }
      // console.log(decodeUtf8(data));
      // var U = decodeUtf8(data);
     
      // var t=JSON.parse(U)
      // console.log(t.detections.labels[0].Link)
      // var p=t.detections.labels[0].Link
    
        });
        
  })
  app.ws('/recordVideoOnDisk/:userID/:cameraIP', (ws,req) =>{
    console.log('fff',req.params.cameraIP)
    var id=req.params.cameraIP
    console.log(id)
    var wsClient = new WebSocket('ws://127.0.0.1:5000/recordOnDisk/'+id+'');
    // wsClient.on('message', function(message) {
    //   console.log("Current time on server is: '" + message + "'");
    //   var array = message.split(",");
    //   var datetime=array[1]
    //   console.log(datetime)

    //   if(test.indexOf(array[0])== -1){

    //     test.push(array[0])
    //     Attendance.findOneAndUpdate({date:array[2]} , {
    //       user:req.params.userID,
    //       date:array[2],
        
    //       $push: {
    //           attendance: 
    //             {
    //               employeename:array[0],
    //               starttime:array[1],
    //               endtime:''
    //             }
              
    //       }
    //     }, { new: true, upsert: true },
    //     function(error, results) {
    //       if (error) {
    //           console.log(error)
    //       }
          
    //     });
    //   }
    //   if(test.indexOf(array[0])!= -1){
    //     console.log('here else',array[0])
    //     Attendance.findOneAndUpdate({'attendance.employeename':array[0]} , 
    //       { $set: { "attendance.$.endtime" : array[1] } ,date:'now'},function(err,res){if(err) console.log(err)}
    //     )
      
    //   }
  
    // //     if(!Attendance.findOne(message)){
           
    // //     // const newInsert = new Attendance({
    // //     //   user:id,
    // //     //   employeename:message.name,
    // //     //   attendance:
    // //     // });
       
    // //     try {
    // //       newInsert.save();
    // //     } catch (err) {
    // //       console.log(err)
    // //     }
    // // }
   
    // // Attendance.find({$and:[{date:array[2]},{"attendance.employeename":{$ne:name}}]},function(err,res){
    // //   console.log(res)
    // // })
  
    // });
    
    })
    app.ws('/recordVideoOnCloud/:userID/:cameraIP', (ws,req) =>{
      console.log('fff',req.params.cameraIP)
      var id=req.params.cameraIP
      console.log(id)
      var wsClient = new WebSocket('ws://127.0.0.1:5000/recordOnCloud/'+id+'');
      // wsClient.on('message', function(message) {
      //   console.log("Current time on server is: '" + message + "'");
      //   var array = message.split(",");
      //   var datetime=array[1]
      //   console.log(datetime)
  
      //   if(test.indexOf(array[0])== -1){
  
      //     test.push(array[0])
      //     Attendance.findOneAndUpdate({date:array[2]} , {
      //       user:req.params.userID,
      //       date:array[2],
          
      //       $push: {
      //           attendance: 
      //             {
      //               employeename:array[0],
      //               starttime:array[1],
      //               endtime:''
      //             }
                
      //       }
      //     }, { new: true, upsert: true },
      //     function(error, results) {
      //       if (error) {
      //           console.log(error)
      //       }
            
      //     });
      //   }
      //   if(test.indexOf(array[0])!= -1){
      //     console.log('here else',array[0])
      //     Attendance.findOneAndUpdate({'attendance.employeename':array[0]} , 
      //       { $set: { "attendance.$.endtime" : array[1] } ,date:'now'},function(err,res){if(err) console.log(err)}
      //     )
        
      //   }
    
      // //     if(!Attendance.findOne(message)){
             
      // //     // const newInsert = new Attendance({
      // //     //   user:id,
      // //     //   employeename:message.name,
      // //     //   attendance:
      // //     // });
         
      // //     try {
      // //       newInsert.save();
      // //     } catch (err) {
      // //       console.log(err)
      // //     }
      // // }
     
      // // Attendance.find({$and:[{date:array[2]},{"attendance.employeename":{$ne:name}}]},function(err,res){
      // //   console.log(res)
      // // })
    
      // });
      
      })
  app.ws('/api/empAtten/:userID/:cameraIP', (ws,req) =>{
    console.log('fff',req.params.cameraIP)
    var id=req.params.cameraIP
    console.log(id)
    var wsClient = new WebSocket('ws://127.0.0.1:5000/attendance/'+id+'');
    // wsClient.connect('ws://127.0.0.1:5000/attendance/'+id+'')
    var test=[]
    // const wsClient=new WebSocket('ws://127.0.0.1:5000/attendance/'+id+'')
    wsClient.on('message', function(message) {
      console.log("Current time on server is: '" + message + "'");
      var array = message.split(",");
      var datetime=array[1]
      console.log(datetime)

      if(test.indexOf(array[0])== -1){

        test.push(array[0])
        Attendance.findOneAndUpdate({date:array[2]} , {
          user:req.params.userID,
          date:array[2],
        
          $push: {
              attendance: 
                {
                  employeename:array[0],
                  starttime:array[1],
                  endtime:''
                }
              
          }
        }, { new: true, upsert: true },
        function(error, results) {
          if (error) {
              console.log(error)
          }
          
        });
      }
      if(test.indexOf(array[0])!= -1){
        console.log('here else',array[0])
        Attendance.findOneAndUpdate({'attendance.employeename':array[0]} , 
          { $set: { "attendance.$.endtime" : array[1] } ,date:'now'},function(err,res){if(err) console.log(err)}
        )
      
      }
  
    //     if(!Attendance.findOne(message)){
           
    //     // const newInsert = new Attendance({
    //     //   user:id,
    //     //   employeename:message.name,
    //     //   attendance:
    //     // });
       
    //     try {
    //       newInsert.save();
    //     } catch (err) {
    //       console.log(err)
    //     }
    // }
   
    // Attendance.find({$and:[{date:array[2]},{"attendance.employeename":{$ne:name}}]},function(err,res){
    //   console.log(res)
    // })
  
    });
    
    })
app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{
  let response="hello";
  res.status(200).json(response);
});
app.use("/api/sendNotification", sendNotificationRoute);
app.use("/api/auth", authRoute);
app.use("/api/camera", cameraRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.use("/api/alert", alertRoute);
app.use("/api/service", serviceRoute);

// ;(async () => {
//   // Init Worker Pool
//   if ('1' === '1') {
//     const options = { minWorkers: 'max' }
//     await WorkerCon.init(options)
//   }
app.listen(process.env.PORT || 5005, async() => {
    console.log("Backend server is running!");
   
  });