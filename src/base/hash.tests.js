/* node-env mocha */

const { hash } = require('./hash');

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		label: 'empty string',
		call: hash,
		input: '',
		expected: hash(''),
	},
	{
		label: 'short string',
		call: hash,
		input: new Array(8 + 1).join('0'),
		expected: hash(new Array(8 + 1).join('0')),

	},
	{
		label: 'medium string',
		call: hash,
		input: new Array(256 + 1).join('0'),
		expected: hash(new Array(256 + 1).join('0')),
	},
	{
		label: 'long string',
		call: hash,
		input: new Array(65536 + 1).join('0'),
		expected: hash(new Array(65536 + 1).join('0')),
	},
];

describe('hash tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});
	
});
