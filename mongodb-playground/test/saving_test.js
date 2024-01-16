// const mocha = require('mocha');
const assert = require('assert');
const MarioChar  = require('../models/mariochar')


// Describe the tests
describe('Saving records', function() {
    
    //Create the tests you want to run
    it('Saving a record to the database', function(done) {
        
        let char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save()
            .then(() => {
                assert(char.isNew === false);
                done();
            })
    });

})