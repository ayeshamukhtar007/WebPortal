var ping = require('ping');
const Camera = require("./models/Camera");
var host2 = [];
const http = require('http');
var frequency = 1000; //1 second

const pingFun= async(uid,ws)=>{
    // console.log('its ping',uid)
    var res=uid
    // console.log(uid)
    // var request = http.request({
    //     host: 'localhost',
    //     port: 5000,
    //     path:'/api/camera/ViewAllCameras/'+'6287a4b0b8fde2cf6fec354d'+'',
    //     method: 'GET',
       
    //   }, function(response) {
    //     var data = '';
    //     response.on('data', (chunk) => {
    //       data += chunk;

    //     });
    //     console.log(data)
    //   });
    //   request.end();
     console.log('enter')
    res.map((r)=>{
       
 var ip=r._ip_address_buf.data.toString().replaceAll(",",".")

    setInterval(function() {
        ping.sys.probe(ip, function(active){
            var info = !active ?  'IP ' + ip + ' = Non-Active':'null';
            // console.log("its info",info);
            ws.send(info);
        });
    }, frequency);
})
};
module.exports={pingFun}