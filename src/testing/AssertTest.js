/* node-env mocha */
'use strict';

const shale = require('../');
const { equals } = shale;

const isArray = Array.isArray;

const AssertTest = (test) => {
	it(`assert test ${test.label ||''}`, (done) => {
		const { call, input, expected } = test;

		const output = isArray(input) ? call(...input) : call(input);

		const result = equals(output, expected) ?
			null
			: new Error(`assert failed! output ${JSON.stringify(output)} expected ${JSON.stringify(expected)}`);
		done(result);
	});
};

module.exports = AssertTest;
