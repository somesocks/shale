const { compact, suid, equals, register } = require('../base');

register(
	{
		type: 'null',
		suid: (val) => 0xb352a39b,
		compact: (val) => null,
		equals: (val1, val2) => val1 === val2,
	}
);
