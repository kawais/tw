var order = ['ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000003-2', 'ITEM000005', 'ITEM000005', 'ITEM000005'];
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
}];


function getOrder() {
    return order;
}

function getItems() {
    return items;
}

function getPolicy(){
  return [{ type: 'BUY_THREE_GET_ONE_FREE', barcodes: [ 'ITEM000000', 'ITEM000001' ] }];
}

module.exports.getOrder = getOrder;
module.exports.getItems = getItems;
module.exports.getPolicy = getPolicy;
