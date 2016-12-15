var should = require('chai').should();
var ex01   = require('../ex01_basics_solution.js');
var ex02   = require('../ex02_order_solution.js');

describe('Array Exercise', function() {
	it('Has length of', function() {
	    ex01.length().should.equal(4);
	});
});

describe('Array Exercise', function() {
	it('Match text', function() {
	    ex01.concatenate().trim().should.equal(
	    	'It was the best of times, it was the worst of times'
	    );
	});
});

describe('Array Exercise', function() {
	it('Has Item', function() {
	    ex01.add().indexOf('Mango').should.be.above(0);
	});
});

describe('Array Exercise', function() {
	it('Order list of numbers', function() {
			// two copies of the same list
   			var list1 = [28,16,17,24,27,25,21,26,23,18,20,22,19,15];	    	
   			var list2 = [28,16,17,24,27,25,21,26,23,18,20,22,19,15];

   			// sort list 2
			list2.sort(function(a,b){return a-b;});

			// compare result of 'order' function to sorted list2
	        ex02.order(list1).should.eql(list2);
	});
});