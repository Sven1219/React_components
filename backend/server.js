//import the required modules
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');



// Initialize the Express app and set up the middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ 
        mongoUrl: 'mongodb://localhost:27017/mern-auth', // Replace with your MongoDB connection URL
        collectionName: 'sessions', // Optional: Specify the name of the collection to store sessions (default is 'sessions')
        ttl: 3600, // Optional: Set the TTL (time-to-live) for the session documents in seconds (default is 14 days)
    }),
})
);
app.use(passport.initialize());
app.use(passport.session());
// Enable CORS
app.use(cors());
// Route handling
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);
// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mern-auth', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Start the server
const port = 5000; // or any other port you prefer
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
