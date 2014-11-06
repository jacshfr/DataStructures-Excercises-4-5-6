'use strict';

var Dequeue = require('Dequeue');

var dequeue = new Dequeue();
dequeue.enqueueFront(5);
dequeue.enqueueBack(6);
dequeue.enqueueFront(7);
console.log(dequeue);

// console.log(dequeue);

var palindrCheck = function(word) {
  var arr = word.split('');
  console.log(arr);
  var queue2 = new Dequeue();
  for (var i = 0; i < arr.length; i++) {
    queue2.enqueueFront(arr[i]);
  };
  while (queue2.dataStore.length > 1) {//takes 2 off which each turn, will end on odd length
    if (queue2.dequeueFront() !== queue2.dequeueBack() ) return console.log(false);
  }
  return console.log(true);
};

palindrCheck('hihih');

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var ed = new Dequeue();
var p = new Patient("Smith",5);
ed.enqueueFront(p);
p = new Patient("Jones", 4);
ed.enqueueFront(p);
p = new Patient("Fehrenbach", 6);
ed.enqueueFront(p);
p = new Patient("Brown", 1);
ed.enqueueFront(p);
p = new Patient("Ingram", 1);
ed.enqueueFront(p);

console.log(ed.toString());

//patient enters ED;
var enters = function(name, priority, id) {
  var id = new Patient(name, priority);
  ed.enqueueFront(id);
};

var seen = function() {
  ed.dequeue();
}

var list = function() {
  console.log(ed.toString());
}

// first round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);

console.log("Patients waiting to be seen: ");
console.log(ed.toString());
// second round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
// third round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
// fourth
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
