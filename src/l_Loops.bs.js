// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Random = require("bs-platform/lib/js/random.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

for(var x = 1; x <= 3; ++x){
  Pervasives.print_int(x);
  Pervasives.print_string(" ");
}

Random.self_init(/* () */0);

var $$break = [false];

while(!$$break[0]) {
  if (Random.$$int(10) === 3) {
    $$break[0] = true;
  } else {
    console.log("hello");
  }
};

var xStart = 1;

var xEnd = 3;

exports.xStart = xStart;
exports.xEnd = xEnd;
exports.$$break = $$break;
/*  Not a pure module */