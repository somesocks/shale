const shale = require('../base');
const { compact, equals } = shale;

shale.undefined = {};

shale.undefined.hashcode = (val) => 0xc37ba5d4;

shale.undefined.compact = (val) => undefined;

shale.undefined.equals = (val1, val2) => val1 === val2;
