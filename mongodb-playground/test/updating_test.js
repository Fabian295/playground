/**
 *          The Process
 * -    Create and save a new record to the db
 * -    Use the findOneAndUpdate method to update the record
 * -    Try to findOne in the db ( the one we just updated )
 * -    Assert that the result has the updated property value
 */

const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(function(){
        console.log(char)
      done();
    });
  });


  // Create tests, here to update a record in the db
  it( 'Updates the name of a record in the database', ( done ) => {
    // assert(result)
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: "Luigi" })
        .then(() => {
            MarioChar.findOne({  _id: char._id })
        .then(( result ) => { 
          console.log(result)
          assert( result.name === 'Luigi' )
      })
        done()

        })
  } )

  it('Adds 1 to the weight property of every record', (done) => {
    MarioChar.update({}, { $inc: { weight: 1 } })
      .then()

  })

})