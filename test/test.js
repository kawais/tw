var should = require('should');
var rewire = require('rewire');
var data = require('../data.js');
var amount = require('../amount.js');
var item = require('../item.js');

var pos = require('../pos.js');
var POS = new pos();

var order = data.getOrder();


describe('test', function() {
    it('POS countOrderItems', function() {
        var itemsCount = POS.countOrderItems(order);
        should(itemsCount).have.property('ITEM000001').be.eql(5);
        should(itemsCount).have.property('ITEM000003').be.eql(6);
        should(itemsCount).have.property('ITEM000006').be.eql(2);
        should(itemsCount).have.property('ITEM000005').be.eql(3);
    });

    it('PolicyFactory getPolicy', function() {
        var policyfactory = require('../policyfactory.js');
        var PF = new policyfactory();
        var policy = require('../policy/BUY_THREE_GET_ONE_FREE.js');
        var POLICY = new policy();
        should(PF.getPolicy('BUY_THREE_GET_ONE_FREE')).be.instanceof(policy);
        should(function() {
            PF.getPolicy('NOT_FOUND');
        }).throw('Policy not found.');
    });






    it('ITEM getItem', function() {
        should(item.getItem('ITEM000001')).have.property('barcode').be.eql('ITEM000001');
        should(function() {
            item.getItem('NOT_FOUND');
        }).throw('Barcode not found.');
    });


    it('AMOUNT getItemAmount', function() {
        should(amount.getItemAmount('ITEM000001', 5)).be.eql(15);
        should(amount.getItemAmount('ITEM000001', 0)).be.eql(0);
        should(function() {
            amount.getItemAmount('NOT_FOUND');
        }).throw('Barcode not found.');
    });


    it('买三免一商品 name', function() {
        var policy = require('../policy/BUY_THREE_GET_ONE_FREE.js');
        var POLICY = new policy();
        should(POLICY.getPolicyName()).be.eql('买三免一商品');
    });

    it('买三免一商品 checkItems', function() {
        var policy = require('../policy/BUY_THREE_GET_ONE_FREE.js');
        var POLICY = new policy();
        var policyData = data.getPolicy();
        var result = POLICY.checkItems(POS.countOrderItems(order), policyData[0].barcodes);
        should(result.length).be.eql(2);
        should(result[0]).have.property('ITEM000005').be.eql(3);
        should(result[0]).have.property('ITEM000006').be.eql(2);
        should(result[1]).have.property('ITEM000001').be.eql(5);
        should(result[1]).have.property('ITEM000003').be.eql(6);
    });

    it('买三免一商品 calcAmount', function() {
        var policy = require('../policy/BUY_THREE_GET_ONE_FREE.js');
        var POLICY = new policy();
        var policyData = data.getPolicy();
        var items = POLICY.checkItems(POS.countOrderItems(order), policyData[0].barcodes);
        var result = POLICY.calcAmount(items);
        should(result.length).be.eql(2);
        should(result[0]).have.property('ITEM000005').have.property('amount').be.eql(21);
        should(result[0]).have.property('ITEM000006').have.property('amount').be.eql(196);
        should(result[1]).have.property('ITEM000001').have.property('amount').be.eql(12);
        should(result[1]).have.property('ITEM000003').have.property('amount').be.eql(4);
    });


    it('单品满100减10块商品 checkItems', function() {
        var policy = require('../policy/SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN.js');
        var POLICY = new policy();
        var policyData = [{
            type: 'SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN',
            barcodes: ['ITEM000006', 'ITEM000001']
        }];
        var result = POLICY.checkItems(POS.countOrderItems(order), policyData[0].barcodes);
        should(result.length).be.eql(2);
        should(result[0]).have.property('ITEM000003').be.eql(6);
        should(result[0]).have.property('ITEM000005').be.eql(3);
        should(result[0]).have.property('ITEM000001').be.eql(5);
        should(result[1]).have.property('ITEM000006').be.eql(2);
    });


})
