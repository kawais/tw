var should = require('should');
var data = require('./data.js');
var pos = require('./pos.js');
var POS = new pos();

console.log('买3免1');
POS.printList(data.getOrder(0), data.getPolicy('BUY_THREE_GET_ONE_FREE'));

console.log("\r\n====================\r\n");
console.log('满百减十');
POS.printList(data.getOrder(1), data.getPolicy('SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN'));
