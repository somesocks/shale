const base = require('../base');
const { compact, suid, equals, register, hash } = base;
const { init, update, finish } = hash;

const freeze = Object.freeze;

class ShaleObject extends Object { }

register(
	{
		type: 'object',
		suid: (obj) => suid(compact(obj)),
		compact: (obj) => {
			let proxy = new ShaleObject();

			proxy._suid = 0;

			for (let key in obj) {
				if (key !== '_suid' && obj.hasOwnProperty(key) && obj[key] !== undefined) {
					const val = compact(obj[key]);

					const childSuid = suid(val);


					let childHash = init();
					childHash = update(childHash, key);
					childHash = (childHash ^ childSuid) >>> 0;
					childHash = finish(childHash);
					proxy._suid = (proxy._suid ^ childHash) >>> 0;

					proxy[key] = val;
				}
			}

			proxy._suid = finish(proxy._suid);
			proxy = freeze(proxy);
			return proxy;
		},
		equals: (obj1, obj2) => equals(compact(obj1), compact(obj2)),
	}
);

register(
	{
		type: 'shaleobject',
		suid: (obj) => obj._suid,
		compact: (obj) => obj,
		equals: (obj1, obj2) => {
			if (obj1._suid !== obj2._suid) { return false; }

			for (let key in obj1) {
				if (!equals(obj1[key], obj2[key])) { return false; }
			}

			for (let key in obj2) {
				if (!equals(obj1[key], obj2[key])) { return false; }
			}

			return true;
		}
	}
);

const patch = (...args) => compact(Object.assign(...args));

const filter = (obj, filter) => {
	let temp = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key) && filter( obj[key], key, obj )) {
			temp[key] = obj[key];
		}
	}
	return compact(temp);
};

const map = (obj, map) => {
	let temp = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			temp[key] = map(obj[key], key, obj);
		}
	}
	return compact(temp);
};

base.object = {
	patch,
	filter,
	map,
};
