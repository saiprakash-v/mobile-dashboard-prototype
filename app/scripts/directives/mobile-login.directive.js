function mobileLoginController() {

}





angular.module("mobileDashboard").directive('mobileLogin', function () {
    return {
        restrict: "E",
        bindToController: true,
        templateUrl: '../../templates/mobile-login.directive.html',
        controller: mobileLoginController,
    }
});