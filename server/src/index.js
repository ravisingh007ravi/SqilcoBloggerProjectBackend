const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(express.json());

const DB = `mongodb+srv://1901650149033:4xCGydfmPgCIPUFc@bloggerproject.blenntu.mongodb.net/`;
const port = process.env.PORT || 5000;


//MongoDB
mongoose.connect(DB)
    .then(() => console.log("Mongoose is Connected😊😊"))
    .catch((err) => console.log(err));


app.use('/', route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}💕`));