/* node-env mocha */
'use strict';

const shale = require('../');
const { equals } = shale;

const isArray = Array.isArray;

const RUN_TIME = 128;

const PerformanceTest = (test) => {
	it(`performance test ${test.label ||''}`, (done) => {
		const { call, input, expected } = test;

		let count = 0;
		const start = Date.now();
		while(Date.now() - start < RUN_TIME) {
			const output = isArray(input) ? call(...input) : call(input);
			count++;
		}

		done();
		console.log(`\t performance: ${count} iterations in ${RUN_TIME}ms, ${(RUN_TIME/count).toFixed(4)} ms/iteration`);
	});
};

module.exports = PerformanceTest;
