const express = require('express');
const router = express.Router()
const {createUser, getAllUserData} = require('../controller/userController');

//<-------------This API used for Create Author----------------------------------------->//
router.post('/createUser',createUser)
//<-------------This API used for Create Author----------------------------------------->//
router.get('/getAllData',getAllUserData)

module.exports = router;





