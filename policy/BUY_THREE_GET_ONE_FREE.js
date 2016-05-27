//按类批发价出售

function POLICY(items) {
  this.items=items||[];
}


/**
 * @description 优惠名称
 * @return 名称
 * @type String
 */
POLICY.prototype.getPolicyName = function() {
    var name = '批发价出售商品';
    return name;
}



/**
 * @description 检查是否有符合条件商品，将商品按是否优惠分开
 * @return Array[0]无优惠商品,Array[1]优惠商品
 * @type Array
 */
POLICY.prototype.checkItems = function(items) {
  var result=[[],[]];

  return result;
}


module.exports = POLICY;
