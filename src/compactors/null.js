/** @namespace shale.null */

const shale = require('../base');
const { compact, equals } = shale;

shale.null = {};

/**
* A function that returns a hashcode for a null.
* You should never need to call this directly, just call shale.hashcode
* @param val - the null to hash
* @returns an hashcode for val
* @memberof shale.null
*/
shale.null.hashcode = (val) => 0xb352a39b;

/**
* A function that compacts a null into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param val - the null to compact
* @returns an immutable representation of val
* @memberof shale.null
*/
shale.null.compact = (val) => null;


/**
* A function that compares two nulls for equality.
* You should never call this directly, use shale.equals
* @param val1 - a null to compare
* @param val2 - a null to compare
* @returns true if val1 is equal to val2, false otherwise
* @memberof shale.null
*/
shale.null.equals = (val1, val2) => val1 === val2;
