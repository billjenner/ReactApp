const express = require('express');
require('./services/passport');
// old code
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);

const app = express();

require('./routes/authRoutes')(app);

// mkae passport aware of the new strategy
// need to pass client ID and client Secret

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// import express from 'express'

