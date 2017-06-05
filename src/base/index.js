const type = require('./type');
const hasher = require('./hasher');

const BASE = {};

const hashcode = (val) => {
	const _type = type(val);
	const compactor = BASE[_type];
	return compactor.hashcode(val);
};

const compact = (val) => {
	const _type = type(val);
	const compactor = BASE[_type];
	return compactor.compact(val);
}

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
