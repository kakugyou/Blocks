/* */ 
var handlebars = require("../dist/cjs/handlebars")["default"];
handlebars.Visitor = require("../dist/cjs/handlebars/compiler/visitor")["default"];
var printer = require("../dist/cjs/handlebars/compiler/printer");
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;
module.exports = handlebars;
if (typeof require !== 'undefined' && require.extensions) {
  var extension = function(module, filename) {
    var fs = require("fs");
    var templateString = fs.readFileSync(filename, "utf8");
    module.exports = handlebars.compile(templateString);
  };
  require.extensions[".handlebars"] = extension;
  require.extensions[".hbs"] = extension;
}
