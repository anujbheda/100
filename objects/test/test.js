var should = require('chai').should();
var ex01   = require('../ex01_basics_solution.js');

describe('Object Exercise', function() {
	it('Add property', function() {
	    ex01.addProperty().should.have.property('city');
	});
});

describe('Object Exercise', function() {
	it('Change property', function() {
	    ex01.changeProperty().school.should.equal('bu');
	});
});

describe('Object Exercise', function() {
	it('Add object property', function() {
	    ex01.addObject().should.have.property('sports');
	});
});