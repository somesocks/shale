const type = require('./type');
const hash = require('./hash');

const COMPACTORS = {};

const register = (compactor) => COMPACTORS[compactor.type] = compactor;

const suid = (val) => {
	const _type = type(val);
	const compactor = COMPACTORS[_type];
	return compactor.suid(val);
};

const compact = (val) => {
	const _type = type(val);
	const compactor = COMPACTORS[_type];
	return compactor.compact(val);
}

const equals = (val1, val2) => {
	val1 = compact(val1);
	val2 = compact(val2);

	const type1 = type(val1);
	const type2 = type(val2);

	if (type1 !== type2) { return false; }

	const compactor = COMPACTORS[type1];
	return compactor.equals(val1, val2);
};

module.exports = {
	hash,
	type,
	register,
	suid,
	compact,
	equals,
};
