// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

console.log("hello");

var message = "bye";

console.log(message);

function add(x, y) {
  return x + y | 0;
}

function drawCircle(r) {
  return Caml_int32.imul(Caml_int32.imul(6, r), r);
}

var myInt = 9;

var x = 10;

exports.message = message;
exports.myInt = myInt;
exports.add = add;
exports.drawCircle = drawCircle;
exports.x = x;
/*  Not a pure module */
