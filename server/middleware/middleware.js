const axios=require('axios');

 const modifyMessage = (req, res, next) => {

  req.body.message = `SAYS: ${req.body.message}`;
  next();
};

const performAsyncAction = async (req, res, next) => {
  try {
    // await axios.get('https://picsum.photos/id/0/info');
    next();
  } catch (err) {
    next(err);
  }
};
module.exports={modifyMessage,performAsyncAction}