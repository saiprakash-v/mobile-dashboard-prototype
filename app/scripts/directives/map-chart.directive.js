angular.module("mobileDashboard")
    .controller('mapChartController', ['$scope', function($scope) {
        $scope.chartViewData = chartViewData;
        $scope.mapViewData = mapViewData;
        $scope.selectedStateInfo = null;
        $scope.selectedStateName = null;
        $scope.selectedStatePercentage = null;
        $scope.showFilters = false;
        const viewOptions = {
            0 : 'map',
            1 : 'chart'
        };
        $scope.currentSection = viewOptions[0];
        $scope.displayFilters = function () {
            $scope.showFilters = true;
        };
        $scope.closeMapChartView = function () {
            //move back to program summary
        };
        $scope.changeView = function (sectionNumber) {
            $scope.currentSection = viewOptions[sectionNumber];
            document.getElementById(viewOptions[1-sectionNumber]+'View').
                style.borderBottom = '0px solid #0047CC';
            document.getElementById(viewOptions[sectionNumber]+'View').
                style.borderBottom = '3px solid #0047CC';
        };
        $scope.displayInfo = function (stateName, percentage) {
            $scope.selectedStateName = stateName;
            $scope.selectedStatePercentage = percentage;
            $scope.selectedStateInfo = mapViewData.report_data.data[stateName];
        };
        $scope.$on('sending_filter_data',function(event, data) {
            console.log('Filter data received');
            console.log(data);
            $scope.showFilters = false;
        });
        $scope.$on('close_filters',function() {
            $scope.showFilters = false;
        });
    }])
    .directive('mapChart', function () {
        return {
            restrict: "E",
            bindToController: true,
            templateUrl: '/app/templates/map-chart.html',
        }
    });