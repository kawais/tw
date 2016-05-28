var policyfactory=require('./policyfactory.js');
var PF=new policyfactory();

var data = require('./data.js');

function POS() {}



/**
* @description 统计每种商品的数量
* @return [barcode:num...]
* @type Array
*/
POS.prototype.countOrderItems = function(order) {
    var items = {};
    var barcode, num;
    for (var i in order) {
        barcode = order[i].split('-');
        num = typeof(barcode[1]) !== 'undefined' ? parseInt(barcode[1]) : 1;
        if (typeof(items[barcode[0]]) === 'undefined') {
            items[barcode[0]] = num;
        } else {
            items[barcode[0]] += num;
        }
    }
    return items;
}


POS.prototype.printList=function(order,policy)
{
    var POLICY=PF.getPolicy(policy);
    var policyData=data.getPolicy(policy);
    var items=POLICY.checkItems(this.countOrderItems(order),policyData[0].barcodes);
    var result=POLICY.calcAmount(items);
    console.log(POLICY.report(result));
}



module.exports = POS;

