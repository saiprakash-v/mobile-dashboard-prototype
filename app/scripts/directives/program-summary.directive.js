angular.module("mobileDashboard")
    .controller('programSummaryController', ['$scope', function($scope) {
        $scope.summaryList = summary;
        $scope.currentOption = 1;
        $scope.currentHeading = '';
        $scope.currentInformation = '';
        $scope.currentOptionName = 'Maternal Child Nutrition';
        $scope.showLoader = true;
        $scope.setInformation = function (heading, info) {
            $scope.currentInformation = info;
            $scope.currentHeading = heading;
            document.getElementById('summary-info').style.height='90vh';
            document.getElementById('summary-info').style.top='10vh';
            document.getElementById('summary-info').style.paddingTop='30px';
        };
        $scope.closeInformation = function () {
            document.getElementById('summary-info').style.height='0';
            document.getElementById('summary-info').style.top='100vh';
            document.getElementById('summary-info').style.paddingTop='0px';
        };
        //this function is for switching between the four options provided at top
        $scope.changeOption = function (optionNumber) {
            $scope.currentOption = optionNumber;
            // TODO: the summary list should be different for different options
            $scope.summaryList = summary;
            // TODO: the name of the option should also be changed for different options
            $scope.currentOptionName = 'Maternal Child Nutrition';
            //Information tab is closed in case it is open
            $scope.closeInformation();
        };
        $scope.openNavMenu = function () {
            $scope.$emit('open_nav_menu',{});
        };
        $scope.showFilters = false;
        $scope.displayFilters = function () {
            $scope.showFilters = true;
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
    .directive('programSummary', function () {
    return {
        restrict: "E",
        bindToController: true,
        scope: {
        },
        templateUrl: '../../templates/program-summary.html',
    }
});