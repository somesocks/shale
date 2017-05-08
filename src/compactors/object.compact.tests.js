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


	// describe('equals', () => {
	// 	const EQUALS_TEST = [
	// 		{
	// 			a: { a: 1, b: 2, c: 3 },
	// 			b: { a: 1, b: 2, c: 3 },
	// 			expected: true,
	// 		},
	// 		{
	// 			a: { a: 1, b: 2, c: 3 },
	// 			b: { a: 1, b: 2, c: 4 },
	// 			expected: false,
	// 		},
	// 		{
	// 			a: { a: 1, b: 2, c: 3 },
	// 			b: { a: 1, b: 2, c: 3, d: undefined },
	// 			expected: true,
	// 		},
	// 	];
	//
	// 	EQUALS_TEST.forEach((test) => {
	// 		it(
	// 			`equals(${test.a}, ${test.b}) -> ${test.expected}`,
	// 			(done) => {
	// 				const { a, b, expected } = test;
	//
	// 				const err = equals(a, b) === expected ? null : new Error('equals failed');
	//
	// 				done(err);
	// 			}
	// 		);
	// 	});
	//
	// 	const PERFORMANCE_TESTS = [
	// 		{ count: Math.pow(4,1), a: build4tree(1), b: build4tree(1),  },
	// 		{ count: Math.pow(4,2), a: build4tree(2), b: build4tree(2),  },
	// 		{ count: Math.pow(4,3), a: build4tree(3), b: build4tree(3),  },
	// 		{ count: Math.pow(4,4), a: build4tree(4), b: build4tree(4),  },
	// 		{ count: Math.pow(4,5), a: build4tree(5), b: build4tree(5),  },
	// 		{ count: Math.pow(4,6), a: build4tree(6), b: build4tree(6),  },
	// 		{ count: Math.pow(4,1), a: build4tree(1), b: build4tree(2),  },
	// 		{ count: Math.pow(4,2), a: build4tree(2), b: build4tree(3),  },
	// 		{ count: Math.pow(4,3), a: build4tree(3), b: build4tree(4),  },
	// 		{ count: Math.pow(4,4), a: build4tree(4), b: build4tree(5),  },
	// 		{ count: Math.pow(4,5), a: build4tree(5), b: build4tree(6),  },
	// 		{ count: Math.pow(4,6), a: build4tree(6), b: build4tree(7),  },
	// 	];
	//
	// 	PERFORMANCE_TESTS.forEach((test) => {
	// 		it(
	// 			`equals count(${test.count})`,
	// 			(done) => {
	// 				const RUN_TIME = 128;
	//
	// 				const { a, b } = test;
	//
	// 				const start = Date.now();
	//
	// 				let count = 0;
	//
	// 				while (Date.now() - start < RUN_TIME) {
	// 					equals(a, b);
	// 					count++;
	// 				}
	//
	// 				console.log(`${count} iterations in ${RUN_TIME}ms: ${RUN_TIME/count} ms / iteration`);
	// 				done();
	// 			}
	// 		);
	// 	});
	//
	// 	PERFORMANCE_TESTS.forEach((test) => {
	// 		it(
	// 			`pre-compacted equals count(${test.count})`,
	// 			(done) => {
	// 				const RUN_TIME = 128;
	//
	// 				const a = compact(test.a);
	// 				const b = compact(test.b);
	//
	// 				const start = Date.now();
	//
	// 				let count = 0;
	//
	// 				while (Date.now() - start < RUN_TIME) {
	// 					equals(a, b);
	// 					count++;
	// 				}
	//
	// 				console.log(`${count} iterations in ${RUN_TIME}ms: ${RUN_TIME/count} ms / iteration`);
	// 				done();
	// 			}
	// 		);
	// 	});
	//
	// });

});
