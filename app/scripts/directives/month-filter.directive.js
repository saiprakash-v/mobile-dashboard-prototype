angular.module("mobileDashboard")
    .controller('monthFilterController', ['$scope', function($scope) {
        $scope.date = new Date();
        $scope.$on('request_filter_data',function(){
            $scope.$emit('filter_data',{'date': true, 'info' : $scope.date });
        });
        $scope.$on('request_awc_filter_data',function(){
            $scope.$emit('awc_filter_data',{'date': true, 'info' : $scope.date });
        });
        $scope.$on('reset_filter_data',function(){
            $scope.date = new Date();
        });
        $scope.$on('reset_awc_filter_data',function(){
            $scope.date = new Date();
        });
        $scope.$on('date_picked',function(event, data){
            $scope.date = data.info;
        });
    }])
    .directive('monthFilter', function () {
        return {
            restrict: "E",
            bindToController: true,
            templateUrl: '/app/templates/month-filter.html',
        }
    });