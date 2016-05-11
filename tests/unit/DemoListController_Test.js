'use strict';

angular.module('MockDemoListRESTServiceModule', ['ngResource'])
    .factory('MockrestDemoListRESTCalls', ['$resource', function ($resource) {
        return {};
    }]);



describe('DemoListController:: ', function () {


    var scope, ctrl;

    beforeEach(angular.mock.module('DemoListControllerModule'));



    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('DemoListController', {
            $scope: scope,
            restDemoListRESTCalls: {}

        });

    }));


    it('$scope.restCall :: Check the rest callback function via mock function :: Return true', function () {
        var mockRestDemoListRESTCallsGet = jasmine.createSpy('RestDemoListRESTCallsGet');
        scope.callbackObject.setRestCall(mockRestDemoListRESTCallsGet);

        // call the ..
        scope.callbackObject.restCall(mockRestDemoListRESTCallsGet);

        expect(mockRestDemoListRESTCallsGet).toHaveBeenCalled();

    });

    it('$scope.callresult:: Check the callback function via stub function  :: expect 6 ', function () {

        //prepare the  mock function to be called

        var mockIncreaseFunction = jasmine.createSpy('mockIncreaseFunction').and.callFake(function () {
            scope.callresult = 'ALMAAA';
        });

        scope.callbackObject.setButtonCall(mockIncreaseFunction);

        scope.letter = 'almaaa';

        scope.callbackObject.buttonCall();

        expect(scope.callresult).toBe('ALMAAA');

    });


    it('$scope.increase :: Check increase functionality  no stub :: expect KORTEEE', function () {

        scope.letter = 'korteee';
        // call the function directly
        scope.touppercase();
        expect(scope.callresult).toEqual('KORTEEE');


    });

});