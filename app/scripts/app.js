let mobileDashboard = angular.module("mobileDashboard", ['ngRoute']);

mobileDashboard.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            redirectTo: '/login',
        }).
        when('/login', {
            templateUrl: '/app/templates/mobile-login.directive.html',
        }).
        otherwise({
            redirectTo: '/error'
        });
    }]);