const blogModel = require("../models/blogModels");
// const userModel = require("../models/userModels");
// const mongoose = require('mongoose');


exports.createBlog = async (req, res) => {

    try {
        const Blog = req.body
        
        if (Object.keys(Blog).length == 0) {
            return res.status(400).send({ status: false, msg: "Invalid request Please provide Blogs details" });
        }

        const { title, description, userId, picture, userName, categories } = Blog;

        if (!title) return res.status(400).send({ msg: " title is required " });
        if (!description) return res.status(400).send({ msg: "description is required " });
        if (!userId) return res.status(400).send({ msg: " authorId is required " });
        if (!picture) return res.status(400).send({ msg: " picture is required " });
        if (!userName) return res.status(400).send({ msg: " userName is required " });
        if (!categories) return res.status(400).send({ msg: " category is require" });


        let blogCreated = await blogModel.create(Blog)

        return res.status(201).send({ status: true, data: blogCreated })
    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}