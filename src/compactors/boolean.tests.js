/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		call: compact,
		input: true,
		expected: true,
	},
	{
		call: compact,
		input: false,
		expected: false,
	},
	{
		call: compact,
		input: Boolean(true),
		expected: true,
	},
	{
		call: compact,
		input: Boolean(false),
		expected: false,
	},
];


describe('boolean tests', () => {

		describe('assertion tests', () => {
			TESTS.forEach(AssertTest);
		});

		describe('performance tests', () => {
			TESTS.forEach(PerformanceTest);
		});

});
