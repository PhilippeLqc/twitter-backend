const mongoose = require('mongoose');

// const connectionString = process.env.CONNECTION_STRING;
const connectionString = 'mongodb+srv://philippelacapsule:H1r0nd3773@cluster0.6dvqohn.mongodb.net/hackatweet'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
