const { compact, suid, equals, register } = require('../base');

register(
	{
		type: 'number',
		suid: (val) => Number(val).valueOf(),
		compact: (val) => Number(val).valueOf(),
		equals: (val1, val2) => val1 === val2,
	}
);
