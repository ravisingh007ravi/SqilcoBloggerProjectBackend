const userModel = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


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
       
        let checkpass= await bcrypt.hash(password, 10);
        user.password = checkpass;
        console.log(checkpass)

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


exports.login = async (req, res) => {
    try {

        let author = req.body;

        let { email, password } = author;

        if (email.trim().length === 0 || password.trim().length === 0){
            return res.status(400).send({ status: false, msg: "please provide login details" });
        } 

        if (!email) return res.status(400).send({ msg: " email is required " })
        if (!password) return res.status(400).send({ msg: "  password is required " })

        let loggedAuthor = await userModel.findOne({ email: email })
        if (!loggedAuthor) return res.status(400).send({ msg: "Email is Incorrect!" })


        const checkpasword = await bcrypt.compare(password.trim(), loggedAuthor.password);
        if (!checkpasword) return res.status(400).send({ msg: "password is Incorrect!" });

        let token = jwt.sign(
            {
                authorId: loggedAuthor._id.toString(),
                batch: "SqilcoFirstBatch",
                project: "Blog-Project"
            },
            'This_is_a_SecretKey', { expiresIn: '12h' }
        )

        const UserId = loggedAuthor['_id'];

        return res.status(201).send({ msg: "User logged in successfully!", loggedAuthor, token, UserId })
    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}