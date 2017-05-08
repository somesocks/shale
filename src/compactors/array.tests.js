/* node-env mocha */
'use strict';

const shale = require('../');
const { type, compact, equals, array } = shale;

const { AssertTest, PerformanceTest } = require('../testing');

const build4tree = (depth) => {
	return depth === 0 ?
		[] :
		[
			build4tree(depth - 1),
			build4tree(depth - 1),
			build4tree(depth - 1),
			build4tree(depth - 1),
		]
};

const TESTS = [
	{
		label: 'type check',
		call: (val) => Array.isArray(compact(val)),
		input: [ [1, 2, 3] ],
		expected: true,
	},
	{
		label: `compact array tree 4^1`,
		call: compact,
		input: [ build4tree(1) ],
		expected: build4tree(1),
	},
	{
		label: `compact array tree 4^2`,
		call: compact,
		input: [ build4tree(2) ],
		expected: build4tree(2),
	},
	{
		label: `compact array tree 4^3`,
		call: compact,
		input: [ build4tree(3) ],
		expected: build4tree(3),
	},
	{
		label: `compact array tree 4^4`,
		call: compact,
		input: [ build4tree(4) ],
		expected: build4tree(4),
	},
	{
		label: `compact array tree 4^5`,
		call: compact,
		input: [ build4tree(5) ],
		expected: build4tree(5),
	},
	{
		label: `compact array tree 4^6`,
		call: compact,
		input: [ build4tree(6) ],
		expected: build4tree(6),
	},
	{
		label: `equals test 1`,
		call: equals,
		input: [
			[ 1, 2, 3 ],
			[ 1, 2, 3 ],
		],
		expected: true,
	},
	{
		label: `equals test 2`,
		call: equals,
		input: [
			[ 1, 2, 3 ],
			[ 1, 2, 4 ],
		],
		expected: false,
	},
	{
		label: `equals test 3`,
		call: equals,
		input: [
			[ 1, 2, 3 ],
			[ 1, 2, 3, undefined ],
		],
		expected: false,
	},
	{
		label: `push test 1`,
		call: array.push,
		input: [
			[ 1, 2, 3 ],
			4
		],
		expected: [ 1, 2, 3, 4 ],
	},
	{
		label: `push test 2`,
		call: array.push,
		input: [
			[ 1, 2, 3 ],
			4,
			5,
			6
		],
		expected: [ 1, 2, 3, 4, 5, 6 ],
	},
	{
		label: `push test 3`,
		call: array.push,
		input: [
			new Array(1000),
			... new Array(1000),
		],
		expected: [ ...new Array(1000), ...new Array(1000) ],
	},
	{
		label: `pop test 1`,
		call: array.pop,
		input: [ [ 1, 2, 3 ] ],
		expected: [ 1, 2 ],
	},
	{
		label: `pop test 2`,
		call: array.pop,
		input: [ [ 1 ] ],
		expected: [ ],
	},
	{
		label: `pop test 3`,
		call: array.pop,
		input: [ [ ] ],
		expected: [ ],
	},
	{
		label: `pop test 4`,
		call: array.pop,
		input: [ new Array(1000) ],
		expected: [ ...new Array(999) ],
	},

	{
		label: `map test 1`,
		call: (arr) => array.map(arr, (v) => 2*v),
		input: [ [ 1, 2, 3, 4 ] ],
		expected: [ 2, 4, 6, 8 ],
	},
];

describe('array tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
