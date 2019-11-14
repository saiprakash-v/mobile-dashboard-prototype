'use strict';

describe('home', function() {

    // Load the module that contains the `home` component before each test
    beforeEach(module('home'));

    // Test the controller
    describe('HomeController', function() {
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('home/phones.json')
                .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

            ctrl = $componentController('home');
        }));

        it('should create a `phones` property with 2 phones fetched with `$http`', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.phones).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });

        it('should set a default value for the `orderProp` property', function() {
            expect(ctrl.orderProp).toBe('age');
        });

    });

});