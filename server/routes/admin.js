const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt =require('bcryptjs');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//LOGIN
router.post("/register", async (req, res) => {
    if(!await Admin.findOne({username:req.body.username})){
        const admin = new Admin(req.body);
         
          try {
             await admin.save();
            res.status(201).json({message:"admin add"});
          } catch (err) {
            console.log(err)
            res.status(500).json("admin fail");
          }
    }
    else{
         res.status(422).json({error:"admin detail exist"})
    }
  
});
router.post('/login', async (req, res) => {
    const {username,password,isAdmin}=req.body;
    console.log(req.body)
    try{
        const admin = await Admin.findOne(
            {
                username: username
            }
           
        );
        console.log(admin)
        if(!admin) return res.status(401).json("Wrong credentials!");
        // const hashedPassword = CryptoJS.AES.decrypt(
        //     user.password,
        //     process.env.PASS_SEC
        // );


        // const originalPassword =hashedPassword.toString(CryptoJS.enc.Utf8);
        console.log('here')
        const isMatch=await bcrypt.compare(req.body.password,admin.password);
       console.log(isMatch)
        if(!isMatch) return res.status(401).json("Wrong credentials!");
        

        const accessToken =jwt.sign(
            {
                id: admin._id,
                isAdmin: admin.isAdmin,

            },
            process.env.JWT_SEC,
            { expiresIn: "30d" }
        );
  
        const { password, ...others } = admin._doc;  
        res.status(200).json({...others, accessToken,message:"login done"});

    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;
