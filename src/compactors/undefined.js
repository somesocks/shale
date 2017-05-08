
const { compact, suid, equals, register } = require('../base');

register(
	{
		type: 'undefined',
		suid: (val) => 0xc37ba5d4,
		compact: (val) => undefined,
		equals: (val1, val2) => val1 === val2,
	}
);
