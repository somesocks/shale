const { compact, suid, equals, register, hash } = require('../base');

register(
	{
		type: 'string',
		suid: (val) => hash.hash(val),
		compact: (val) => val,
		equals: (val1, val2) => val1 === val2,
	}
);
