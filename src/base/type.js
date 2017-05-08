
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const type = (thing) => {
	const type = typeof thing;
	switch (type) {
		default:
		case 'undefined':
		case 'boolean':
		case 'number':
		case 'string':
		case 'symbol':
		case 'function':
			return type;
		case 'object':
			if (thing === null) {
				return 'null';
			} else if (isArray(thing)) {
				return 'array';
			} else if (
				(thing.constructor || this.prototype) != null &&
				(thing.constructor || this.prototype).name != null) {
				return (thing.constructor || thing.prototype).name.toLowerCase();
			} else {
				return 'object';
			}
	}
}

module.exports = type;
