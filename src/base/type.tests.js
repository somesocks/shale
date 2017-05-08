/* node-env mocha */

const type = require('./type');

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{ call: type, input: [ '' ], expected: 'string' },
	{ call: type, input: [ 'a string' ], expected: 'string' },
	{ call: type, input: [ undefined ], expected: 'undefined' },
	{ call: type, input: [ null ], expected: 'null' },
	{ call: type, input: [ 0 ], expected: 'number' },
	{ call: type, input: [ false ], expected: 'boolean' },
	{ call: type, input: [ true ], expected: 'boolean' },
	{ call: type, input: [ {} ], expected: 'object' },
	{ call: type, input: [ [] ], expected: 'array' },
	{ call: type, input: [ () => {} ], expected: 'function' },
	{ call: type, input: [ /a/ ], expected: 'regexp' },
	{ call: type, input: [ new Date() ], expected: 'date'}
];

describe('type tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
