//单品满100减10块商品
var ITEM = require('../item.js');
var amount = require('../amount.js');

function POLICY() {}


/**
 * @description 优惠名称
 * @return 名称
 * @type String
 */
POLICY.prototype.getPolicyName = function() {
    var name = '单品满100减10块商品';
    return name;
}



/**
 * @description 检查是否有符合条件商品，将商品按是否优惠分开
 * @return Array[0]无优惠商品,Array[1]优惠商品
 * @type Array
 */
POLICY.prototype.checkItems = function(itemsCount, barcodes) {
    var result = [{}, {}];
    var found;
    for (var item in itemsCount) {
        found = 0;
        for (var i in barcodes) {
            if (item === barcodes[i] && amount.getItemAmount(item, itemsCount[item]) >= 100) {
                found = 1;
                break;
            }
        }
        result[found][item] = itemsCount[item];
    }
    return result;
}



/**
 * @description 计算商品价格
 * @params Array[0]无优惠商品,Array[1]优惠商品
 * @return Array[0]无优惠商品,Array[1]优惠商品
 * @type Array
 */
POLICY.prototype.calcAmount = function(items) {
    var result = [{}, {}],
        item, saveTimes = 0;
    for (var i in items[0]) {
        item = ITEM.getItem(i);
        result[0][i] = {
            'item': item,
            'num': items[0][i],
            'amount': amount.getItemAmount(i, items[0][i])
        };
    }
    for (var i in items[1]) {
        item = ITEM.getItem(i);
        saveTimes = Math.floor(amount.getItemAmount(i, items[1][i]) / 100);
        result[1][i] = {
            'item': item,
            'num': items[1][i],
            'amount': amount.getItemAmount(i, items[1][i]) - saveTimes * 10,
            'save': saveTimes * 10
        };
    }
    return result;
}



/**
 * @description 生成清单
 * @params Array[0]无优惠商品,Array[1]优惠商品
 * @return 清单
 * @type String
 */
POLICY.prototype.report = function(items) {
    var allStr = [' *<没钱赚商店>购物清单* '],
        total = 0,
        save = 0,
        item;
    for (var i in items) {
        for (var j in items[i]) {
            item = items[i][j];
            total += item['amount'];
            allStr.push('名称：' + item['item']['name'] + '，数量：' + item['num'] + item['item']['unit'] + '，单价：' + item['item']['price'] + '(元)，小计：' + item['amount'] + '(元) ');
        }
    }

    allStr.push('-------------------------');



    if (Object.getOwnPropertyNames(items[1]).length > 0) {
        allStr.push(this.getPolicyName());

        for (var i in items[1]) {
            item = items[1][i];
            save += item['save'];
            allStr.push('名称：' + item['item']['name'] + '，原价：' + item['amount'] + '(元)' + '，优惠：' + item['save'] + '(元)');
        }

        allStr.push('-------------------------');
    }
    allStr.push('总计：' + total + '(元) ' + (save ? '节省：' + save + '(元)' : ''));
    return allStr.join("\r\n");
}






module.exports = POLICY;
