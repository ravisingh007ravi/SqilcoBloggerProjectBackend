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

exports.getAllBlogsData = async (req, res) => {

    try {
        const filter = req.params;
    
        if (filter.category == 'AllBlogs') {
            const AllData = await blogModel.find({isDeleted:false}).sort({_id:-1});
            return res.status(200).send({ msg: AllData })
        }
        else {
            const getData = await blogModel.find({ categories: filter.category, isDeleted:false }).sort({_id:-1});
            if (!getData) return res.status(404).send({ msg: " Not blogs Presents" });
            return res.status(200).send({ msg: getData })
        }
    }
    catch (error) { return res.status(500).send({ msg: error.message }) }
}

//<----------------This API used for Fetch Blogs of Logged in Author----------->//
exports.getBlogsData = async (req, res) => {
    try {
        let id = req.params.authorId;

        if (!id) return res.status(400).send({ status: false, msg: "id is required" })

        // let isValid = mongoose.Types.ObjectId.isValid(id)
        // if (!isValid) return res.status(400).send({ msg: "enter valid objectID" })

        let data = await blogModel.find({ _id: id, isDeleted:false })
        
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "No Blogger Present in DataBase" });
        }
        return res.status(200).send({ msg: data })

    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}


exports.updateBlog = async function (req, res) {
    try {

        const Blogdata = req.body;

        const {picture, title, description,} =Blogdata;

        let inputId = req.params.blogId;

        let data = await blogModel.findOne({ _id: inputId })

        
        if (!data) return res.status(400).send({ msg: "Blog is Not Presents" })

        let blogs = await blogModel.findOneAndUpdate({ _id: inputId },
            {
                $set: {picture:picture, title: title, description: description }     
            },
            { new: true })
            
        return res.status(200).send({ msg: blogs })
    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}


exports.updateBlog = async function (req, res) {
    try {

        const Blogdata = req.body;

        const {picture, title, description,} =Blogdata;

        let inputId = req.params.blogId;

        let data = await blogModel.findOne({ _id: inputId })

        
        if (!data) return res.status(400).send({ msg: "Blog is Not Presents" })

        let blogs = await blogModel.findOneAndUpdate({ _id: inputId },
            {
                $set: {picture:picture, title: title, description: description }     
            },
            { new: true })
            
        return res.status(200).send({ msg: blogs })
    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}



exports.deleteBlog = async function (req, res) {
    try {


        let inputId = req.params.blogId

        let date = new Date();

        let data = await blogModel.findOneAndUpdate({ _id: inputId },
            { $set: { isDeleted: true, deletedAt: date } },
            { new: true })
            
        if (!data) return res.status(404).send({ msg: "no data found" })

        return res.status(200).send({ status: true, msg: data })

    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}