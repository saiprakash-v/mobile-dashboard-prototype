angular.module("mobileDashboard")
    .controller('monthFilterController', ['$scope', function($scope) {
    }])
    .directive('monthFilter', function () {
        return {
            restrict: "E",
            bindToController: true,
            templateUrl: '/app/templates/month-filter.html',
        }
    });