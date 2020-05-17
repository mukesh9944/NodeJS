const expect = require('expect');

const {isRealString} = require('./validations');

describe('isRealString', () => {
  it('should reject non-string values', () => {

    var str = isRealString(123);

    expect(str).toBe(false);
  });

  it('should reject string with only spaces', () => {

    var str = isRealString('     ');

    expect(str).toBe(false);
  });

  it('should allow string with non-space characters', () => {

    var str = isRealString('   abc');

    expect(str).toBe(true);
  });

});
