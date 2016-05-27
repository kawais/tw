//单品满100减10块商品


function POLICY() {
}


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
POLICY.prototype.checkItems = function(itemsCount,barcodes) {
  var result=[{},{}];
  var found;
  for(var item in itemsCount)
  {
    found=0;
    for(var i in barcodes)
    {
      if(item===barcodes[i])
      {
        found=1;
        break;
      }
    }
    result[found][item]=itemsCount[item];
  }
  return result;
}


module.exports = POLICY;
