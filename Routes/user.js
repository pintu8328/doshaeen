const { Router } = require("express");
const UserModel = require("../Models/user");
const kycrouter = Router();
const bcrypt = require("bcrypt");

kycrouter.post("/user/kyc", async (req, res) => {
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);


  const newUser = new UserModel({
    email: req.body.email,
    age:req.body.age,
    father:req.body.father,
    adress:req.body.adress,
    name: req.body.name,
    password: hashedPassword,
    pan:req.body.pan,
    aadhar:req.body.aadhar,
    passport:req.body.passport
  });

  newUser
    .save()
    .then(() => {
      res.send({ code: 200, message: "Kyc success" });
    })
    .catch((err) => {
      res.send({ code: 500, message: "Something went wrong" });
    });
});

kycrouter.get("/user/kyc/:id",async(req,res)=>{
  try {
      const _id= req.params.id;
      const kycdata= await UserModel.findById(_id)
      console.log(kycdata)

      if(!kycdata){
          return res.status(404).send()
      }else{
          return res.send(kycdata)
      }
  } catch (error) {
      console.log(error)
  }
})


 


module.exports = kycrouter;
