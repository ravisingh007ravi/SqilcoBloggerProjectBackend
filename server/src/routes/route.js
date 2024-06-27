const express = require('express');
const router = express.Router()
const { createUser, getAllUserData, login } = require('../controller/userController');
const { authenticate,authorize } = require('../middleware/auth.js');
const { createBlog, getAllBlogsData, getBlogsData, 
    updateBlog, deleteBlog } = require('../controller/bloggerController.js');

//<-------------This API used for Create User-------------------------------------------->//
router.post('/createUser', createUser);
//<-------------This API used for Get All User Data-------------------------------------->//
router.get('/getAllData', getAllUserData);
//<-------------This API used for LogIn User--------------------------------------------->//
router.post('/UserLogin', login);
//<-------------This API used for Blogger User------------------------------------------->//
router.post('/createBlog', authenticate, createBlog);
//<----------------This API used for Fetch All Blogs of Logged in Author---------------->//
router.get("/allBlogs/:category", authenticate, getAllBlogsData);
//<----------------This API used for Fetch Blogs of Logged in Author------------------->//
router.get("/blogs/:getBlogId", authenticate, getBlogsData);
//<----------------This API used for Update Blogs of Logged in Author------------------>//
router.put("/blogs/:blogId", authorize, updateBlog);
//<----------------These APIs used for Deleting Blogs---------------------------------->//
router.delete("/blogs/:blogId",authorize,  deleteBlog);




router.all("/*", (req, res) => {
    res.status(400).send({ status: false, message: "Url is not Correct" })
})

module.exports = router;







