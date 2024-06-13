const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route.js');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

const DB = `mongodb+srv://1901650149033:4xCGydfmPgCIPUFc@bloggerproject.blenntu.mongodb.net/sample_mflix`;
const port = process.env.PORT || 5000;


//MongoDB
mongoose.connect(DB)
    .then(() => console.log("Mongoose is Connected😊😊"))
    .catch((err) => console.log(err));


app.use('/', route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}💕`));