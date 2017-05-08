/* node-env mocha */
'use strict';


const shale = require('../');

const { compact, equals } = shale;
const { patch } = shale.object;

const { AssertTest, PerformanceTest } = require('../testing');

const TESTS = [
	{
		call: patch,
		input: [
			{ a: 1, b: 2, c: 3 },
			{ c: 4 },
		],
		expected: { a: 1, b: 2, c: 4 },
	},
	{
		call: patch,
		input: [
			{ a: 1, b: 2, c: 3 },
			{ c: { a: 1 } },
		],
		expected: { a: 1, b: 2, c: { a: 1 }},
	},
	{
		call: patch,
		input: [
			{ a: 1, b: 2, c: 3 },
			{ c: undefined },
		],
		expected: { a: 1, b: 2 },
	},
	{
		call: patch,
		input: [
			{
				a01: 1, a02: 1, a03: 1, a04: 1,
				a05: 1, a06: 1, a07: 1, a08: 1,
				a09: 1, a10: 1, a11: 1, a12: 1,
				a13: 1, a14: 1, a15: 1, a16: 1,
			},
			{
				a01: 1, a02: 1, a03: 1, a04: 1,
				a05: 1, a06: 1, a07: 1, a08: 1,
				a09: 1, a10: 1, a11: 1, a12: 1,
				a13: 1, a14: 1, a15: 1, a16: 1,
			},
		],
		expected: {
			a01: 1, a02: 1, a03: 1, a04: 1,
			a05: 1, a06: 1, a07: 1, a08: 1,
			a09: 1, a10: 1, a11: 1, a12: 1,
			a13: 1, a14: 1, a15: 1, a16: 1,
		},
	},
];

describe('object.patch tests', () => {

	describe('assertion tests', () => {
		TESTS.forEach(AssertTest);
	});

	describe('performance tests', () => {
		TESTS.forEach(PerformanceTest);
	});

});
