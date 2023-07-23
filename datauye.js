const mongoose = require('mongoose');

// Mengganti 'nama-database' dengan nama yang sesuai
const databaseName = 'nama-database';

// Mengganti 'mongodb://localhost:27017/' dengan URL MongoDB yang sesuai
const mongoURL = `mongodb+srv://raihanwekape:28januari@raihan.b4hapaw.mongodb.net/`;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
