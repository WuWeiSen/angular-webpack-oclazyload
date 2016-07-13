'use strict'; 
var infoCtrl = require('./info.js');
var profileModule = angular.module('profile', []);
profileModule.controller('profile.InfoController', infoCtrl);
module.exports = profileModule;
