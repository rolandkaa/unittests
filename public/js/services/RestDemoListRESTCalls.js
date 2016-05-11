'use strict';

var DemoListRESTServiceModule = angular.module('DemoListRESTServiceModule', ['ngResource']);

DemoListRESTServiceModule.factory('restDemoListRESTCalls', ['$resource', function ($resource) {

        return $resource(
                 'http://localhost:3030/demolist/:demoID', {demoID: '@demoID'}
             );
     } 
]);

