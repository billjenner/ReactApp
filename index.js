const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
// old code
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// mkae passport aware of the new strategy
// need to pass client ID and client Secret

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// import express from 'express'

