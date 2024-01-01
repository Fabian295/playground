const mongoose = require('mongoose');

//Connect to the db before tests are run
before((done) => {

// Connect to Mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {

        console.log('Connection has been Made, let the spectacle run ...');
        done();
    })
    .on('error', (error) => console.log('Connection error..', error));
})
