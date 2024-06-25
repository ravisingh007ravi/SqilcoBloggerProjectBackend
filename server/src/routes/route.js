const express = require('express');
const router = express.Router()
const { createUser, getAllUserData, login } = require('../controller/userController');
const {authenticate} = require('../middleware/auth.js');
const {createBlog} = require('../controller/bloggerController.js');

//<-------------This API used for Create User-------------------------------------------->//
router.post('/createUser', createUser);
//<-------------This API used for Get All User Data-------------------------------------->//
router.get('/getAllData', getAllUserData);
//<-------------This API used for LogIn User--------------------------------------------->//
router.post('/UserLogin', login);
//<-------------This API used for Blogger User------------------------------------------->//
router.post('/createBlog',authenticate, createBlog);


router.all("/*", (req, res) => {
    res.status(400).send({ status: false, message: "Url is not Correct" })})

module.exports = router;







