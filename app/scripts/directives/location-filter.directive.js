angular.module("mobileDashboard")
    .controller('locationFilterController', ['$scope', function($scope) {
        const defaultLocation = {
            name : 'All'
        };
        $scope.currentHierarchyDepth = 0;
        $scope.locationOptions = hierarchy;
        $scope.selectedLocation = {
            0 : defaultLocation,
            1 : defaultLocation,
            2 : defaultLocation,
            3 : defaultLocation,
            4 : defaultLocation
        };
        $scope.currentLocationType = 'State';
        $scope.showOptions = false;
        $scope.currentLocationOptions = [];
        $scope.selectLocation = function (hierarchyIndex) {
            $scope.currentHierarchyDepth = hierarchyIndex;
            //assign appropriate data from api
            $scope.currentLocationOptions = locations[hierarchyIndex];
            $scope.currentLocationType = $scope.locationOptions[hierarchyIndex];
            $scope.showOptions = true;
        };
        $scope.closeOptions = function () {
            $scope.showOptions = false;
        };
        $scope.onSelect = function (selectedOptionIndex) {
            if (selectedOptionIndex === -1) {
                $scope.selectedLocation[$scope.currentHierarchyDepth] = defaultLocation;
            } else {
                //save selected option using index
                // It can be accessed as:$scope.currentLocationOptions[selectedOptionIndex]
                // use hierarchy depth to determine whether its a state or district...
                $scope.selectedLocation[$scope.currentHierarchyDepth] = $scope.currentLocationOptions[selectedOptionIndex];
                $scope.currentHierarchyDepth = $scope.currentHierarchyDepth + 1;
            }
            for (let i = 0; i > $scope.currentHierarchyDepth; i++) {
                $scope.selectedLocation[i] = defaultLocation;
            }
            $scope.closeOptions(); //closing options
        };
        $scope.$on('request_filter_data',function(){
            $scope.$emit('filter_data',{'location': true, 'info' : $scope.selectedLocation });
        });
        $scope.$on('reset_filter_data',function(){
            $scope.currentHierarchyDepth = 0;
            $scope.selectedLocation = {
                0 : defaultLocation,
                1 : defaultLocation,
                2 : defaultLocation,
                3 : defaultLocation,
                4 : defaultLocation
            };
            $scope.currentLocationType = 'State';
            $scope.showOptions = false;
            $scope.currentLocationOptions = [];
        });
    }])
    .directive('locationFilter', function () {
        return {
            restrict: "E",
            bindToController: true,
            templateUrl: '/app/templates/location-filter.html',
        }
    });