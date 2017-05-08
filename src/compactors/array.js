const base = require('../base');
const { compact, suid, equals, register, hash } = base;
const { init, update, finish } = hash;

const freeze = Object.freeze;

const ShaleArray = function (...args) {
	var arr = new Array(...args);
	arr.__proto__ = ShaleArray.prototype;
    return arr;
};

ShaleArray.prototype = Object.create(Array.prototype);
ShaleArray.prototype.name = 'ShaleArray';

register(
	{
		type: 'array',
		suid: (arr) => suid(compact(arr)),
		compact: (arr) => {
			let hash = 0;
			let proxy = new ShaleArray();

			for (let i = 0; i < arr.length; i++) {
				const val = compact(arr[i]);

				const childSuid = suid(val);

				let childHash = init();
				childHash = update(childHash, `${i}`);
				childHash = update(childHash, childSuid);
				childHash = finish(childHash);
				hash = hash ^ childHash;

				proxy[i] = val;
			}

			proxy._suid = hash;
			proxy = freeze(proxy);
			return proxy;
		},
		equals: (arr1, arr2) => equals(compact(arr1), compact(arr2)),
	}
);

register(
	{
		type: 'shalearray',
		suid: (arr) => arr._suid,
		compact: (arr) => arr,
		equals: (arr1, arr2) => {
			if (arr1._suid !== arr2._suid) { return false; }
			if (arr1.length !== arr2.length) { return false; }

			for (let i = 0; i < arr1.length; i++ ) {
				if (!equals(arr1[i], arr2[i])) { return false; }
			}

			return true;
		}
	}
);
