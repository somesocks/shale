const shale = require('../base');
const { compact, hashcode, equals } = shale;

shale.number = {};

shale.number.hashcode = (val) => Number(val).valueOf();

shale.number.compact = (val) => Number(val).valueOf();

shale.number.equals = (val1, val2) => val1 === val2;
