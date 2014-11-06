'use strict';

var chai = require('chai');
var expect = chai.expect;
var app = require('../lib/app');

describe('Balance the Parentheses', function() {
  it('finds the postition where parenthesis is missing', function() {
    expect(app.parens('(2 * 5').to.eql(6));
    expect(app.parens('2 * 5)').to.eql(0));
  })
})

describe('Operands and Operators', function() {
  it('evaluates the expression', function() {
    expect(app.opdOpt('1+2').to.eql(3));
  })
})

describe('Pez', function() {
  it('gets only not yellow pieces', function() {
    expect(app.pez(['y','r','w','y','w','r']).to.eql([r,w,w,r]));
  })
})



// Pez dispenser
