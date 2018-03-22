// External dependencies
import * as angular from 'angular';
import {  setAngularJSGlobal } from '@angular/upgrade/static';

setAngularJSGlobal(angular);

// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
const AppModuleAngularJS = angular.module("sampleapp", [],
    [
        '$compileProvider',
        function($compileProvider) {
            // configure new 'compile' directive by passing a directive
            // factory function. The factory function injects the '$compile'
            $compileProvider.directive('compile', [
                '$compile',
                function($compile) {
                    // directive factory creates a link function
                    return function(scope, element, attrs) {
                        scope.$watch(
                            function(scope) {
                                // watch the 'compile' expression for changes
                                return scope.$eval(attrs.compile);
                            },
                            function(value) {
                                // when the 'compile' expression changes
                                // assign it into the current DOM
                                element.html(value);

                                // compile the new DOM and link it to the current
                                // scope.
                                // NOTE: we only compile .childNodes so that
                                // we don't get into infinite loop compiling ourselves
                                $compile(element.contents())(scope);
                            }
                        );
                    };
                }
            ]);
        }
    ]
);


AppModuleAngularJS.component('ng1Hero', {
    bindings: {hero: '<', onRemove: '&'},
    transclude: true,
    template: `<div class="title" ng-transclude></div>
               <h2>{{ $ctrl.hero.name }} {{hero}}</h2>
               <p>{{ $ctrl.hero.description }}</p>
               <p>{{ $ctrl.example }}</p>
               <h2>РАБОТАЕТ!</h2>
               <div compile="'html compile <ng1-test> </ng1-test>'"></div> 
               <button ng-click="$ctrl.onRemovSmth()" mat-raised-button>Remove</button> <p>some</p>
               <button ng-click="onRemove()" mat-raised-button>Remove</button> <p>some</p>
               <p>{{$ctrl | json}}</p>
`,
    controller: () => {

        return {

            example: 'example',
            onRemove: () => {
                console.log('onRemove', this);
            },
            onRemovSmth: () => {
                console.log('onRemove', this);
            }
        };
    },
    controllerAs: '$ctrl'
});

AppModuleAngularJS.component('ng1Test', {
    template: '<p>ng1Test works</p>'
})

export default AppModuleAngularJS;
