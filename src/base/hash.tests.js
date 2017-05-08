/* node-env mocha */

const { hash } = require('./hash');

const TESTS = [
	{ label: 'empty string', input: ''},
	{ label: 'short string', input: new Array(8 + 1).join('0') },
	{ label: 'medium string', input: new Array(256 + 1).join('0') },
	{ label: 'long string', input: new Array(65535 + 1).join('0') },
];

describe('hash performance tests', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.label})`,
			(done) => {
				const { input, compare } = test;

				const start = Date.now();
				let count = 0;

				while(Date.now() - start < 100) {
					hash(input);
					count++;
				}

				console.log(`${count} iterations in ${1000}ms: ${1000/count} ms / iteration`);
				done();
			}
		);
	});
});
