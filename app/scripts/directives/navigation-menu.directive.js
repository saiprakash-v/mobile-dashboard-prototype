angular.module("mobileDashboard")
    .controller('navigationController', ['$scope', function($scope) {
        $scope.selectedMenuOption = 'programSummary';
        $scope.$on('open_nav_menu',function(event,data){
            document.getElementById('nav-menu').style.left = '0';
        });
        $scope.closeMenu = function () {
            document.getElementById('nav-menu').style.left = '-300px';
        };
        $scope.expandOptions = function (expandedSectionId) {
            if (document.getElementById(expandedSectionId).style.height === '100%') {
                document.getElementById(expandedSectionId).style.height = '0';
            } else {
                document.getElementById(expandedSectionId).style.height = '100%';
            }
            if (expandedSectionId !== 'nutrition') {
                document.getElementById('nutrition').style.height = '0';
            }
            if (expandedSectionId !== 'reach') {
                document.getElementById('reach').style.height = '0';
            }
            if (expandedSectionId !== 'demographics') {
                document.getElementById('demographics').style.height = '0';
            }
            if (expandedSectionId !== 'infrastructure') {
                document.getElementById('infrastructure').style.height = '0';
            }
        };
        $scope.selectMenuOption = function (optionId) {
            document.getElementById($scope.selectedMenuOption).style.background = 'none';
            document.getElementById($scope.selectedMenuOption).style.borderRight = 'none';
            $scope.selectedMenuOption = optionId;
            document.getElementById(optionId).style.background = '#363c51';
            document.getElementById(optionId).style.borderRight = '4px solid #00a8c6';
        }
    }])
    .directive('navigationMenu', function () {
    return {
        restrict: "E",
        bindToController: true,
        templateUrl: '/app/templates/navigation-menu.html',
    }
});