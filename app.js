const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');  

const leaseRoutes = require('./api/routes/leases');
const userRoutes = require('./api/routes/users');

const app = express();

// Use middleware 
app.use(morgan('dev'));
app.use(express.json()); 
app.use(cors()); 

// DB Config 
const db = require('./config/keys').mongoURI; 

mongoose.connect(db, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 })
 .then(()=> console.log('MongoDB Connected...'))
 .catch(err => console.log(err)); 


// Routes that handle requests
app.use('/leases', leaseRoutes);
app.use('/users', userRoutes); 

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app; 