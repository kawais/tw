var should = require('should');
var data = require('./data.js');
var pos = require('./pos.js');
var POS = new pos();

console.log('买3免1');
var order = data.getOrder(0);
POS.printList(order, 'BUY_THREE_GET_ONE_FREE');

console.log("\r\n====================\r\n");
console.log('满百减十');
var order = data.getOrder(1);
POS.printList(order, 'SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN');
