angular.module("mobileDashboard")
    .controller('awcReportsController', ['$scope', function($scope) {
        $scope.selectedAWCCenter = 'Sardar Patel Nagar [46464853232135]';
        $scope.selectedMonth = 'December 2019';
        $scope.summaryList = awcNutritionData.kpi;
        $scope.currentHeading = '';
        $scope.currentOption = 1;
        $scope.currentInformation = null;
        $scope.currentOptionName = 'Maternal Child Nutrition';
        $scope.chartData = awcDemographicData.chart;
        $scope.showFilters = false;
        const filterOption = {
            0 : 'date',
            1 : 'location'
        };
        $scope.filterData = {
            'date' : null,
            'location': null
        };
        $scope.currentSection = filterOption[1];
        //this variable will be true after selecting awc
        $scope.awcAvailable = false;
        $scope.chartOptions = {
            chart: {
                type: 'multiBarChart',
                height: 350,
                width: 600,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 80,
                },
                x: function (d) {
                    return d[0];
                },
                y: function (d) {
                    return d[1];
                },
                showValues: true,
                showControls: false,
                useInteractiveGuideline: true,
                showLegend: false,
                duration: 500,
                xAxis: {
                    axisLabel: '',
                    tickFormat: function (d) {
                        if (typeof d === 'number') {
                            return d3.time.format('%m/%d/%y')(new Date(d));
                        } else if (typeof d === 'string') {
                            return d;
                        }
                    },
                },
                yAxis: {
                    axisLabel: '',
                }
            },
        };
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
        $scope.changeOption = function (optionNumber) {
            $scope.currentOption = optionNumber;
            switch (optionNumber) {
                case 1:
                    $scope.currentOptionName = 'Maternal Child Nutrition';
                    $scope.summaryList = awcNutritionData.kpi;
                    break;
                case 2:
                    $scope.currentOptionName = 'Demographics';
                    $scope.summaryList = awcDemographicData.kpi;
                    break;
                case 3:
                    $scope.currentOptionName = 'AWC Infrastructure';
                    $scope.summaryList = awcInfrastructureData.kpi;
                    break;
            }
            //Information tab is closed in case it is open
            $scope.closeInformation();
        };
        $scope.openNavMenu = function () {
            $scope.$emit('open_nav_menu',{});
        };
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

        $scope.changeFilterSection = function (sectionNumber) {
            $scope.currentSection = filterOption[sectionNumber];
            document.getElementById(filterOption[1-sectionNumber]+'Section').
                style.borderBottom = '0px solid #0047CC';
            document.getElementById(filterOption[sectionNumber]+'Section').
                style.borderBottom = '3px solid #0047CC';
        };
        $scope.applyAWCFilters = function () {
            $scope.$broadcast('request_awc_filter_data',{});
        };
        $scope.$on('awc_filter_data',function(event, data){
            if (data.location) {
                $scope.filterData['location'] = data.info;
            } else {
                $scope.filterData['date'] = data.info;
            }

            // TODO: check if filter data has awc center. if available then change awcAvailable as true;
            console.log('awc center selected');
            console.log($scope.filterData);
            $scope.awcAvailable = true;
        });
        $scope.resetFilters = function () {
            $scope.$broadcast('reset_awc_filter_data',{});
        }
    }])
    .directive('awcReports', function () {
        return {
            restrict: "E",
            bindToController: true,
            scope: {
            },
            templateUrl: '../../templates/awc-reports.html',
        }
    });
