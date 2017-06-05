const shale = require('../base');
const { compact, hashcode, equals, hasher } = shale;
const { init, update, finish } = hasher;

const freeze = Object.freeze;

class ShaleObject extends Object { }


shale.shaleobject = {};

shale.shaleobject.hashcode = (obj) => obj._hashcode;

shale.shaleobject.compact = (obj) => obj;

shale.shaleobject.equals = (obj1, obj2) => {
	if (obj1._hashcode !== obj2._hashcode) { return false; }

	for (let key in obj1) {
		if (!equals(obj1[key], obj2[key])) { return false; }
	}

	for (let key in obj2) {
		if (!equals(obj1[key], obj2[key])) { return false; }
	}

	return true;
};


shale.object = {};

shale.object.hashcode = (obj) => hashcode(compact(obj));

shale.object.compact = (obj) => {
	let proxy = new ShaleObject();

	proxy._hashcode = 0;

	for (let key in obj) {
		if (key !== '_hashcode' && obj.hasOwnProperty(key) && obj[key] !== undefined) {
			const val = compact(obj[key]);

			let childHash = init();
			childHash = update(childHash, key);
			childHash = update(childHash, hashcode(val));
			childHash = finish(childHash);

			proxy._hashcode = (proxy._hashcode ^ childHash) >>> 0;

			proxy[key] = val;
		}
	}

	proxy._hashcode = finish(proxy._hashcode);
	proxy = freeze(proxy);
	return proxy;
};

shale.object.equals = (ob1, ob2) => equals(compact(obj1), compact(obj2));

shale.object.patch = (target, ...sources) => compact(Object.assign(
	{},
	target,
	...sources
));

shale.object.filter = (obj, filter) => {
	let temp = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key) && filter( obj[key], key, obj )) {
			temp[key] = obj[key];
		}
	}
	return compact(temp);
};

shale.object.map = (obj, map) => {
	let temp = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			temp[key] = map(obj[key], key, obj);
		}
	}
	return compact(temp);
};
