/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;


describe('number tests', () => {

	const COMPACT_TESTS = [
		{ input: 0, expected: 0 },
		{ input: Number(0), expected: 0 },
	];

	COMPACT_TESTS.forEach((test) => {
		it(
			`compact(${test.input})-->(${test.expected})`,
			(done) => done(
				compact(test.input) === test.expected ? null : new Error(`Failed! Expected ${test.expected}, got ${type(test.input)}`)
			)
		);
	});

});
