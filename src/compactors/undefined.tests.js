/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;


describe('undefined tests', () => {

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

});
