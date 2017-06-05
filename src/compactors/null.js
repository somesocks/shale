const shale = require('../base');
const { compact, equals } = shale;

shale.null = {};

shale.null.hashcode = (val) => 0xb352a39b;

shale.null.compact = (val) => null;

shale.null.equals = (val1, val2) => val1 === val2;
