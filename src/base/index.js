
/**
* A function that returns the type of a value
* @param val - the value to check
* @returns a type string
* @memberof shale
*/
const type = require('./type');

const hasher = require('./hasher');

const BASE = {};

/**
* A function that returns the shale hashcode of a value
* @param val - the value to check
* @returns a 32-bit hashcode
* @memberof shale
*/
const hashcode = (val) => {
	const _type = type(val);
	const compactor = BASE[_type];
	return compactor.hashcode(val);
};

/**
* A function that compacts a value into an immutable representation
* @param val - the value to compact
* @returns an immutable representation of val
* @memberof shale
*/
const compact = (val) => {
	const _type = type(val);
	const compactor = BASE[_type];
	return compactor.compact(val);
}

/**
* A function that checks if two values are equal
* @param val1 - a value to compare
* @param val2 - a value to compare
* @returns a boolean, true if val1 is equal to val2
* @memberof shale
*/
const equals = (val1, val2) => {
	val1 = compact(val1);
	val2 = compact(val2);

	const type1 = type(val1);
	const type2 = type(val2);

	if (type1 !== type2) { return false; }

	const compactor = BASE[type1];
	return compactor.equals(val1, val2);
};


BASE.hasher = hasher;

BASE.type = type;

BASE.hashcode = hashcode;

BASE.compact = compact;

BASE.equals = equals;

module.exports = BASE;
