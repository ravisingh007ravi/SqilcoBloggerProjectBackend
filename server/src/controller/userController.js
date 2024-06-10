const userModel = require('../models/userModels');


exports.createUser = async(req, res)=>{
try{
    console.log(req.body)
    const userdata = req.body;
    const createdData = await userModel.create(userdata)

    return res.status(201).send({msg:"Data is Created",msg:createdData})
}
catch(error){
    return res.status(500).send({msg:error.message})
}
}