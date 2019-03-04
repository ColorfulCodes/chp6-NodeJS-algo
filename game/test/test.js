// const { easy } = require('../guess.js');
const { expect } = require('chai');

describe('Guessing Game', () => {
  // if we do not want a test to run yet, put an x in front of it
  describe('Easy Mode', () => {
    xit('Run easy mode',() => {
      easy();
    });
  });

  it('should return true', () => (
    expect(true).to.be.true
  ));
});
