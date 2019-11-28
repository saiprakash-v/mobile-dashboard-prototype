angular.module("mobileDashboard")
    .controller('filtersController', ['$scope', function($scope) {
        const filterOption = {
            0 : 'date',
            1 : 'location'
        };
        $scope.filterData = {
            'date' : null,
            'location': null
        };
        $scope.currentSection = filterOption[0];
        $scope.changeFilterSection = function (sectionNumber) {
            $scope.currentSection = filterOption[sectionNumber];
            document.getElementById(filterOption[1-sectionNumber]+'Section').
                style.borderBottom = '0px solid #0047CC';
            document.getElementById(filterOption[sectionNumber]+'Section').
                style.borderBottom = '3px solid #0047CC';
        };
        $scope.closeFilters = function () {
            $scope.$emit('close_filters', {});
        };
        $scope.applyFilters = function () {
            $scope.$broadcast('request_filter_data',{});
        };
        $scope.$on('filter_data',function(event, data){
            if (data.location) {
                $scope.filterData['location'] = data.info;
            } else {
                $scope.filterData['date'] = data.info;
            }
            //sending data to program summary
            $scope.$emit('sending_filter_data', $scope.filterData);
        });
        $scope.resetFilters = function () {
            $scope.$broadcast('reset_filter_data',{});
        }
    }])
    .directive('filters', function () {
        return {
            restrict: "E",
            bindToController: true,
            templateUrl: '/app/templates/filters.html',
        }
    });