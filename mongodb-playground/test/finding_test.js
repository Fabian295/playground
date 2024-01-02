// const mocha = require('mocha');
const assert = require('assert');
const MarioChar  = require('../models/mariochar')


// Describe the tests
describe('Finding records', function() {
    
    //Add a character to the db before each test
    beforeEach((done) => {

    const char = new MarioChar({
        name: 'Mario'
    });
    char.save()
        .then(() => done());
    });

    // Create tests
    it('Finds a record from the database', function(done) {
        
        MarioChar.findOne({ name: 'Mario' })
            .then((result) => {
                assert(result.name === 'Mario');
                done();
            })

    })

})