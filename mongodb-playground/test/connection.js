const mongoose = require('mongoose');

// Connect to Mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
    console.log('Connection has been Made, let the spectacle run ...');
}).on('error', (error) => console.log('Connection error..', error));