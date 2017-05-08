/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		call: compact,
		input: 0,
		expected: 0,
	},
	{
		call: compact,
		input: Number(0),
		expected: 0,
	},
];

describe('number tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
