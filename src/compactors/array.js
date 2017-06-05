/** @namespace shale.array */

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

/**
* A function that returns a hashcode for an array.
* You should never need to call this directly, just call shale.hashcode
* @param arr - the array to hash
* @returns an hashcode for arr
* @memberof shale.array
*/
shale.array.hashcode = (arr) => hashcode(compact(arr));

/**
* A function that compacts an array into an immutable representation.
* You should never need to call this directly, just call shale.compact
* @param arr - the array to compact
* @returns an immutable representation of arr
* @memberof shale.array
*/
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

/**
* A function that compares two arrays for deep equality.
* You should never call this directly, use shale.equals
* @param arr1 - an array to compare
* @param arr2 - an array to compare
* @returns true if arr1 is equal to arr2, false otherwise
* @memberof shale.array
*/
shale.array.equals = (arr1, arr2) => equals(compact(arr1), compact(arr2));

/**
* A function that slices an array or an immutable array.
* This doesn't modify the source array.
* @param arr - the array or immutable array to slice
* @param begin - the beginning index
* @param end - the ending index
* @returns an immutable slice of val
* @memberof shale.array
*/
shale.array.slice = (arr, begin, end) => compact(arr.slice(begin, end));

/**
* A function that pushes any number of elements onto an array or an immutable array.
* This doesn't modify the source array.
* @param arr - the array or immutable array to 'push' onto
* @param ...elements - any number of elements to push onto the end of the arr
* @param end - the ending index
* @returns an immutable array equivalent to [ ...arr, ...elements ]
* @memberof shale.array
*/
shale.array.push = (arr, ...elements) => compact([ ...arr, ...elements ]);

/**
* A function that 'pops' one element off the source array.
* This doesn't modify the source array, it returns an immutable copy of the array, minus the last element.
* @param arr - the array or immutable array to 'pop'
* @returns an immutable array that is a copy of arr, with the last element removed
* @memberof shale.array
*/
shale.array.pop = (arr) => compact(arr.slice(0, -1));

/**
* A function that maps every element of an array to a new array using a mapping function.
* This is equivalent to array.map, but the returned array is immutable
* @param arr - the array to map
* @param func - the mapping function
* @returns an immutable array that is a mapped copy of the original
* @memberof shale.array
*/
shale.array.map = (arr, func) => compact(arr.map(func));

/**
* A function that filters elements from an array using a filter function.
* This is equivalent to array.filter, but the returned array is immutable
* @param arr - the array to filter
* @param func - the filter function
* @returns an immutable array that is a filter copy of the original
* @memberof shale.array
*/
shale.array.filter = (arr, func) => compact(arr.filter(func));

/**
* A function that sorts an array or an immutable array.
* This doesn't modify the original array, but returns an immutable sorted copy.
* @param arr - the array to filter
* @param func - the sorting function
* @returns an immutable array that is a sorted immutable copy of the original
* @memberof shale.array
*/
shale.array.sort = (arr, func) => {
	const sorted = [ ...arr ];
	sorted.sort(func);
	return compact(sorted);
}
