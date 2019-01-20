const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv').config
const path = require('path')
var cors = require('cors')

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
//app.use(cors())
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



    app.use(express.static(path.join(__dirname, "client","build")))
    app.get("*" , (req , res)=>{
        const index = path.join(__dirname , "client" , "index.html")
        res.sendFile(index);
    })


const port = process.env.PORT || 3500;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)});
