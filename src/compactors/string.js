const shale = require('../base');
const { compact, equals, hasher } = shale;

shale.string = {};

shale.string.hashcode = (val) => hasher.hash(val);

shale.string.compact = (val) => val;

shale.string.equals = (val1, val2) => val1 === val2;
