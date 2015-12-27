/* */ 
"use strict";
var _interopRequireWildcard = function(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
};
exports.AssignmentExpression = AssignmentExpression;
exports.UnaryExpression = UnaryExpression;
exports.CallExpression = CallExpression;
exports.VirtualPropertyExpression = VirtualPropertyExpression;
exports.PrivateDeclaration = PrivateDeclaration;
var util = _interopRequireWildcard(require('../../../util'));
var t = _interopRequireWildcard(require('../../../types/index'));
var experimental = exports.experimental = true;
var container = function container(parent, call, ret, file) {
  if (t.isExpressionStatement(parent) && !file.isConsequenceExpressionStatement(parent)) {
    return call;
  } else {
    var exprs = [];
    if (t.isSequenceExpression(call)) {
      exprs = call.expressions;
    } else {
      exprs.push(call);
    }
    exprs.push(ret);
    return t.sequenceExpression(exprs);
  }
};
function AssignmentExpression(node, parent, scope, file) {
  var left = node.left;
  if (!t.isVirtualPropertyExpression(left))
    return;
  var value = node.right;
  var temp;
  if (!t.isExpressionStatement(parent)) {
    temp = scope.generateTempBasedOnNode(node.right);
    if (temp)
      value = temp;
  }
  if (node.operator !== "=") {
    value = t.binaryExpression(node.operator[0], util.template("abstract-expression-get", {
      PROPERTY: node.property,
      OBJECT: node.object
    }), value);
  }
  var call = util.template("abstract-expression-set", {
    PROPERTY: left.property,
    OBJECT: left.object,
    VALUE: value
  });
  if (temp) {
    call = t.sequenceExpression([t.assignmentExpression("=", temp, node.right), call]);
  }
  return container(parent, call, value, file);
}
function UnaryExpression(node, parent, scope, file) {
  var arg = node.argument;
  if (!t.isVirtualPropertyExpression(arg))
    return;
  if (node.operator !== "delete")
    return;
  var call = util.template("abstract-expression-delete", {
    PROPERTY: arg.property,
    OBJECT: arg.object
  });
  return container(parent, call, t.literal(true), file);
}
function CallExpression(node, parent, scope) {
  var callee = node.callee;
  if (!t.isVirtualPropertyExpression(callee))
    return;
  var temp = scope.generateTempBasedOnNode(callee.object);
  var call = util.template("abstract-expression-call", {
    PROPERTY: callee.property,
    OBJECT: temp || callee.object
  });
  call.arguments = call.arguments.concat(node.arguments);
  if (temp) {
    return t.sequenceExpression([t.assignmentExpression("=", temp, callee.object), call]);
  } else {
    return call;
  }
}
function VirtualPropertyExpression(node) {
  return util.template("abstract-expression-get", {
    PROPERTY: node.property,
    OBJECT: node.object
  });
}
function PrivateDeclaration(node) {
  return t.variableDeclaration("const", node.declarations.map(function(id) {
    return t.variableDeclarator(id, t.newExpression(t.identifier("WeakMap"), []));
  }));
}
exports.__esModule = true;
