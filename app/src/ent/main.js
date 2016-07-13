'use strict'; 
var indexCtrl = require('./index.js');
var entModule = angular.module('ent', []);
entModule.controller('ent.IndexController', indexCtrl);
module.exports = entModule;
