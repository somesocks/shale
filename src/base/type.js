
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
			} else if (
				(thing.__proto__ || this.prototype || thing.constructor) != null &&
				(thing.__proto__ || this.prototype || thing.constructor).name != null) {
				return (thing.__proto__ || this.prototype || thing.constructor).name.toLowerCase();
			} else if (isArray(thing)) {
				return 'array';
			} else {
				return 'object';
			}
	}
}

module.exports = type;
