/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		call: compact,
		input: 'test string',
		expected: 'test string'
	},
	{
		call: compact,
		input: '',
		expected: ''
	},
];

describe('string.compact tests', () => {

	TESTS.forEach(AssertTest);
	TESTS.forEach(PerformanceTest);

});
