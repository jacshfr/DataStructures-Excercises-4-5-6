'use strict';


var Stack = require('Stack');


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
  return(myDispenser.dataStore);
};

var opdOpt = function(string) {
  var array = string.split('');
  var finalArray = [];
  var opdStack = new Stack();
  var optStack = new Stack();
  var evaluation = eval(string);
  for (var i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      optStack.push((array[i]));
    } else {
      opdStack.push(parseInt(array[i]));
    }
  };
  while (opdStack.length()-1 > 0) {
    finalArray.push(opdStack.pop());
  }
  while (optStack.length()-1 > 0) {
    finalArray.push(optStack.pop());
  }

  console.log(evaluation);
  console.log(finalArray.join(''));
};

console.log(pez(['y','r','r','y','w','r']));
// opdOpt('1+2');
// opdOpt('1*2+4');
