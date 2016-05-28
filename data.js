var order = [['ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000003-6', 'ITEM000005', 'ITEM000005', 'ITEM000005', 'ITEM000006-2'],['ITEM000001', 'ITEM000001', 'ITEM000003-2', 'ITEM000005', 'ITEM000005', 'ITEM000005', 'ITEM000006-5']];
var items = [{
    barcode: 'ITEM000001',
    name: '可口可乐',
    unit: '瓶',
    category: '食品',
    subCategory: '碳酸饮料',
    price: 3.00
}, {
    barcode: 'ITEM000002',
    name: '雪碧',
    unit: '瓶',
    category: '食品',
    subCategory: '碳酸饮料',
    price: 3.00
}, {
    barcode: 'ITEM000003',
    name: '羽毛球',
    unit: '个',
    category: '体育用品',
    subCategory: '球类',
    price: 1.00
}, {
    barcode: 'ITEM000004',
    name: '苹果',
    unit: '斤',
    category: '食品',
    subCategory: '水果',
    price: 5.50
}, {
    barcode: 'ITEM000005',
    name: '香梨',
    unit: '斤',
    category: '食品',
    subCategory: '水果',
    price: 7.00
}, {
    barcode: 'ITEM000006',
    name: '篮球',
    unit: '个',
    category: '体育用品',
    subCategory: '球类',
    price: 98.00
}];


function getOrder(idx) {
  var idx=idx||0;
    return order[idx];
}

function getItems() {
    return items;
}

function getPolicy(policy){
  var policy=policy || 'BUY_THREE_GET_ONE_FREE';
  var policies={'SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN':[{ type: 'SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN', barcodes: [ 'ITEM000006', 'ITEM000001' ] }],'BUY_THREE_GET_ONE_FREE':[{ type: 'BUY_THREE_GET_ONE_FREE', barcodes: [ 'ITEM000003', 'ITEM000001' ] }]};
  return policies[policy];
}

module.exports.getOrder = getOrder;
module.exports.getItems = getItems;
module.exports.getPolicy = getPolicy;
