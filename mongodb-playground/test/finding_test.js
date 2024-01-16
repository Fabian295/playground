// const mocha = require('mocha');
const assert = require('assert');
const MarioChar  = require('../models/mariochar')


// Describe the tests
describe('Finding records', function() {
    let char;

    //Add a character to the db before each test
    beforeEach((done) => {

    char = new MarioChar({
        name: 'Mario',
        weight: 50
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


    //Find one record /character by ID
    it('Finds a record from the database', function(done) {
    
        MarioChar.findOne({ _id: char._id })
            .then(result => {
                assert(result._id.toString() === char._id.toString());
                done()
        })
    
    })

})

