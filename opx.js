/**
 * Created by Administrator on 2016/9/24.
 */
"use strict";
var sdopx = require("sdopx");

exports.__express = function () {
    var args = Array.prototype.slice.call(arguments);
    var path = args.shift();
    var func = args.pop();
    var data = args.shift() || {};
    var opts = args.pop() || {};
    var result = '';
    try {
        sdopx.Sdopx.extension='opx';
        var sdx = new sdopx.Sdopx();
        sdx._book = data;
        result = sdx.fetch('file:' + path);
    }
    catch (err) {
        return func(err);
    }
    return func(null, result);
};
