var should = require('should');
var rewire = require('rewire');
var data = require('../data.js');


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



/*   it('按类批发价出售 name', function() {
    var policy=require('../policy/BUY_THREE_GET_ONE_FREE.js');
    var POLICY=new policy();
    should(POLICY.getPolicyName()).be.eql('批发价出售商品');
  });

  it('按类批发价出售 checkItems', function() {
    var policy=require('../policy/BUY_THREE_GET_ONE_FREE.js');
    var POLICY=new policy(data.getPolicy());
    var result=POLICY.checkItems(order);
    should(result.length).be.eql(2);
  }); */

})
