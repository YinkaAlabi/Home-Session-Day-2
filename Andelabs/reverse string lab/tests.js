var app = require('./index.js');

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(app.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(app.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(app.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(app.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(app.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(app.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(app.reverseString('misc')).toEqual('csim');
    });
  });

  describe("Case for non-string data type", function() {

    it("should return 'false argument' for 123", function() {
      expect(app.reverseString(123)).toEqual('false argument');
    });

    it("should return 'false argument' boolean true", function() {
      expect(app.reverseString(true)).toEqual('false argument');
    });
  });

  describe("Case for strings not necessarily words", function() {

    it("should return `13452` for `25431`", function() {
      expect(app.reverseString('25431')).toEqual('13452');
    });
  });  

  describe("Case for palindrome-string which is not necessarily a word", function() {

    it("should return true for `323`", function() {
      expect(app.reverseString('323')).toEqual(true);
    });

    it("should return true for `777`", function() {
      expect(app.reverseString('777')).toEqual(true);
    });

    it("should return true for `ab8ba`", function() {
      expect(app.reverseString('ab8ba')).toEqual(true);
    });
  });

  describe("Case for case-sensitivity", function() {

    it("should return `Aaa` for `aaA`", function() {
      expect(app.reverseString('aaA')).toEqual('Aaa');
    });

    it("should return `aBba` for `abBa`", function() {
      expect(app.reverseString('abBa')).toEqual('aBba');
    });

    it("should return `true` for `mAllAm`", function() {
      expect(app.reverseString('mAllAm')).toEqual(true);
    });

  });


});