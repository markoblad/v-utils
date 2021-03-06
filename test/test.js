'use strict';
var expect = require('chai').expect;
var mathjs = require('mathjs');
var VTools = require('v-tools').VTools;
var index = require('../dist/index.js');
var VUtilities = index.VUtilities;

describe('VUtilities functions test', () => {

  it('should return makeString for various', () => {
    var result = [
      VUtilities.makeString(null),
      VUtilities.makeString(),
      VUtilities.makeString(undefined),
      VUtilities.makeString(0),
      VUtilities.makeString('0'),
      VUtilities.makeString(1),
      VUtilities.makeString(''),
      VUtilities.makeString({}),
      VUtilities.makeString({0:null}),
      VUtilities.makeString([]),
      VUtilities.makeString([0]),
      VUtilities.makeString(['']),
      VUtilities.makeString(true),
      VUtilities.makeString(false),
    ];
    var expectation = [
      '',
      '',
      '',
      '0',
      '0',
      '1',
      '',
      '[object Object]',
      '[object Object]',
      '',
      '0',
      '',
      'true',
      'false',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return coerceToString for various', () => {
    var result = [
      VUtilities.coerceToString(null),
      VUtilities.coerceToString(),
      VUtilities.coerceToString(undefined),
      VUtilities.coerceToString(0),
      VUtilities.coerceToString('0'),
      VUtilities.coerceToString(1),
      VUtilities.coerceToString(''),
      VUtilities.coerceToString({}),
      VUtilities.coerceToString({0:null}),
      VUtilities.coerceToString([]),
      VUtilities.coerceToString([0]),
      VUtilities.coerceToString(['']),
      VUtilities.coerceToString(true),
      VUtilities.coerceToString(false),
    ];
    var expectation = [
      '',
      '',
      '',
      '0',
      '0',
      '1',
      '',
      '[object Object]',
      '[object Object]',
      '',
      '0',
      '',
      'true',
      'false',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });  
  it('should return reverse', () => {
    var result = VUtilities.reverse('1234');
    expect(result).to.equal('4321');
  });

  it('should return isBlank for various', () => {
    var result = [
      VUtilities.isBlank(null),
      VUtilities.isBlank(),
      VUtilities.isBlank(undefined),
      VUtilities.isBlank(0),
      VUtilities.isBlank('0'),
      VUtilities.isBlank(1),
      VUtilities.isBlank(''),
      VUtilities.isBlank({}),
      VUtilities.isBlank({0:null}),
      VUtilities.isBlank([]),
      VUtilities.isBlank([0]),
      VUtilities.isBlank(['']),
      VUtilities.isBlank(true),
      VUtilities.isBlank(false),
    ];
    var expectation = [
      true,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isObject for various', () => {
    var result = [
      VUtilities.isObject(null),
      VUtilities.isObject(),
      VUtilities.isObject(undefined),
      VUtilities.isObject(0),
      VUtilities.isObject('0'),
      VUtilities.isObject(1),
      VUtilities.isObject(''),
      VUtilities.isObject({}),
      VUtilities.isObject({0:null}),
      VUtilities.isObject([]),
      VUtilities.isObject([0]),
      VUtilities.isObject(['']),
      VUtilities.isObject(true),
      VUtilities.isObject(false),
      VUtilities.isObject(RegExp('\\d')),
      VUtilities.isObject(new RegExp('\\d')),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return isArray for various', () => {
    var result = [
      VUtilities.isArray(null),
      VUtilities.isArray(),
      VUtilities.isArray(undefined),
      VUtilities.isArray(0),
      VUtilities.isArray('0'),
      VUtilities.isArray({}),
      VUtilities.isArray({0:null}),
      VUtilities.isArray([]),
      VUtilities.isArray([0]),
      VUtilities.isArray(true),
      VUtilities.isArray(false),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return isFunction for various', () => {
    var result = [
      VUtilities.isFunction(null),
      VUtilities.isFunction(),
      VUtilities.isFunction(undefined),
      VUtilities.isFunction(0),
      VUtilities.isFunction('0'),
      VUtilities.isFunction({}),
      VUtilities.isFunction({0:null}),
      VUtilities.isFunction([]),
      VUtilities.isFunction([0]),
      VUtilities.isFunction(true),
      VUtilities.isFunction(false),
      VUtilities.isFunction(() => true),
      VUtilities.isFunction(() => { return true; }),
      VUtilities.isFunction(function(someArg) { return someArg; }),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isDate for various', () => {
    var result = [
      VUtilities.isDate(null),
      VUtilities.isDate(),
      VUtilities.isDate(undefined),
      VUtilities.isDate(0),
      VUtilities.isDate('0'),
      VUtilities.isDate({}),
      VUtilities.isDate({0:null}),
      VUtilities.isDate([]),
      VUtilities.isDate([0]),
      VUtilities.isDate(true),
      VUtilities.isDate(false),
      VUtilities.isDate(Date.now()), // returns a number
      VUtilities.isDate(new Date()),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isString for various', () => {
    var result = [
      VUtilities.isString(null),
      VUtilities.isString(),
      VUtilities.isString(undefined),
      VUtilities.isString(0),
      VUtilities.isString('0'),
      VUtilities.isString({}),
      VUtilities.isString({0:null}),
      VUtilities.isString([]),
      VUtilities.isString([0]),
      VUtilities.isString(true),
      VUtilities.isString(false),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isNumeric for various', () => {
    var result = [
      VUtilities.isNumeric(null),
      VUtilities.isNumeric(),
      VUtilities.isNumeric(undefined),
      VUtilities.isNumeric(0),
      VUtilities.isNumeric('0'),
      VUtilities.isNumeric({}),
      VUtilities.isNumeric({0:null}),
      VUtilities.isNumeric([]),
      VUtilities.isNumeric([0]),
      VUtilities.isNumeric(true),
      VUtilities.isNumeric(false),
      VUtilities.isNumeric(NaN),
      VUtilities.isNumeric(Infinity),
      VUtilities.isNumeric(mathjs.bignumber(0.0)),
      VUtilities.isNumeric(mathjs.bignumber(1.1)),
      VUtilities.isNumeric(mathjs.number(0.0)),
      VUtilities.isNumeric(mathjs.number(1.1)),
      VUtilities.isNumeric(mathjs.bignumber(mathjs.bignumber(mathjs.number(mathjs.number(1.1))))),
    ];
    var expectation = [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isBigNumber for various', () => {
    var result = [
      VUtilities.isBigNumber(null),
      VUtilities.isBigNumber(),
      VUtilities.isBigNumber(undefined),
      VUtilities.isBigNumber(0),
      VUtilities.isBigNumber('0'),
      VUtilities.isBigNumber({}),
      VUtilities.isBigNumber({0:null}),
      VUtilities.isBigNumber([]),
      VUtilities.isBigNumber([0]),
      VUtilities.isBigNumber(true),
      VUtilities.isBigNumber(false),
      VUtilities.isBigNumber(NaN),
      VUtilities.isBigNumber(Infinity),
      VUtilities.isBigNumber(mathjs.bignumber(null)),
      // VUtilities.isBigNumber(mathjs.bignumber( )),
      // VUtilities.isBigNumber(mathjs.bignumber(undefined)),
      VUtilities.isBigNumber(mathjs.bignumber(0)),
      VUtilities.isBigNumber(mathjs.bignumber('0')),
      // VUtilities.isBigNumber(mathjs.bignumber({})),
      // VUtilities.isBigNumber(mathjs.bignumber({0:null})),
      VUtilities.isBigNumber(mathjs.bignumber([])),
      VUtilities.isBigNumber(mathjs.bignumber([0])),
      VUtilities.isBigNumber(mathjs.bignumber(true)),
      VUtilities.isBigNumber(mathjs.bignumber(false)),
      VUtilities.isBigNumber(mathjs.bignumber(NaN)),
      VUtilities.isBigNumber(mathjs.bignumber(Infinity)),
    ];
    // console.log(mathjs.bignumber(true).toString());
    // console.log(mathjs.bignumber(false).toString());
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,

      true,
      // false,
      // false,
      true,
      true,
      // false,
      // false,
      false,
      false,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isTrue for various', () => {
    var result = [
      VUtilities.isTrue(null),
      VUtilities.isTrue(),
      VUtilities.isTrue(undefined),
      VUtilities.isTrue(0),
      VUtilities.isTrue('0'),
      VUtilities.isTrue({}),
      VUtilities.isTrue({0:null}),
      VUtilities.isTrue([]),
      VUtilities.isTrue([0]),
      VUtilities.isTrue(true),
      VUtilities.isTrue(false),
      VUtilities.isTrue('yEs'),
      VUtilities.isTrue('Y'),
      VUtilities.isTrue('TRUE'),
      VUtilities.isTrue('T'),
      VUtilities.isTrue(1),
      VUtilities.isTrue('On'),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isFalse for various', () => {
    var result = [
      VUtilities.isFalse(null),
      VUtilities.isFalse(),
      VUtilities.isFalse(undefined),
      VUtilities.isFalse(0),
      VUtilities.isFalse('0'),
      VUtilities.isFalse({}),
      VUtilities.isFalse({0:null}),
      VUtilities.isFalse([]),
      VUtilities.isFalse([0]), // gets stringified
      VUtilities.isFalse(true),
      VUtilities.isFalse(false),
      VUtilities.isFalse('nO'),
      VUtilities.isFalse('N'),
      VUtilities.isFalse('FALSE'),
      VUtilities.isFalse('F'),
      VUtilities.isFalse(0),
      VUtilities.isFalse('OFF'),
    ];
    var expectation = [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isTrueOrFalse for various', () => {
    var result = [
      VUtilities.isTrueOrFalse(null),
      VUtilities.isTrueOrFalse(),
      VUtilities.isTrueOrFalse(undefined),
      VUtilities.isTrueOrFalse(0),
      VUtilities.isTrueOrFalse('0'),
      VUtilities.isTrueOrFalse({}),
      VUtilities.isTrueOrFalse({0:null}),
      VUtilities.isTrueOrFalse([]),
      VUtilities.isTrueOrFalse([0]), // gets stringified
      VUtilities.isTrueOrFalse(true),
      VUtilities.isTrueOrFalse(false),
      VUtilities.isTrueOrFalse('yEs'),
      VUtilities.isTrueOrFalse('Y'),
      VUtilities.isTrueOrFalse('TRUE'),
      VUtilities.isTrueOrFalse('T'),
      VUtilities.isTrueOrFalse(1),
      VUtilities.isTrueOrFalse('On'),
      VUtilities.isTrueOrFalse('nO'),
      VUtilities.isTrueOrFalse('N'),
      VUtilities.isTrueOrFalse('FALSE'),
      VUtilities.isTrueOrFalse('F'),
      VUtilities.isTrueOrFalse(0),
      VUtilities.isTrueOrFalse('OFF'),
    ];
    var expectation = [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return eachSlice for various', () => {
    var result = '';
    VUtilities.eachSlice([1, 2, 3, 4, 5, 6], 3, function(numberPiece) {
      result += numberPiece.join('');
    });
    var expectation = [1, 2, 3, 4, 5, 6];
    expect(result).to.equal(expectation.join(''));
  });

  it('should return arraySum for various', () => {
    var result = [
      VUtilities.arraySum(null),
      VUtilities.arraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, '3.0001%', '$1', 0.1, '0.01']),
      VUtilities.arraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, '$1', 0.1, '0.01']),
      VUtilities.arraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, Infinity, 0.1, '0.1']),
    ];
    var expectation = [
      0,
      2.11,
      2.11,
      Infinity,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return bigArraySum for various', () => {
    var result = [
      VUtilities.bigArraySum(null),
      mathjs.typeOf(VUtilities.bigArraySum(null)),
      VUtilities.bigArraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, '3.0001%', '$1', 0.1, '0.01']),
      VUtilities.bigArraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, '$1', 0.1, '0.01']),
      VUtilities.bigArraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, Infinity, 0.1, '0.1']),
      mathjs.typeOf(VUtilities.bigArraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, Infinity, 0.1, '0.1'])),
      VUtilities.bigArraySum([mathjs.bignumber(1.0), mathjs.bignumber(null), mathjs.bignumber(2.0),
        mathjs.number(null), mathjs.number(3.0), mathjs.number(4.0),
        mathjs.pow(10, 2), mathjs.pow(10, 3),
        mathjs.pow(mathjs.bignumber(10), mathjs.bignumber(2)), mathjs.pow(mathjs.number(10), mathjs.number(3)),
        mathjs.pow(mathjs.bignumber(10), mathjs.number(2)), mathjs.pow(mathjs.number(10), mathjs.bignumber(3)),
        mathjs.pow(10, mathjs.number(2)), mathjs.pow(mathjs.number(10), 3),
        mathjs.pow(10, mathjs.bignumber(2)), mathjs.pow(mathjs.bignumber(10), 3),
        mathjs.number(mathjs.pow(10, 2)), mathjs.bignumber(mathjs.pow(10, 3))
      ]),
      VUtilities.bigArraySum([
        mathjs.bignumber(1),
        mathjs.bignumber(mathjs.bignumber(2)),
        0.4,
        4,
        mathjs.bignumber(mathjs.bignumber(mathjs.bignumber(10))),
        mathjs.bignumber(mathjs.bignumber(mathjs.bignumber('100'))),
        mathjs.bignumber(mathjs.bignumber(mathjs.bignumber('200.0000000000001'))),
        mathjs.bignumber(mathjs.bignumber(mathjs.bignumber('3000.0000000000000000000000001'))),
      ]),
    ];
    var expectation = [
      0,
      'BigNumber',
      2.11,
      2.11,
      Infinity,
      'BigNumber',
      6610,
      '3317.4000000000001000000000001',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return arrayItemCounts for null', () => {
    var result = VUtilities.arrayItemCounts(null);
    expect(VTools.hashesToLines([null])).to.equal(VTools.hashesToLines([result]));
  });

  it('should return arrayItemCounts', () => {
    var result = VUtilities.arrayItemCounts([0, 1, 0, '0', null, null, 'null', '1', 2.1, 2.10, 'v', 'va', 'v', 3]);
    expect(VTools.hashesToLines([result])).to.equal(VTools.hashesToLines([{'0': 3, '1': 2, null: 3, '2.1': 2, 'v': 2, 'va': 1, 3: 1}]));
  });
  it('should return arraySort', () => {
    var result = VUtilities.arraySort(null);
    expect(result.toString()).to.equal([].toString());
    var result = VUtilities.arraySort([-1, 3, 2.1, -1.1, '-Infinity', null]);
    expect(result.toString()).to.equal([-Infinity, -1.1, -1.0, null, 2.1, 3.0].toString());
  });
  it('should return arrayClosest', () => {
    var result = VUtilities.arrayClosest(1, null);
    expect(result).to.equal(null);
    var result = VUtilities.arrayClosest(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null, 1.0]);
    expect(result).to.equal(1.0);
  });
  it('should return arrayClosestBelow', () => {
    var result = VUtilities.arrayClosestBelow(1, null);
    expect(result).to.equal(null);
  });
  it('should return arrayClosestBelow', () => {
    var result = VUtilities.arrayClosestBelow(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null]);
    expect(result).to.equal(-1.0);
  });
  it('should return arrayEqualOrClosestBelow', () => {
    var result = VUtilities.arrayEqualOrClosestBelow(1, null);
    expect(result).to.equal(null);
  });
  it('should return arrayEqualOrClosestBelow', () => {
    var result = VUtilities.arrayEqualOrClosestBelow(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null]);
    expect(result).to.equal(-1.0);
  });
  it('should return arrayEqualOrClosestBelow', () => {
    var result = VUtilities.arrayEqualOrClosestBelow(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null, 0.5]);
    expect(result).to.equal(0.5);
  });
  it('should return arrayClosestAbove', () => {
    var result = VUtilities.arrayClosestAbove(1, null);
    expect(result).to.equal(null);
  });
  it('should return arrayClosestAbove', () => {
    var result = VUtilities.arrayClosestAbove(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null]);
    expect(result).to.equal(2.1);
  });
  it('should return arrayEqualOrClosestAbove', () => {
    var result = VUtilities.arrayEqualOrClosestAbove(1, null);
    expect(result).to.equal(null);
  });
  it('should return arrayEqualOrClosestAbove', () => {
    var result = VUtilities.arrayEqualOrClosestAbove(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null]);
    expect(result).to.equal(2.1);
  });
  it('should return arrayEqualOrClosestAbove', () => {
    var result = VUtilities.arrayEqualOrClosestAbove(0.5, [-1, 3, 2.1, -1.1, '-Infinity', null, 0.5]);
    expect(result).to.equal(0.5);
  });
  it('should return hasRangeOverlap for various', () => {
    var result = [
      VUtilities.hasRangeOverlap([0, 1], [1, 2]),
      VUtilities.hasRangeOverlap([0, 1], [1, 2], {strict: true}),
      VUtilities.hasRangeOverlap([0, 1.1], [1, 2], {strict: true}),
      VUtilities.hasRangeOverlap([1, 2], [0, 1.1], {strict: true}),
      VUtilities.hasRangeOverlap([1, 2], [1.1, 0], {strict: true}),
      VUtilities.hasRangeOverlap([1, 2], [1.1, 0], {strict: true, sort: true}),
      VUtilities.hasRangeOverlap([-1, 2], [1, 2]),
      VUtilities.hasRangeOverlap([0, 1.1], [1, 2]),
      VUtilities.hasRangeOverlap([1, 2], [0, 1.1]),
      VUtilities.hasRangeOverlap([2, 1], [0, 1.1]),
      VUtilities.hasRangeOverlap([2, 1], [0, 1.1], {sort: true}),
      VUtilities.hasRangeOverlap([2], [0, 1.1]),
      VUtilities.hasRangeOverlap([2, 2, 2], [0, 1.1]),
    ];
    var expectation = [
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return rangeToArray for various', () => {
    var result = [
      VUtilities.rangeToArray(0, 1),
      // VUtilities.rangeToArray(-1, 1),
      // VUtilities.rangeToArray(5, 1),
      VUtilities.rangeToArray(0, 0),
      // VUtilities.rangeToArray(1, -1),
      // VUtilities.rangeToArray(-1, -1),
      VUtilities.rangeToArray(3, 10),
      VUtilities.rangeToArray(1, 1),
    ];
    var expectation = [
      [0, 1],
      // [-1, 0, 1],
      // [5, 4, 3, 2, 1],
      [0],
      // [1, 0, -1],
      // [-1],
      [3, 4, 5, 6, 7, 8, 9, 10],
      [1],
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  
  it('should return filterHashes for various', () => {
    var hashes = [
      {
        some_att: 1,
      },
      {
        some_att: 2,
      },
      {
        some_att: 3,
      },
    ];
    var result = VUtilities.filterHashes(hashes, {some_att: 2});
    var expectation = [
      {
        some_att: 2,
      },
    ];
    expect(VTools.hashesToLines(result)).to.equal(VTools.hashesToLines(expectation));
    var result = VUtilities.filterHashes(hashes, { some_att: (att) => { return att < 3; } });
    var expectation = [
      {
        some_att: 1,
      },
      {
        some_att: 2,
      },
    ];
    expect(VTools.hashesToLines(result)).to.equal(VTools.hashesToLines(expectation));
  });

  it('for enumDate should get unix UTC timestamp given a unix UTC timestamp', () => {
    var result = VUtilities.enumDate(1439344269);
    expect(result).to.equal(1439344269);
  });
  it('for enumDate should get unix UTC timestamp given a date', () => {
    var result = VUtilities.enumDate('August 11, 2015');
    // 1439265600000
    expect(result).to.equal(1439251200000);
  });
  it('for enumDate should get unix UTC timestamp given a date', () => {
    var result = VUtilities.enumDate('August 11, 2015 21:51:09');
    expect(result).to.equal(1439329869000);
  });
  it('for enumDate should get NaN given a date wrapped in an array', () => {
    var result = VUtilities.enumDate(['August 11, 2015 21:51:09']);
    // expect(result.toString()).to.equal(NaN.toString());
    expect(result).to.equal(1439329869000);
  });
  it('for newUTCDateTimeStamp should get unix UTC timestamp', () => {
    var result = VUtilities.newUTCDateTimeStamp();
    expect(result.toString().length).to.equal(13);
  });
  it('convertDateToStartOfDayStamp should get unix UTC start of day timestamp for a given a date', () => {
    var result = VUtilities.convertDateToStartOfDayStamp('August 11, 2015 21:51:09');
    expect(result).to.equal(1439251200000);
  });
  it('for enumDate should get unix UTC timestamp in milliseconds given a numeric string even if it appears to be in seconds', () => {
    var result = [
      VUtilities.enumDate('1439329869000'),
      VUtilities.enumDate('1439329869'),
    ];
    var exp = [
      1439329869000,
      1439329869,
    ];
    expect(result.toString()).to.equal(exp.toString());
  });
  it('for enumDate should get various formats', () => {
    var result = [
      VUtilities.enumDate('August 11, 2015'),
      VUtilities.enumDate('August 11, 2015 21:51:09 UTC'),
      VUtilities.enumDate('Tue August 11, 2015 21:51:09 UTC'),
      VUtilities.enumDate('Tuesday August 11, 2015 21:51:09 UTC'),
      VUtilities.enumDate('Tuesday, August 11, 2015 21:51:09 UTC'),
      VUtilities.enumDate('Tues, August 11, 2015 21:51:09 UTC'),
      VUtilities.enumDate('Tue Aug 11 2015 21:51:09'),
      VUtilities.enumDate('Tue Aug 11 2015 21:51:09 GMT+0000'),
      VUtilities.enumDate('2016-09-30T19:31:55.637-04:00'),
      VUtilities.enumDate('20190720'),
      VUtilities.enumDate('20190230'),
      VUtilities.enumDate('20191301'),
    ];
    var exp = [
      1439251200000,
      1439329869000,
      1439329869000,
      1439329869000,
      1439329869000,
      1439329869000,
      1439329869000,
      1439329869000,
      1475278315637,
      1563580800000,
      '20190230',
      '20191301',
    ];
    expect(result.toString()).to.equal(exp.toString());
  });
  it('should return periodsToSortedStamps for various', () => {
    var result = VUtilities.periodsToSortedStamps([
      'August 11, 2015 21:51:09',
      'August 11, 2015 21:51:09',
      null,
      'August 11, 2015 21:51:10',
      1439344269
    ]);
    var expectation = [
      1439344269,
      1439329869000,
      1439329870000,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return isLeapYear for various', () => {
    var result = [
      VUtilities.isLeapYear(2016),
      VUtilities.isLeapYear(2020),
      VUtilities.isLeapYear(2024),
      VUtilities.isLeapYear(2032),
      VUtilities.isLeapYear(2000),
      VUtilities.isLeapYear(0),
      VUtilities.isLeapYear(-400),
      VUtilities.isLeapYear(-300),
      VUtilities.isLeapYear(2017),
      VUtilities.isLeapYear(2018),
      VUtilities.isLeapYear(1700),
      VUtilities.isLeapYear(1800),
      VUtilities.isLeapYear(1900),
    ];
    var expectation = [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return parseIntOrZero', () => {
    var result = [
      VUtilities.parseIntOrZero(),
      VUtilities.parseIntOrZero(undefined),
      VUtilities.parseIntOrZero(null),
      VUtilities.parseIntOrZero('0'),
      VUtilities.parseIntOrZero('010'),
      VUtilities.parseIntOrZero(100),
      VUtilities.parseIntOrZero(100.001),
      VUtilities.parseIntOrZero('00100.001'),
      VUtilities.parseIntOrZero('00100.001'),
      VUtilities.parseIntOrZero(mathjs.bignumber(null)),
      VUtilities.parseIntOrZero(mathjs.bignumber('0')),
      VUtilities.parseIntOrZero(mathjs.bignumber('010')),
      VUtilities.parseIntOrZero(mathjs.bignumber(100)),
      VUtilities.parseIntOrZero(mathjs.bignumber(100.001)),
      VUtilities.parseIntOrZero(mathjs.bignumber('00100.001')),
      VUtilities.parseIntOrZero(mathjs.bignumber('00100.001')),
    ];
    var expectation = [
      0,
      0,
      0,
      0,
      10,
      100,
      100,
      100,
      100,
      0,
      0,
      10,
      100,
      100,
      100,
      100,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return parseFloatOrZero', () => {
    var result = [
      VUtilities.parseFloatOrZero(),
      VUtilities.parseFloatOrZero(undefined),
      VUtilities.parseFloatOrZero(null),
      VUtilities.parseFloatOrZero('0'),
      VUtilities.parseFloatOrZero('010'),
      VUtilities.parseFloatOrZero(100),
      VUtilities.parseFloatOrZero(100.001),
      VUtilities.parseFloatOrZero('00100.001'),
      VUtilities.parseFloatOrZero('00100.001'),
      VUtilities.parseFloatOrZero(mathjs.bignumber(null)),
      VUtilities.parseFloatOrZero(mathjs.bignumber('0')),
      VUtilities.parseFloatOrZero(mathjs.bignumber('010')),
      VUtilities.parseFloatOrZero(mathjs.bignumber(100)),
      VUtilities.parseFloatOrZero(mathjs.bignumber(100.001)),
      VUtilities.parseFloatOrZero(mathjs.bignumber('00100.001')),
      VUtilities.parseFloatOrZero(mathjs.bignumber('00100.001')),
    ];
    var expectation = [
      0.0,
      0.0,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return parseBigOrZero', () => {
    var result = [
      VUtilities.parseBigOrZero(),
      VUtilities.parseBigOrZero(undefined),
      VUtilities.parseBigOrZero(null),
      VUtilities.parseBigOrZero('0'),
      VUtilities.parseBigOrZero('010'),
      VUtilities.parseBigOrZero(100),
      VUtilities.parseBigOrZero(100.001),
      VUtilities.parseBigOrZero('00100.001'),
      VUtilities.parseBigOrZero('00100.001'),
      VUtilities.parseBigOrZero(mathjs.bignumber(null)),
      VUtilities.parseBigOrZero(mathjs.bignumber('0')),
      VUtilities.parseBigOrZero(mathjs.bignumber('010')),
      VUtilities.parseBigOrZero(mathjs.bignumber(100)),
      VUtilities.parseBigOrZero(mathjs.bignumber(100.001)),
      VUtilities.parseBigOrZero(mathjs.bignumber('00100.001')),
      VUtilities.parseBigOrZero(mathjs.bignumber('00100.001')),
      VUtilities.parseBigOrZero(mathjs.number(null)),
      VUtilities.parseBigOrZero(mathjs.number('0')),
      VUtilities.parseBigOrZero(mathjs.number('010')),
      VUtilities.parseBigOrZero(mathjs.number(100)),
      VUtilities.parseBigOrZero(mathjs.number(100.001)),
      VUtilities.parseBigOrZero(mathjs.number('00100.001')),
      VUtilities.parseBigOrZero(mathjs.number('00100.001')),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number(null))),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number('0'))),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number('010'))),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number(100))),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number(100.001))),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number('00100.001'))),
      VUtilities.parseBigOrZero(mathjs.bignumber(mathjs.number('00100.001'))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber(null))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber('0'))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber('010'))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber(100))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber(100.001))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber('00100.001'))),
      VUtilities.parseBigOrZero(mathjs.number(mathjs.bignumber('00100.001'))),
    ];
    var expectation = [
      0.0,
      0.0,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return parseBigOrOne', () => {
    var result = [
      VUtilities.parseBigOrOne(),
      VUtilities.parseBigOrOne(undefined),
      VUtilities.parseBigOrOne(null),
      VUtilities.parseBigOrOne('0'),
      VUtilities.parseBigOrOne('010'),
      VUtilities.parseBigOrOne(100),
      VUtilities.parseBigOrOne(100.001),
      VUtilities.parseBigOrOne('00100.001'),
      VUtilities.parseBigOrOne('00100.001'),
      mathjs.bignumber(null),
      VUtilities.parseBigOrOne(mathjs.bignumber(null)),
      VUtilities.parseBigOrOne(mathjs.bignumber('0')),
      VUtilities.parseBigOrOne(mathjs.bignumber('010')),
      VUtilities.parseBigOrOne(mathjs.bignumber(100)),
      VUtilities.parseBigOrOne(mathjs.bignumber(100.001)),
      VUtilities.parseBigOrOne(mathjs.bignumber('00100.001')),
      VUtilities.parseBigOrOne(mathjs.bignumber('00100.001')),
    ];
    var expectation = [
      1.0,
      1.0,
      1.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
      0.0,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

});
