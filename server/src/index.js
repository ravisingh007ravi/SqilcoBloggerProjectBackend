const express = require('express');
const mongoose = require('mongoose');
// const route = require('./routes/route.js');
// const dotenv = require('dotenv');
// const cors = require('cors');
// require('dotenv').config()

const app = express();

// app.use(cors());
app.use(express.json());

const DB = `mongodb+srv://DeeptirthaMukherjee:QYKI3k8QSKC4I7FZ@cluster1.khatgm1.mongodb.net/BlogsMERN=true&w=majority`;
const port = process.env.PORT || 5000;


//MongoDB
mongoose.connect(DB)
    .then(() => console.log("Mongoose is Connected😊😊"))
    .catch((err) => console.log(err));


// app.use('/', route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}💕`));