/**
 *          The Process
 * -    Create and save a new record to the db
 * -    Use the findOneAndRemove method to remove the record
 * -    Try to findOne in the db ( the one we just removed )
 * -    Assert that the result is null
 */

const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
        console.log(char)
      done();
    });
  });


  // Create tests, here to delete a record in the db
  it( 'Deletes a record in the database', ( done ) => {
    // assert(result)
    MarioChar.findOneAndDelete({ name: 'Mario' })
        .then(() => {
            MarioChar.findOne({  name: "Mario" })
        .then(( result ) => assert( result === null ))
        done()

        })
  } )

})