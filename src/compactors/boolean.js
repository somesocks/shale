const shale = require('../base');
const { compact, hasher, equals } = shale;

const BOOL_CONST = 0x99c29f16;

let TRUE_HASHCODE = BOOL_CONST;
TRUE_HASHCODE = hasher.update(TRUE_HASHCODE, true);
TRUE_HASHCODE = hasher.finish(TRUE_HASHCODE);

let FALSE_HASHCODE = BOOL_CONST;
FALSE_HASHCODE = hasher.update(FALSE_HASHCODE, false);
FALSE_HASHCODE = hasher.finish(FALSE_HASHCODE);

shale.boolean = {};

shale.boolean.hashcode = (val) => Boolean(val).valueOf() ? TRUE_HASHCODE : FALSE_HASHCODE;

shale.boolean.compact = (val) => Boolean(val).valueOf();

shale.boolean.equals = (val1, val2) => val1 === val2;
