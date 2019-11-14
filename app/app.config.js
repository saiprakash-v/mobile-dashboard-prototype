'use strict';

angular.
module('phonecatApp').
config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
        when('/dashboard', {
            template: '<home>@TODO</home>'
        }).
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
]);