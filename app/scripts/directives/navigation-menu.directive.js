angular.module("mobileDashboard")
    .controller('navigationController', ['$scope', function($scope) {
        $scope.$on('open_nav_menu',function(event,data){
            document.getElementById('nav-menu').style.left = '0';
        });
        $scope.closeMenu = function () {
            document.getElementById('nav-menu').style.left = '-300px';
        }
    }])
    .directive('navigationMenu', function () {
    return {
        restrict: "E",
        bindToController: true,
        templateUrl: '/app/templates/navigation-menu.html',
    }
});