var should = require('should');
var data = require('./data.js');
var pos = require('./pos.js');
var POS = new pos();

console.log('买3免1 有优惠');
POS.printList(data.getOrder(0), data.getPolicy('BUY_THREE_GET_ONE_FREE'));
console.log("\r\n====================\r\n");
console.log('买3免1 无优惠');
POS.printList(data.getOrder(1), data.getPolicy('BUY_THREE_GET_ONE_FREE'));
console.log("\r\n====================\r\n");

console.log('满百减十 有优惠');
POS.printList(data.getOrder(2), data.getPolicy('SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN'));
console.log("\r\n====================\r\n");
console.log('满百减十 无优惠');
POS.printList(data.getOrder(3), data.getPolicy('SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN'));
