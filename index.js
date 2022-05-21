const lodash = require('lodash');
const items =[1,2,[2,4,4]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);