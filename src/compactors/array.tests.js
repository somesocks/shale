/* node-env mocha */
'use strict';

const shale = require('../');

const { type, compact, equals } = shale;

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


describe('array tests', () => {

	it('type check', (done) => {
		const arr = compact([1, 2, 3]);

		// console.log('arr', arr);
		// console.log('Array.isArray(arr)', Array.isArray(arr));
		// console.log('arr instanceof Array', arr instanceof Array);
		// console.log('typeof arr', typeof arr);
		// console.log('type(arr)', type(arr));
		// console.log('arr.constructor', arr.constructor);
		// console.log('arr.prototype', arr.prototype);
		// console.log('arr.__proto__', arr.__proto__);

		done(!Array.isArray(arr) ? new Error('compact array is not array') : null);
	});

	it('freeze check', (done) => {
		try {
			const arr = compact([1, 2, 3]);

			arr[0] = 0;

			done(arr[0] === 0 ? new Error('arr set should have failed') : null);
		} catch (err) {
			done();
		}
	});

	describe('compact', () => {

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
				a: [ 1, 2, 3 ],
				b: [ 1, 2, 3 ],
				expected: true,
			},
			{
				a: [ 1, 2, 3 ],
				b: [ 1, 2, 4 ],
				expected: false,
			},
			{
				a: [ 1, 2, 3 ],
				b: [ 1, 2, 3, undefined ],
				expected: false,
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
