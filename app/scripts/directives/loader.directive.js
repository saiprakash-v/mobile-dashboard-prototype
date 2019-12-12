angular.module("mobileDashboard")
    .controller('loaderController', ['$scope', function($scope) {

    }])
    .directive('loader', function () {
        return {
            restrict: "E",
            bindToController: true,
            templateUrl: '/app/templates/loader.html',
        }
    });