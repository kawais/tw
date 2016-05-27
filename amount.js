var data=require('./data.js');
var items=data.getItems();
var ITEM=require('./item.js');

function getItemAmount(barcode,num)
{
  var item=ITEM.getItem(barcode);
  return item.price*num;
}


module.exports.getItemAmount = getItemAmount;
