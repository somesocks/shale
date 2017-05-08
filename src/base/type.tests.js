/* node-env mocha */

const type = require('./type');

const TESTS = [
	{ input: '', expected: 'string' },
	{ input: 'a string', expected: 'string' },
	{ input: undefined, expected: 'undefined' },
	{ input: null, expected: 'null' },
	{ input: 0, expected: 'number' },
	{ input: false, expected: 'boolean' },
	{ input: true, expected: 'boolean' },
	{ input: {}, expected: 'object' },
	{ input: [], expected: 'array' },
	{ input: () => {}, expected: 'function' },
	{ input: /a/, expected: 'regexp' },
	{ input: new Date(), expected: 'date'}
];

describe('type tests', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				type(test.input) === test.expected ? null : new Error(`Failed! Expected ${test.expected}, got ${type(test.input)}`)
			)
		);
	});
});
