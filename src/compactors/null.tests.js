/* node-env mocha */

const shale = require('../');

const { compact, equals } = shale;


describe('null tests', () => {

	const COMPACT_TESTS = [
		{ input: null, expected: null },
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
