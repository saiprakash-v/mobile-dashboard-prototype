'use strict';

// Register `home` component, along with its associated controller and template
angular.
module('home').
component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['Phone',
        function HomeController(Phone) {
            this.phones = Phone.query();
            this.orderProp = 'age';
        }
    ]
});