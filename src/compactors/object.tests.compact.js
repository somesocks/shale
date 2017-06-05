/* node-env mocha */
'use strict';

const shale = require('../');
const { compact, equals } = shale;

const { AssertTest, PerformanceTest } = require('../testing');

const build4tree = (depth) => {
	return depth === 0 ?
		{} :
		{
			a: build4tree(depth - 1),
			b: build4tree(depth - 1),
			c: build4tree(depth - 1),
			d: build4tree(depth - 1),
		}
};

const TESTS = [
	{
		call: compact,
		input: undefined,
		expected: undefined,
	},
	{
		call: compact,
		input: build4tree(1),
		expected: build4tree(1),
	},
	{
		call: compact,
		input: build4tree(2),
		expected: build4tree(2),
	},
	{
		call: compact,
		input: build4tree(3),
		expected: build4tree(3),
	},
	{
		call: compact,
		input: build4tree(4),
		expected: build4tree(4),
	},
	{
		call: compact,
		input: build4tree(5),
		expected: build4tree(5),
	},
	{
		call: compact,
		input: build4tree(6),
		expected: build4tree(6),
	},

];


describe('object.compact', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
