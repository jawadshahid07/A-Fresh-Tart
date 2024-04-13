const mongoose = require('mongoose');
const dbConfig = require('./dbconfig');

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
