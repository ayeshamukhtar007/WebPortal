const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  //  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.toString().split(" ")[1];
   
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err){
          console.log("Errorr   !"+err);
        res.status(403).json("Token is not valid!");
      
      } 
      req.user = user;
      
      next();
    });
  } 
  else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    // console.log("req.user.id   "+ req.user.id)
    // console.log("req.params.uid  "+ req.params.uid)
    if (req.user.id === req.params.uid) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
      console.log("You are not alowed to do that!")

    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user.isAdmin)
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
