/* node-env mocha */
'use strict';


const shale = require('../');

const { compact, equals } = shale;

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


describe('object tests', () => {

	describe('compact', () => {
		const COMPACT_TESTS = [
			{ input: undefined, expected: undefined },
		];

		COMPACT_TESTS.forEach((test) => {
			it(
				`compact(${test.input})-->(${test.expected})`,
				(done) => done(
					compact(test.input) === test.expected ? null : new Error(`Failed! Expected ${test.expected}, got ${type(test.input)}`)
				)
			);
		});

		const PERFORMANCE_TESTS = [
			{ count: Math.pow(4,1), input: build4tree(1) },
			{ count: Math.pow(4,2), input: build4tree(2) },
			{ count: Math.pow(4,3), input: build4tree(3) },
			{ count: Math.pow(4,4), input: build4tree(4) },
			{ count: Math.pow(4,5), input: build4tree(5) },
			{ count: Math.pow(4,6), input: build4tree(6) },
		];

		PERFORMANCE_TESTS.forEach((test) => {
			it(
				`compact tree count(${test.count})`,
				(done) => {
					const RUN_TIME = 128;

					const { input } = test;

					const start = Date.now();

					let count = 0;

					while (Date.now() - start < RUN_TIME) {
						const proxy = compact(input);
						count++;
					}

					console.log(`${count} iterations in ${RUN_TIME}ms: ${RUN_TIME/count} ms / iteration`);
					done();
				}
			);
		});

		PERFORMANCE_TESTS.forEach((test) => {
			it(
				`pre-compacted tree count(${test.count})`,
				(done) => {
					const RUN_TIME = 128;

					const input = compact(test.input);

					const start = Date.now();

					let count = 0;

					while (Date.now() - start < RUN_TIME) {
						const proxy = compact(input);
						count++;
					}

					console.log(`${count} iterations in ${RUN_TIME}ms: ${RUN_TIME/count} ms / iteration`);
					done();
				}
			);
		});
	});

	describe('equals', () => {
		const EQUALS_TEST = [
			{
				a: { a: 1, b: 2, c: 3 },
				b: { a: 1, b: 2, c: 3 },
				expected: true,
			},
			{
				a: { a: 1, b: 2, c: 3 },
				b: { a: 1, b: 2, c: 4 },
				expected: false,
			},
			{
				a: { a: 1, b: 2, c: 3 },
				b: { a: 1, b: 2, c: 3, d: undefined },
				expected: true,
			},
		];

		EQUALS_TEST.forEach((test) => {
			it(
				`equals(${test.a}, ${test.b}) -> ${test.expected}`,
				(done) => {
					const { a, b, expected } = test;

					const err = equals(a, b) === expected ? null : new Error('equals failed');

					done(err);
				}
			);
		});

		const PERFORMANCE_TESTS = [
			{ count: Math.pow(4,1), a: build4tree(1), b: build4tree(1),  },
			{ count: Math.pow(4,2), a: build4tree(2), b: build4tree(2),  },
			{ count: Math.pow(4,3), a: build4tree(3), b: build4tree(3),  },
			{ count: Math.pow(4,4), a: build4tree(4), b: build4tree(4),  },
			{ count: Math.pow(4,5), a: build4tree(5), b: build4tree(5),  },
			{ count: Math.pow(4,6), a: build4tree(6), b: build4tree(6),  },
			{ count: Math.pow(4,1), a: build4tree(1), b: build4tree(2),  },
			{ count: Math.pow(4,2), a: build4tree(2), b: build4tree(3),  },
			{ count: Math.pow(4,3), a: build4tree(3), b: build4tree(4),  },
			{ count: Math.pow(4,4), a: build4tree(4), b: build4tree(5),  },
			{ count: Math.pow(4,5), a: build4tree(5), b: build4tree(6),  },
			{ count: Math.pow(4,6), a: build4tree(6), b: build4tree(7),  },
		];

		PERFORMANCE_TESTS.forEach((test) => {
			it(
				`equals count(${test.count})`,
				(done) => {
					const RUN_TIME = 128;

					const { a, b } = test;

					const start = Date.now();

					let count = 0;

					while (Date.now() - start < RUN_TIME) {
						equals(a, b);
						count++;
					}

					console.log(`${count} iterations in ${RUN_TIME}ms: ${RUN_TIME/count} ms / iteration`);
					done();
				}
			);
		});

		PERFORMANCE_TESTS.forEach((test) => {
			it(
				`pre-compacted equals count(${test.count})`,
				(done) => {
					const RUN_TIME = 128;

					const a = compact(test.a);
					const b = compact(test.b);

					const start = Date.now();

					let count = 0;

					while (Date.now() - start < RUN_TIME) {
						equals(a, b);
						count++;
					}

					console.log(`${count} iterations in ${RUN_TIME}ms: ${RUN_TIME/count} ms / iteration`);
					done();
				}
			);
		});

	});


});
