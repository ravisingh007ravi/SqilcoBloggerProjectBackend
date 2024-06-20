const express = require('express');
const router = express.Router()
const {createUser, getAllUserData, login} = require('../controller/userController');

//<-------------This API used for Create User-------------------------------------------->//
router.post('/createUser',createUser)
//<-------------This API used for Get All User Data------------------------------------->//
router.get('/getAllData',getAllUserData)

module.exports = router;





