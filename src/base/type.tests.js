/* node-env mocha */

const type = require('./type');

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		label: 'type test string',
		call: type,
		input: [ '' ],
		expected: 'string',
	},
	{
		label: 'type test string 2',
		call: type,
		input: [ 'a string' ],
		expected: 'string'
	},
	{
		label: 'type test undefined',
		call: type,
		input: [ undefined ],
		expected: 'undefined',
	},
	{
		label: 'type test null',
		call: type,
		input: [ null ],
		expected: 'null',
	},
	{
		label: 'type test number',
		call: type,
		input: [ 0 ],
		expected: 'number',
	},
	{
		label: 'type test boolean',
		call: type,
		input: [ false ],
		expected: 'boolean',
	},
	{
		label: 'type test boolean 2',
		call: type,
		input: [ true ],
		expected: 'boolean',
	},
	{
		label: 'type test object',
		call: type,
		input: [ {} ],
		expected: 'object',
	},
	{
		label: 'type test array',
		call: type,
		input: [ [] ],
		expected: 'array',
	},
	{
		label: 'type test function',
		call: type,
		input: [ () => {} ],
		expected: 'function',
	},
	{
		label: 'type test regexp',
		call: type,
		input: [ /a/ ],
		expected: 'regexp',
	},
	{
		label: 'type test date',
		call: type,
		input: [ new Date() ],
		expected: 'date',
	}
];

describe('type tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
