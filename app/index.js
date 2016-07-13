'use strict';
var app = angular.module('app', [
    require('angular-ui-router'),
    'ngAnimate',
    'ngResource',
    'oc.lazyLoad'
]);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/p/info');
    $stateProvider
        // 个人信息模块
        .state('profile', {
            url: '/p',
            template: '<div ui-view></div>',
            abstract: true,
            resolve: {
                load: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function() {
                        let module = require('./src/profile/main.js');
                        $ocLazyLoad.load({
                            name: 'profile'
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            }
        })
        .state('profile.index', {
            url: '/',
            abstract: true,
            template: require('./src/profile/index.html')
        })
        .state('profile.index.info', {
            url: 'info',
            views: {
                'editView': {
                    template: require('./src/profile/info.html')
                }
            },
            data: {
                title: '详细信息',
            }
        })
        .state('ent', {
            url: '/ent',
            template: require('./src/ent/index.html'),
            resolve: {
                load: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function() {
                        let module = require('./src/ent/main.js');
                        $ocLazyLoad.load({
                            name: 'ent'
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            }
        });
}]);
app.controller('MainCtrl', ['$scope', '$state', '$location', function($scope, $state, $location) {
    var vm = $scope.vm = {
        logo: require('./img/logo.png')
    };
    var _methods = {
    };
    $scope.methods = {
    }
}]);
module.exports = app;
