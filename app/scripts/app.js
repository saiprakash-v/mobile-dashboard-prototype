let mobileDashboard = angular.module("mobileDashboard", ['ngRoute', 'iosdatepicker', 'nvd3']);

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
        when('/see-more', {
            templateUrl: '/app/templates/map-chart.html',
            controller: 'mapChartController'
        }).
        when('/awc-reports', {
            templateUrl: '/app/templates/awc-reports.html',
            controller: 'awcReportsController'
        }).
        when('/loading-screen', {
            templateUrl: '/app/templates/loader.html',
            controller: 'loaderController'
        }).
        otherwise({
            redirectTo: '/error'
        });
    }]);
