const { compact, suid, equals, register } = require('../base');

register(
	{
		type: 'boolean',
		suid: (val) => Boolean(val).valueOf() ? 0x99c29f16 : 0xe9b8364d,
		compact: (val) => Boolean(val).valueOf(),
		equals: (val1, val2) => val1 === val2,
	}
);
