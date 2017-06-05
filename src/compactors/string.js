/** @namespace shale.string */

const shale = require('../base');
const { compact, equals, hasher } = shale;

shale.string = {};

/**
* A function that returns a hashcode for a string.
* You should never need to call this directly, just call shale.hashcode
* @param val - the string to hash
* @returns an hashcode for val
* @memberof shale.string
*/
shale.string.hashcode = (val) => hasher.hash(val);

/**
* A function that compacts a string into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param val - the string to compact
* @returns an immutable representation of val
* @memberof shale.string
*/
shale.string.compact = (val) => val;

/**
* A function that compares two strings for equality.
* You should never call this directly, use shale.equals
* @param val1 - a string to compare
* @param val2 - a string to compare
* @returns true if val1 is equal to val2, false otherwise
* @memberof shale.string
*/
shale.string.equals = (val1, val2) => val1 === val2;
