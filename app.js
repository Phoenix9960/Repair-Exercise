const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/reapair.routes');

// utils
const { db } = require('./Utils/database');

// init express App
const app = express();

// Enable incoming JSON data
app.use( express.json() );

// Endpoints
app.use( '/api/v1/users', usersRouter );
app.use( '/api/v1/repairs', repairsRouter  );

db.authenticate()
  .then( ()=> console.log('Database Authenticated') )
  .catch( console.log )

db.sync()
  .then( ()=> console.log('Database Synced') )
  .catch( console.log )

// Spin up Server
const PORT = 4000;
app.listen(PORT, ()=> console.log('Express app runing on PORT:', PORT));
