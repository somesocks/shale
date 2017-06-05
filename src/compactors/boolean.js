/** @namespace shale.boolean */


const shale = require('../base');
const { compact, hasher, equals } = shale;

const BOOL_CONST = 0x99c29f16;

let TRUE_HASHCODE = BOOL_CONST;
TRUE_HASHCODE = hasher.update(TRUE_HASHCODE, true);
TRUE_HASHCODE = hasher.finish(TRUE_HASHCODE);

let FALSE_HASHCODE = BOOL_CONST;
FALSE_HASHCODE = hasher.update(FALSE_HASHCODE, false);
FALSE_HASHCODE = hasher.finish(FALSE_HASHCODE);

shale.boolean = {};

/**
* A function that returns a hashcode for a boolean.
* You should never need to call this directly, just call shale.hashcode
* @param val - the boolean to hash
* @returns an hashcode for val
* @memberof shale.boolean
*/
shale.boolean.hashcode = (val) => Boolean(val).valueOf() ? TRUE_HASHCODE : FALSE_HASHCODE;


/**
* A function that compacts a boolean into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param val - the boolean to compact
* @returns an immutable representation of val
* @memberof shale.boolean
*/
shale.boolean.compact = (val) => Boolean(val).valueOf();

/**
* A function that compares two booleans for equality.
* You should never call this directly, use shale.equals
* @param val1 - a boolean to compare
* @param val2 - a boolean to compare
* @returns true if val1 is equal to val2, false otherwise
* @memberof shale.boolean
*/
shale.boolean.equals = (val1, val2) => val1 === val2;
