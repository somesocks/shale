/** @namespace shale.object */

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


/**
* A function that returns a hashcode for an object.
* You should never need to call this directly, just call shale.hashcode
* @param val - the object to hash
* @returns an hashcode for val
* @memberof shale.object
*/
shale.object.hashcode = (obj) => hashcode(compact(obj));

/**
* A function that compacts an object into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param val - the object to compact
* @returns an immutable representation of val
* @memberof shale.object
*/
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

/**
* A function that compares two objects for deep equality.
* You should never call this directly, use shale.equals
* @param val1 - an object to compare
* @param val2 - an object to compare
* @returns true if val1 is equal to val2, false otherwise
* @memberof shale.object
*/
shale.object.equals = (ob1, ob2) => equals(compact(obj1), compact(obj2));


/**
* A function that "patches" one object with others.
* This works like Object.assign, but without modifying the target object
* @param target - the target object to "patch"
* @param ...sources - any number of source objects to patch target with
* @returns an immutable representation of the patched target
* @memberof shale.object
*/
shale.object.patch = (target, ...sources) => compact(Object.assign(
	{},
	target,
	...sources
));

/**
* A function that returns a "filtered" copy of an object.
* This works like array.filter, but on each key-value pair of the object
* @param obj - the target object to "filter"
* @param filter - a filtering function  (value, key, obj) => boolean
* @returns a filtered representation of obj
* @memberof shale.object
*/
shale.object.filter = (obj, filter) => {
	let temp = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key) && filter( obj[key], key, obj )) {
			temp[key] = obj[key];
		}
	}
	return compact(temp);
};

/**
* A function that returns a "mapped" copy of an object.
* This works like array.map, but on each key-value pair of the object
* @param obj - the target object to "map"
* @param ma - a mapping function (value, key, obj) => newValue
* @returns a mapped representation of obj
* @memberof shale.object
*/
shale.object.map = (obj, map) => {
	let temp = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			temp[key] = map(obj[key], key, obj);
		}
	}
	return compact(temp);
};
