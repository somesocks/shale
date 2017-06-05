const shale = require('../base');
const { compact, hashcode, equals, hasher } = shale;
const { init, update, finish } = hasher;

const freeze = Object.freeze;

const ShaleArray = function (...args) {
	var arr = new Array(...args);
	arr.__proto__ = ShaleArray.prototype;
    return arr;
};

ShaleArray.prototype = Object.create(Array.prototype);
ShaleArray.prototype.name = 'ShaleArray';



shale.shalearray = {};

shale.shalearray.hashcode = (arr) => arr._hashcode;

shale.shalearray.compact = (arr) => arr;

shale.shalearray.equals = (arr1, arr2) => {
	if (arr1._hashcode !== arr2._hashcode) { return false; }
	if (arr1.length !== arr2.length) { return false; }

	for (let i = 0; i < arr1.length; i++ ) {
		if (!equals(arr1[i], arr2[i])) { return false; }
	}

	return true;
};



shale.array = {};

shale.array.hashcode = (arr) => hashcode(compact(arr));

shale.array.compact = (arr) => {
	let hash = 0;
	let proxy = new ShaleArray();

	for (let i = 0; i < arr.length; i++) {
		const val = compact(arr[i]);

		hash = update(hash, i);
		hash = update(hash, hashcode(val));

		proxy[i] = val;
	}

	hash = finish(hash);

	proxy._hashcode = hash;
	proxy = freeze(proxy);
	return proxy;
};

shale.array.equals = (arr1, arr2) => equals(compact(arr1), compact(arr2));

shale.array.slice = (arr, begin, end) => compact(arr.slice(begin, end));

shale.array.push = (arr, ...elements) => compact([ ...arr, ...elements ]);

shale.array.pop = (arr) => compact(arr.slice(0, -1));

shale.array.map = (arr, func) => compact(arr.map(func));

shale.array.filter = (arr, func) => compact(arr.filter(func));

shale.array.sort = (arr, func) => {
	const sorted = [ ...arr ];
	sorted.sort(func);
	return compact(sorted);
}
