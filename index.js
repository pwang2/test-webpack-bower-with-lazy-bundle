var mod1 = require('./module1.js');
var load$ = require('bundle?lazy!jquery');
setTimeout(function() {
    load$(function(jQuery) {
        alert(jQuery.fn.jquery);
    });

}, 3999);
