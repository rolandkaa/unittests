'use strict';

var myCtrlModule = angular.module('DemoListControllerModule', []);


myCtrlModule.controller('DemoListController', ['$scope', 'restDemoListRESTCalls',
    function ($scope, restDemoListRESTCalls) {

        $scope.callbackObject = {

            // set the dependecy as we requested
            setButtonCall: function (param) {

                this.buttonCall = param;
            },
            buttonCall: function () {
            },

            setRestCall: function (param) {

                this.restCall = param;
            },

            restCall: function () {
            }

        };

        $scope.letter = 'Alma';
        $scope.callresult = '-';
        $scope.restresult = '-';

        $scope.touppercase = function () {
            $scope.callresult = $scope.letter.toUpperCase();

        };

        $scope.callbackObject.setButtonCall($scope.touppercase);

        $scope.callbackObject.setRestCall(restDemoListRESTCalls.get);
        $scope.restCall = function () {
            $scope.callbackObject.restCall({demoID: 1234}, function (resp) {
                $scope.restresult = resp.data;
            });
        };


        $scope.buttonCall = function () {
            $scope.callbackObject.buttonCall();

        };

    }]);


