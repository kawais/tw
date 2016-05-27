var data=require('./data.js');
var items=data.getItems();

function getItem(barcode)
{
  var item=false;
  for(var i in items)
  {
    if(items[i].barcode===barcode)
    {
      item=items[i];
      break;
    }
  }
  if(!item)
  {
    throw new Error('Barcode not found.');
  }
  return item;
}


module.exports.getItem = getItem;
