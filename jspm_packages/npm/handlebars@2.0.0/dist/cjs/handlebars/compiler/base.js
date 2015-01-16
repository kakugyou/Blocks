/* */ 
"use strict";
var parser = require("./parser")["default"];
var AST = require("./ast")["default"];
var Helpers = require("./helpers");
var extend = require("../utils").extend;
exports.parser = parser;
var yy = {};
extend(yy, Helpers, AST);
function parse(input) {
  if (input.constructor === AST.ProgramNode) {
    return input;
  }
  parser.yy = yy;
  return parser.parse(input);
}
exports.parse = parse;
