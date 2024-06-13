const userModel = require('../models/userModels');


exports.createUser = async (req, res) => {
    try {
        const user = req.body;
        const { name, email, password } = user;

        const validName = /^[a-zA-Z ]+$/;
        let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/


        if (Object.keys(user).length == 0) {
            return res.status(400).send({ status: false, message: "Body is empty can't craeate data" })
        }
        if (!name) return res.status(400).send({ status: false, message: "Pls Provided Name" })
        if (name.trim() == 0 || validName.test(name) == false) {
            return res.status(400).send({ status: false, message: "Enter a valid Name" })
        }

        if (!email) return res.status(400).send({ status: false, message: "Pls Provided emailId" })
        if (email.trim() == 0 || validEmail.test(email) == false) {
            return res.status(400).send({ status: false, message: "Enter a valid EmailId" })
        }


        if (!password) return res.status(400).send({ status: false, message: "Pls Provided Name" })
        if (password.trim() == 0 || validPassword.test(password) == false) {
            return res.status(400).send({ status: false, message: "Enter a valid Password Using" })
        }

        let oldUser = await userModel.findOne({ email: email })
        if (oldUser) { return res.status(400).send({ status: false, message: "User already exist with this Email Id" }) }
       
        let userData = await userModel.create(user);
        res.status(201).send({ status: true, msg: "User created successfully", data: userData })

    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}

exports.getAllUserData = async(req, res)=>{
    try{
        const getdata = await userModel.find().sort({_id:-1});
        res.status(200).send({ status: true, msg: "Successfully get All Data", data: getdata })
    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}