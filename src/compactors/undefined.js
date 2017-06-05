/** @namespace shale.undefined */

const shale = require('../base');
const { compact, equals } = shale;

shale.undefined = {};

/**
* A function that returns a hashcode for an undefined.
* You should never need to call this directly, just call shale.hashcode
* @param val - the undefined to hash
* @returns an hashcode for val
* @memberof shale.undefined
*/
shale.undefined.hashcode = (val) => 0xc37ba5d4;

/**
* A function that compacts an undefined into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param val - the undefined to compact
* @returns an immutable representation of val
* @memberof shale.undefined
*/
shale.undefined.compact = (val) => undefined;

/**
* A function that compares two undefineds for equality.
* You should never call this directly, use shale.equals
* @param val1 - an undefined to compare
* @param val2 - an undefined null to compare
* @returns true if val1 is equal to val2, false otherwise
* @memberof shale.undefined
*/
shale.undefined.equals = (val1, val2) => val1 === val2;
