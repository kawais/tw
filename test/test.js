var should = require('should');
var rewire = require('rewire');
var data = require('../data.js');
var amount=require('../amount.js');

var pos = require('../pos.js');
var POS=new pos();

var order = data.getOrder();


describe('test', function() {
  it('POS countOrderItems', function() {
    var itemsCount = POS.countOrderItems(order);
    should(itemsCount).have.property('ITEM000001').be.eql(5);
    should(itemsCount).have.property('ITEM000003').be.eql(2);
    should(itemsCount).have.property('ITEM000005').be.eql(3);
  });

  it('PolicyFactory getPolicy', function() {
    var policyfactory=require('../policyfactory.js');
    var PF=new policyfactory();
    var policy=require('../policy/BUY_THREE_GET_ONE_FREE.js');
    var POLICY=new policy();
    should(PF.getPolicy('BUY_THREE_GET_ONE_FREE')).be.instanceof(policy);
    should(function(){PF.getPolicy('NOT_FOUND');}).throw('Policy not found.');
  });



  it('ITEM getItemAmount', function() {
    should(amount.getItemAmount('ITEM000001',5)).be.eql(15);
    should(amount.getItemAmount('ITEM000001',0)).be.eql(0);
    should(function(){amount.getItemAmount('NOT_FOUND');}).throw('Barcode not found.');
  });


/*   it('按类批发价出售 name', function() {
    var policy=require('../policy/BUY_THREE_GET_ONE_FREE.js');
    var POLICY=new policy();
    should(POLICY.getPolicyName()).be.eql('买三免一商品');
  });

  it('按类批发价出售 checkItems', function() {
    var policy=require('../policy/BUY_THREE_GET_ONE_FREE.js');
    var POLICY=new policy();
    var policyData=data.getPolicy();
    var result=POLICY.checkItems(POS.countOrderItems(order),policyData[0].barcodes);
    should(result.length).be.eql(2);
    should(result[0]).have.property('ITEM000003').be.eql(2);
    should(result[0]).have.property('ITEM000005').be.eql(3);
    should(result[1]).have.property('ITEM000001').be.eql(5);
  }); */

})
