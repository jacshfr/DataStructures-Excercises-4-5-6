'use strict';

var Stack = require('Stack');

var thesis = function(expression) {
  var parens = [];
  var resultExpr = '';
  var balanced = true;

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      parens.push(i);
    } else if (expression[i] === ')') {
      if (!(parens.pop())) {
        resultExpr += 'Found unmatched ")" at index ' + i;
        balanced = false;
      }
    }
  }
  while (parens.length > 0) {
    resultExpr += 'Found unmatched "(" at index ' + parens.pop();
    balanced = true;
  }
  if (balanced) {
    resultExpr = 'no unmatched parens';
  }
  return resultExpr;
};

var opdOpt = function(expression) {
  var num = [];
  var op = [];
  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '+') {
      op.push(expression[i]);
    } else {
      num.push(expression[i]);
    }
  }
  while ((num.length === 2) && (op.length)) {
    return (parseInt(num.pop()) + parseInt(num.pop()));
  }
};

var pez = function(array) {
  var startDispenser = new Stack(array);
  var myDispenser = new Stack();
  while (startDispenser.top > 0) {
    if (startDispenser.peek() != 'y') {
      myDispenser.push(startDispenser.pop());
    } else {
      startDispenser.pop();
    }
  }
  return myDispenser.dataStore;
};
