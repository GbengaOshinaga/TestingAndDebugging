import { assert } from 'chai';
import evenAndOddFactors from '../main';

const errorMessage = 'Input must be a number or array of numbers';

describe('Function returns even and odd numbers', () => {
  describe('Function returns object with even and odd numbers', () => {
    it(`should return object containing two
     arrays of even and odd numbers when an array is passed in`, () => {
        assert.equal(
          evenAndOddFactors([1, 2, 3, 4, 5, 6, 7, 8]),
          { even: [2, 4, 6, 8], odd: [1, 3, 5, 7] }
        );
      });

    it(`should return object containing two
    arrays of even and odd numbers when a number is passed in`, () => {
        assert.equal(evenAndOddFactors(10), { even: [2, 4, 6, 8], odd: [1, 3, 5, 7] });
      });

    it(`should return object containing two
    arrays of even and odd numbers when an array with a single number is passed in`, () => {
        assert.equal(evenAndOddFactors([8]), { even: [2, 4, 6, 8], odd: [1, 3, 5, 7] });
      });
  });

  describe('Function returns error when invalid input is provided', () => {
    it('should return error message when string is passed', () => {
      assert.equal(evenAndOddFactors('string'), errorMessage);
    });

    it('should return error message when nothing is passed', () => {
      assert.equal(evenAndOddFactors(), errorMessage);
    });

    it('should return error message when an object is passed', () => {
      assert.equal(evenAndOddFactors({ 1: 1, 2: 2 }), errorMessage);
    });

    it('should return error message when an array of strings is passed', () => {
      assert.equal(evenAndOddFactors(['one', 'two', 'three']), errorMessage);
    });
  });
});
