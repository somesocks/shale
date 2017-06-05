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
		label: 'uncompacted equals 0',
		call: equals,
		input: [ undefined, undefined ],
		expected: true,
	},
	{
		label: 'uncompacted equals 2',
		call: equals,
		input: [ build4tree(2), build4tree(2) ],
		expected: true,
	},
	{
		label: 'uncompacted equals 4',
		call: equals,
		input: [ build4tree(4), build4tree(4) ],
		expected: true,
	},
	{
		label: 'uncompacted equals 6',
		call: equals,
		input: [ build4tree(6), build4tree(6) ],
		expected: true,
	},

	{
		label: 'compacted equals 0',
		call: equals,
		input: [ undefined, undefined ],
		expected: true,
	},
	{
		label: 'compacted equals 2',
		call: equals,
		input: [ compact(build4tree(2)), compact(build4tree(2)) ],
		expected: true,
	},
	{
		label: 'compacted equals 4',
		call: equals,
		input: [ compact(build4tree(4)), compact(build4tree(4)) ],
		expected: true,
	},
	{
		label: 'compacted equals 6',
		call: equals,
		input: [ compact(build4tree(6)), compact(build4tree(6)) ],
		expected: true,
	},


];


describe('object.equals', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
