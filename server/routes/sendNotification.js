const { route } = require("./camera");
const { modifyMessage, performAsyncAction } =require('../middleware/middleware');
// import DeviceToken from '../models/DeviceToken';
const { sendNotificationToClient } =require('../notify') ;

const router = require("express").Router();
router.post('/messages', modifyMessage, performAsyncAction,async (req, res) => {
        // DeviceToken.find({user:req.body.uid}).exec(function(error, results) {
        //      if (error) {
        //          throw(error);
        //      }
        //      console.log(results)
        //  });
      console.log('dsadfafafa')
    const { name, message} = req.headers;
    // const columns = 'name, message';
    // const values = `'${name}', '${message}'`;
    try {
        // const data = await messagesModel.insertWithReturn(columns, values);
      const tokens = [
  'f4HYMF9fTeeY5366pLI5kn:APA91bHW_JyWPwiolNUV-_p_paslgVIp5nf8EH6oUv0EwbLjDIFc_n68iSeS0xbooMNcI9PagSEzjIuOA7yMxiO559P8No2vifb42lp5hqZLz0csfschZDueTvRb8CU5hw0CL5-Pe_WP'
      ,'f4HYMF9fTeeY5366pLI5kn:APA91bHW_JyWPwiolNUV-_p_paslgVIp5nf8EH6oUv0EwbLjDIFc_n68iSeS0xbooMNcI9PagSEzjIuOA7yMxiO559P8No2vifb42lp5hqZLz0csfschZDueTvRb8CU5hw0CL5-Pe_WP'
    ,'dK6JNVxJYzGnEvoMqdr3m-:APA91bGrUzz0NkQ19y0Afn8lMqOUibkSmD5a8_q4KxZJQlzntsJG8MbtjCaGi5XSF6h2LuIh6a8xKqhbEuqRsWaEivXXW6SPsUq73c0AVNaDu12VKaKYzeazctVVfVd-psRiL3XKFwC6'
    ,'dSZ2jm0dSfyAUE7ghnRb5u:APA91bESFrQHA3ZptUHC-m2rlWkYaaSDvjRoreZEwRgP_sLpapXMKPKeA5OocJQaU6OVFYzsp-IYTCQStgwTiuTeJaGzeedY5QKDDvctZumnPEFjR0YCvfZ3TuTDkNmiavIIiOQFYkIb'
  ,'e7-UZgj0TI-SGI5KiVrtkd:APA91bHCK5Qh8Ate2Lp0us87wSIJ01_tSwGr4Z0V2Win8HGcOmDqany6UuLyzedLnd9PzkiIHg93jGJK_sJT7yyuHZrVURQZc5-rVoSLYiT3L9kYAXvNZVaDS-aU06c-7dcnRMrnRLpA'
  ];
    var i=0;
    // results.map((result)=>{ 
    //   tokens[i++]=result.Token;
    // })
      // const notificationData = {
      //   title: 'New message',
      //   body: message,
      //   // image:image
      //    //image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAvM4fr8zYj2tL9HZ5DoIY9yOv_ZzCiQF7g&usqp=CAU'
  
      // };
      const notificationData = {
        title: 'New message',
        body: message,
       
         //image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAvM4fr8zYj2tL9HZ5DoIY9yOv_ZzCiQF7g&usqp=CAU'
  
      };
      sendNotificationToClient(tokens, notificationData); 
      res.status(200).json({ messages: "data.rows" });
    } catch (err) {
      res.status(200).json({ messages: "err.stack" });
    }
  });
  module.exports = router;