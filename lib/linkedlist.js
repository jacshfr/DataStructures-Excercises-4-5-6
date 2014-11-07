'use strict';

var SLList = require('Singly-Linked-List');

// var cities = new SLList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// cities.display();
// cities.remove("Carlisle");
// cities.display();

//makes new list of grades
var grades = new SLList;
grades.insert(55, 'head');
grades.insert(65, 55);
grades.insert(25, 65);
grades.insert(95, 25);
grades.insert('', 95);
// grades.display();
grades.remove(25);
// grades.display();
grades.advance(2, 55);
// grades.display();











