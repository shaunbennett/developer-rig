const validate = require('jsonschema').validate;
const data = require('../views-config.json');
const schema = require('../views-config.schema.json');
console.log(validate(data, schema));
