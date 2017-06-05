/** @namespace shale.number */

const shale = require('../base');
const { compact, hashcode, equals } = shale;

shale.number = {};

/**
* A function that returns a hashcode for a number.
* You should never need to call this directly, just call shale.hashcode
* @param val - the number to hash
* @returns an hashcode for val
* @memberof shale.number
*/
shale.number.hashcode = (val) => Number(val).valueOf();

/**
* A function that compacts a number into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param val - the number to compact
* @returns an immutable representation of val
* @memberof shale.number
*/
shale.number.compact = (val) => Number(val).valueOf();

/**
* A function that compares two numbers for equality.
* You should never call this directly, use shale.equals
* @param val1 - a number to compare
* @param val2 - a number to compare
* @returns true if val1 is equal to val2, false otherwise
* @memberof shale.number
*/
shale.number.equals = (val1, val2) => val1 === val2;
