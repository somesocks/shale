/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		call: compact,
		input: undefined,
		expected: undefined,
	},
];

describe('undefined tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
