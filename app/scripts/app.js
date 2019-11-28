let mobileDashboard = angular.module("mobileDashboard", ['ngRoute', 'iosdatepicker']);

mobileDashboard.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            redirectTo: '/login',
        }).
        when('/login', {
            templateUrl: '/app/templates/mobile-login.directive.html',
        }).
        when('/program-summary', {
            templateUrl: '/app/templates/program-summary.html',
            controller: 'programSummaryController'
        }).
        otherwise({
            redirectTo: '/error'
        });
    }]);